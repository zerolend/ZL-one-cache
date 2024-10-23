import { Request, Response } from "express";
import {
  PoolBaseCurrencyHumanized,
  ReserveDataHumanized,
  ReservesIncentiveDataHumanized,
  RewardInfoHumanized,
  UiIncentiveDataProvider,
  UiPoolDataProvider,
} from "@aave/contract-helpers";
import { availableMarkets, CustomMarket, marketsData } from "./reserveConfig";
import { getProvider } from "./providers";
import { BigNumber, ethers } from "ethers";
import cache from "../utils/cache";

export type PoolReserve = {
  reserves?: ReserveDataHumanized[];
  reserveIncentives?: ReservesIncentiveDataHumanized[];
  baseCurrencyData?: PoolBaseCurrencyHumanized;
};

export const fetchReseveData = async () => {
  const data: Map<number, Map<string, PoolReserve>> = new Map();
  await Promise.all(
    availableMarkets.map(async (item: CustomMarket) => {
      const chainId = marketsData[item].chainId;
      const marketData = marketsData[item];
      const provider: ethers.providers.Provider = getProvider(
        chainId
      ) as ethers.providers.Provider;

      const poolDataProviderContract = new UiPoolDataProvider({
        uiPoolDataProviderAddress: marketData.addresses.UI_POOL_DATA_PROVIDER,
        provider: provider,
        chainId: chainId,
      });
      const uiIncentiveDataProviderContract = new UiIncentiveDataProvider({
        uiIncentiveDataProviderAddress:
          marketData.addresses.UI_INCENTIVE_DATA_PROVIDER || "",
        provider: provider,
        chainId: chainId,
      });
      const lendingPoolAddressProvider =
        marketData.addresses.LENDING_POOL_ADDRESS_PROVIDER;

      try {
        // Fetch Pool Data
        let reservesResponse =
          await poolDataProviderContract.getReservesHumanized({
            lendingPoolAddressProvider,
          });

        // Modify reservesResponse if chainId is 81457
        if (chainId === 81457) {
          reservesResponse = {
            ...reservesResponse,
            reservesData: reservesResponse.reservesData.map((r) => {
              if (r.symbol === "WETH") {
                r.liquidityRate = BigNumber.from(r.liquidityRate)
                  .add("34250002509832303042121832") // 3.4% native yield
                  .toString();
              }
              if (r.symbol === "USDB") {
                r.liquidityRate = BigNumber.from(r.liquidityRate)
                  .add("80250002509832303042121832") // 8% native yield
                  .toString();
              }
              return r;
            }),
          };
        }

        // Fetch Incentive Data
        let reserveIncentivesResponse =
          await uiIncentiveDataProviderContract.getReservesIncentivesDataHumanized(
            {
              lendingPoolAddressProvider,
            }
          );

        // Modify reserveIncentivesResponse if chainId is 81457
        if (chainId === 81457) {
          const modifyRtokens = (t: RewardInfoHumanized[]) => {
            return t
              .filter((tt) => Number(tt.emissionPerSecond) > 0)
              .map((tt) => {
                if (tt.rewardTokenSymbol === "GOLD")
                  tt.rewardTokenSymbol = "zBLAST-GOLD";
                if (tt.rewardTokenSymbol === "BLAST")
                  tt.rewardTokenSymbol = "zBLAST";
                return tt;
              });
          };
          reserveIncentivesResponse = reserveIncentivesResponse.map((r) => ({
            ...r,
            aIncentiveData: {
              ...r.aIncentiveData,
              rewardsTokenInformation: modifyRtokens(
                r.aIncentiveData.rewardsTokenInformation
              ),
            },
            vIncentiveData: {
              ...r.vIncentiveData,
              rewardsTokenInformation: modifyRtokens(
                r.vIncentiveData.rewardsTokenInformation
              ),
            },
          }));
        }

        // Return both pool data and incentive data
        if (!data.get(chainId)) data.set(chainId, new Map());
        if (!data.get(chainId)?.get(lendingPoolAddressProvider)) {
          data.get(chainId)!.set(lendingPoolAddressProvider, {
            reserves: reservesResponse.reservesData,
            baseCurrencyData: reservesResponse.baseCurrencyData,
            reserveIncentives: reserveIncentivesResponse,
          });
        } else {
          data.get(chainId)!.get(lendingPoolAddressProvider)!.reserves =
            reservesResponse.reservesData;
          data.get(chainId)!.get(lendingPoolAddressProvider)!.baseCurrencyData =
            reservesResponse.baseCurrencyData;
          data
            .get(chainId)!
            .get(lendingPoolAddressProvider)!.reserveIncentives =
            reserveIncentivesResponse;
        }
      } catch (e) {
        console.error("Error fetching pool data", e);
      }
    })
  );
  const serializedData = Object.fromEntries(
    [...data.entries()].map(([chainId, innerMap]) => [
      chainId,
      Object.fromEntries(innerMap.entries()),
    ])
  );
  cache.set("reserve:data", serializedData, 60 * 60);
  return data;
};

export const getReserveData = async (req: Request, res: Response) => {
  const data: any = cache.get("reserve:data") || {};
  res.json(data);
};
