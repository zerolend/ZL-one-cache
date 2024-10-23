import nconf from "nconf";
import { ethers } from "ethers";

// Define the chain IDs for each network
const CHAIN_IDS = {
  Zksync: 324, // Example chain ID for zkSync (adjust as necessary)
  Manta: 169, // Example chain ID for Manta (adjust as necessary)
  Blast: 81457, // Example chain ID for Blast (adjust as necessary)
  Cake: 9101, // Example chain ID for Cake (adjust as necessary)
  Linea: 59144, // Example chain ID for Linea (adjust as necessary)
  Ethereum: 1, // Example chain ID for ETH LRT (adjust as necessary)
  XLayer: 196, // OKX chain ID (adjust as necessary)
  Base: 8453,
  Zircuit: 48900,
};

// Define providers for each network
const providers = {
  [CHAIN_IDS.Zksync]: new ethers.providers.JsonRpcProvider(
    nconf.get("ZKSYNC_RPC_URL")
  ),
  [CHAIN_IDS.Manta]: new ethers.providers.JsonRpcProvider(
    nconf.get("MANTA_RPC_URL")
  ),
  [CHAIN_IDS.Blast]: new ethers.providers.JsonRpcProvider(
    nconf.get("BLAST_RPC_URL")
  ),
  [CHAIN_IDS.Cake]: new ethers.providers.JsonRpcProvider(
    nconf.get("CAKE_RPC_URL")
  ),
  [CHAIN_IDS.Linea]: new ethers.providers.JsonRpcProvider(
    nconf.get("LINEA_RPC_URL")
  ),
  [CHAIN_IDS.Ethereum]: new ethers.providers.JsonRpcProvider(
    nconf.get("ETH_LRT_RPC_URL")
  ),
  [CHAIN_IDS.XLayer]: new ethers.providers.JsonRpcProvider(
    nconf.get("XLAYER_RPC_URL")
  ),
  [CHAIN_IDS.Base]: new ethers.providers.JsonRpcProvider(
    nconf.get("BASE_RPC_URL")
  ),
  [CHAIN_IDS.Zircuit]: new ethers.providers.JsonRpcProvider(
    nconf.get("ZIRCUIT_RPC_URL")
  ),
};

export const getProvider = (
  chainId: number
): ethers.providers.JsonRpcProvider | null => {
  const provider = providers[chainId];
  if (!provider) {
    console.error(`Provider not found for chain ID: ${chainId}`);
    return null;
  }
  return provider;
};
