import { ChainId } from "@aave/contract-helpers";

export const governance_start_date = new Date(
  "May 6, 2024 8:00:00 UTC"
).getTime();
export const convert_start_date = new Date("May 6, 2024 7:30:00 UTC").getTime();

export type MarketDataType = {
  v3?: boolean;
  description?: string;
  marketTitle: string;
  marketAltName?: string;
  grpKey?: string;
  chainId: number; // the network the market operates on
  isAlpha?: boolean;
  enabledFeatures?: {
    paymasters?: boolean;
    liquiditySwap?: boolean;
    staking?: boolean;
    governance?: boolean;
    faucet?: boolean;
    collateralRepay?: boolean;
    incentives?: boolean;
    permissions?: boolean;
    debtSwitch?: boolean;
    isGasless?: boolean;
    withdrawAndSwitch?: boolean;
    switch?: boolean;
    bridge?: boolean;
  };
  tags?: { text: string; color: any }[];
  whiteListedIncentives: readonly string[];
  isFork?: boolean;
  permissionComponent?: any;
  disableCharts?: boolean;
  subgraphUrl?: string;
  addresses: {
    LENDING_POOL_ADDRESS_PROVIDER: string;
    LENDING_POOL: string;
    WETH_GATEWAY?: string;
    PAYMASTER?: string;
    SWAP_COLLATERAL_ADAPTER?: string;
    REPAY_WITH_COLLATERAL_ADAPTER?: string;
    DEBT_SWITCH_ADAPTER?: string;
    WITHDRAW_SWITCH_ADAPTER?: string;
    FAUCET?: string;
    PERMISSION_MANAGER?: string;
    WALLET_BALANCE_PROVIDER: string;
    L2_ENCODER?: string;
    UI_POOL_DATA_PROVIDER: string;
    UI_INCENTIVE_DATA_PROVIDER?: string;
    COLLECTOR?: string;
    V3_MIGRATOR?: string;
    EARLYZERO_ADDRESS?: string;
    LEVERAGE?: string;
    OFT_ADAPTER?: string;
    OFT?: string;
    VESTING_ADDRESS?: string;
    STAKING_BONUS?: string;
    OMNI_STAKING?: string;
    LOCKER_TOKEN?: string;
    LOCKER_LP?: string;
    EARLY_ZERO_VESTING?: string;
    ZERO_ADDRESS?: string;
    POOL_VOTER?: string;
    ZERO_AIRDROP?: string;
    ORACLE_ADDRESS?: string;
  };
  /**
   * https://www.hal.xyz/ has integrated aave for healtfactor warning notification
   * the integration doesn't follow aave market naming & only supports a subset of markets.
   * When a halIntegration is specified a link to hal will be displayed on the ui.
   */
  halIntegration?: {
    URL: string;
    marketName: string;
  };
};

export const availableMarkets = [
  "legacy_linea_v3",
  "legacy_mainnet_lrt_v3",
  "legacy_mainnet_btc_lrt_v3",
  "legacy_linea_croak_v3",
  "legacy_linea_foxy_v3",
  "legacy_zksync_era_v3",
  "legacy_manta_v3",
  "legacy_blast_v3",
  "legacy_layerx_v3",
  "legacy_base_v3",
  "legacy_zircuit_v3",
  "legacy_mainnet_rwa_v3",
];

export enum CustomMarket {
  legacy_linea_v3 = "legacy_linea_v3",
  legacy_mainnet_lrt_v3 = "legacy_mainnet_lrt_v3",
  legacy_mainnet_btc_lrt_v3 = "legacy_mainnet_btc_lrt_v3",
  legacy_linea_croak_v3 = "legacy_linea_croak_v3",
  legacy_linea_foxy_v3 = "legacy_linea_foxy_v3",
  legacy_zksync_era_v3 = "legacy_zksync_era_v3",
  legacy_manta_v3 = "legacy_manta_v3",
  legacy_blast_v3 = "legacy_blast_v3",
  legacy_layerx_v3 = "legacy_layerx_v3",
  legacy_base_v3 = "legacy_base_v3",
  legacy_zircuit_v3 = "legacy_zircuit_v3",
  legacy_mainnet_rwa_v3 = "legacy_mainnet_rwa_v3",
}

export const marketsData = {
  legacy_linea_v3: {
    //linea actual market
    marketTitle: "Linea",
    marketAltName: "Linea Main Market",
    grpKey: "linea",
    chainId: 59144,
    v3: true,
    tags: [
      { text: "Biggest", color: "yellow" },
      { text: "Main", color: "green" },
    ],
    enabledFeatures: {
      governance: true,
      staking: true,
      collateralRepay: false,
      incentives: true,
      bridge: true,
    },
    whiteListedIncentives: ["zero"],
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER:
        "0xC44827C51d00381ed4C52646aeAB45b455d200eB",
      LENDING_POOL: "0x2f9bB73a8e98793e26Cb2F6C4ad037BDf1C6B269",
      WETH_GATEWAY: "0x5d50bE703836C330Fc2d147a631CDd7bb8D7171c",
      WALLET_BALANCE_PROVIDER: "0xE05361EA51E20118072aec0fB0FD178e8b09D69e",
      UI_POOL_DATA_PROVIDER: "0x81b3184A3B5d4612F2c26A53Da8D99474B91B2D2",
      UI_INCENTIVE_DATA_PROVIDER: "0xCbDc0aeD7CDf2472784068abEf23a902CafABb98",
      // COLLECTOR: '0x89fEc31daD373922879bd6279ccDc3666c5D1b7a',
      EARLYZERO_ADDRESS: "0x40A59A3F3b16d9e74C811d24D8b7969664cFe180",
      OFT_ADAPTER: "0x1dAD693787C5817Ef3102F513025FA6a66039E8E",
      STAKING_BONUS: "0xD676c56A93Fe2a05233Ce6EAFEfDe2bd4017B3eA",
      OMNI_STAKING: "0xf374229a18ff691406f99CCBD93e8a3f16B68888",
      LOCKER_TOKEN: "0x08D5FEA625B1dBf9Bae0b97437303a0374ee02F8",
      ZERO_ADDRESS: "0x78354f8DcCB269a615A7e0a24f9B0718FDC3C7A7",
      VESTING_ADDRESS: "0x9FA72ea96591e486FF065E7C8A89282dEDfA6C12",
      POOL_VOTER: "0x5346e9ab27D7874Db95993667D1Cb8338913f0aF",
      ORACLE_ADDRESS: "0x1C2B983E1FE9830B80c315b7dd2A331960C842DC",
      ZERO_AIRDROP: "0x569982A604cA61fa425fD924ADF08BE9e4f3035f",
    },
  },
  legacy_mainnet_lrt_v3: {
    marketTitle: "Ethereum LRTs",
    chainId: 1,
    v3: true,
    enabledFeatures: {
      staking: false,
      liquiditySwap: true,
      debtSwitch: true,
      incentives: true,
      bridge: true,
    },
    whiteListedIncentives: ["zero"],
    tags: [
      { text: "Trending", color: "green" },
      { text: "LRTs", color: "yellow" },
    ],
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER:
        "0xFD856E1a33225B86f70D686f9280435E3fF75FCF",
      LENDING_POOL: "0x3BC3D34C32cc98bf098D832364Df8A222bBaB4c0",
      WETH_GATEWAY: "0x6eA9d99c6653DF987bDEa11ffcd56DFB4B5d38b4",
      WALLET_BALANCE_PROVIDER: "0xa1e6BcDab01B9d7De83647d1Bbd4113c6c2B4e0d",
      // COLLECTOR: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c',
      SWAP_COLLATERAL_ADAPTER: "0x189cfdb4d7a08D926CA209D84a713c4c629645aF",
      DEBT_SWITCH_ADAPTER: "0x80Ce5A187E477663fcFE99A108eefd9FBf0acC18",
      UI_POOL_DATA_PROVIDER: "0xa6EA08D16d47feE408505fda73520EbefC68Ef01",
      UI_INCENTIVE_DATA_PROVIDER: "0x0A1198DDb5247a283F76077Bb1E45e5858ee100b",
      EARLYZERO_ADDRESS: "0x3db28e471fa398bf2527135a1c559665941ee7a3",
      OFT: "0x11dCc26d4bDAc03FFa8841f69313C38240FC429e",
      VESTING_ADDRESS: "",
      ZERO_ADDRESS: "0x11dCc26d4bDAc03FFa8841f69313C38240FC429e",
    },
  },
  legacy_mainnet_btc_lrt_v3: {
    marketTitle: "Bitcoin LRTs",
    chainId: 1,
    v3: true,
    enabledFeatures: {
      staking: false,
      liquiditySwap: true,
      debtSwitch: true,
      incentives: true,
      bridge: true,
    },
    tags: [
      { text: "Trending", color: "green" },
      { text: "BTC LRTs", color: "yellow" },
    ],
    whiteListedIncentives: ["zero"],
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER:
        "0x17878AFdD5772F4Ec93c265Ac7Ad8E2b29abB857",
      LENDING_POOL: "0xCD2b31071119D7eA449a9D211AC8eBF7Ee97F987",
      WETH_GATEWAY: "0x2787c0cb2F20010Ae2814Da9Ef20E04bb64B2466",
      WALLET_BALANCE_PROVIDER: "0xa1e6BcDab01B9d7De83647d1Bbd4113c6c2B4e0d",
      COLLECTOR: "0x4e88e72bd81c7ea394cb410296d99987c3a242fe",
      SWAP_COLLATERAL_ADAPTER: "0x189cfdb4d7a08D926CA209D84a713c4c629645aF",
      DEBT_SWITCH_ADAPTER: "0x80Ce5A187E477663fcFE99A108eefd9FBf0acC18",
      UI_POOL_DATA_PROVIDER: "0xa6EA08D16d47feE408505fda73520EbefC68Ef01",
      UI_INCENTIVE_DATA_PROVIDER: "0x0A1198DDb5247a283F76077Bb1E45e5858ee100b",
      OFT: "0x2Da17fAf782ae884faf7dB2208BBC66b6E085C22",
      VESTING_ADDRESS: "",
      ZERO_ADDRESS: "0x2Da17fAf782ae884faf7dB2208BBC66b6E085C22",
    },
  },
  legacy_linea_croak_v3: {
    //linea actual market
    marketTitle: "Croak",
    marketAltName: "Croak Market",
    grpKey: "linea",
    chainId: 59144,
    v3: true,
    enabledFeatures: {
      staking: false,
      incentives: true,
    },
    tags: [{ text: "Memecoin", color: "green" }],
    whiteListedIncentives: ["croak"],
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER:
        "0xf38B16FA3FC809d40F568BFe5B092AD9Ef4E15ed",
      LENDING_POOL: "0xc6ff96AefD1cC757d56e1E8Dcc4633dD7AA5222D",
      WETH_GATEWAY: "0x60F97315200815DbdD003fAC19E94E68CaCB6230",
      WALLET_BALANCE_PROVIDER: "0xE1a4e28fF7515E8eC7CaDa5fCf583cd47698e826",
      UI_POOL_DATA_PROVIDER: "0x19dD9E60198D1a1b2f531005592222ed8DfdD826",
      UI_INCENTIVE_DATA_PROVIDER: "0xBbb913D8adaE54E34dA336EA5218432001292df2",
      // COLLECTOR: '0xbBe092a8cF3bFA489F933Ce69eA138CA1EEA2bbF',
      ZERO_ADDRESS: "0x78354f8DcCB269a615A7e0a24f9B0718FDC3C7A7",
    },
  },
  legacy_linea_foxy_v3: {
    marketTitle: "Foxy",
    marketAltName: "Foxy Market",
    grpKey: "linea",
    chainId: 59144,
    v3: true,
    enabledFeatures: {
      staking: false,
      incentives: true,
    },
    tags: [{ text: "Memecoin", color: "green" }],
    whiteListedIncentives: [],
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER:
        "0xaF9aB0C286a36A430C9bB7C58Ebf0BF075DDE595",
      LENDING_POOL: "0xbDAa004A456E7f2dAff00FfcDCbEaD5da27B7966",
      WETH_GATEWAY: "0x405BDA48cAB999865688eB1F5129C29a9cB0cDe1",
      WALLET_BALANCE_PROVIDER: "0xA770AF819A74BDB8a00e6C2aE19c4e434D276752",
      UI_POOL_DATA_PROVIDER: "0xa160571E7074EaC9652c0289C2969942Fc5CcA45",
      UI_INCENTIVE_DATA_PROVIDER: "0xbbe9548C50Db58cBEd8EbC2343fba02d3F8A5Af8",
      // COLLECTOR: '0x14aAD4668de2115e30A5FeeE42CFa436899CCD8A',
      ZERO_ADDRESS: "0x78354f8DcCB269a615A7e0a24f9B0718FDC3C7A7",
    },
  },
  legacy_layerx_v3: {
    marketTitle: "X Layer",
    chainId: 196,
    v3: true,
    enabledFeatures: {
      staking: false,
      incentives: true,
      bridge: true,
    },
    tags: [{ text: "Main", color: "green" }],
    whiteListedIncentives: ["zero"],
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER:
        "0x2f7e54ff5d45f77bFfa11f2aee67bD7621Eb8a93",
      LENDING_POOL: "0xfFd79D05D5dc37E221ed7d3971E75ed5930c6580",
      WETH_GATEWAY: "0x0f9bfa294bE6e3CA8c39221Bb5DFB88032C8936E",
      WALLET_BALANCE_PROVIDER: "0xaa999eA356F925BF1e856038c5D182Ae5E8A4973",
      UI_POOL_DATA_PROVIDER: "0xFaDFb0BC400427663020887e7c8073D03A35dc3c",
      UI_INCENTIVE_DATA_PROVIDER: "0x33B13F46a25D836CC0ce91B370305902aB6CF1Be",
      // COLLECTOR: '0x15785C5D383Fa33339CF5D5720546C24313BC66D',
      EARLYZERO_ADDRESS: "0x26F2232cd83E5fC6789f2A1D36274753d161523a",
      OFT: "0x843D794eD4335b27d02184ca86787C14e6247074",
      ZERO_ADDRESS: "0x843D794eD4335b27d02184ca86787C14e6247074",
    },
  },
  legacy_blast_v3: {
    marketTitle: "Blast",
    chainId: 81457,
    v3: true,
    enabledFeatures: {
      staking: false,
      incentives: true,
      // switch: true,
      bridge: true,
    },
    tags: [{ text: "Main", color: "green" }],
    whiteListedIncentives: ["zero"],
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER:
        "0xb0811a1FC9Fb9972ee683Ba04c32Cb828Bcf587B",
      LENDING_POOL: "0xa70B0F3C2470AbBE104BdB3F3aaa9C7C54BEA7A8",
      WETH_GATEWAY: "0xFaDFb0BC400427663020887e7c8073D03A35dc3c",
      WALLET_BALANCE_PROVIDER: "0x4Fcb7F18FA9255B52793dfd865d245bcec871468",
      UI_POOL_DATA_PROVIDER: "0xE230cF9Cee7b299F69778EF950A61de0dE520ba7",
      UI_INCENTIVE_DATA_PROVIDER: "0x66f3015534fae808773422e32b74f5732668dD5b",
      EARLYZERO_ADDRESS: "0x81b3184A3B5d4612F2c26A53Da8D99474B91B2D2",
      // COLLECTOR: '0x9698FdF843cbe4531610aC231B0047d9FFc13bC6',
      VESTING_ADDRESS: "",
      OFT: "0x357f93E17FdabEcd3fEFc488a2d27dff8065d00f",
      ZERO_ADDRESS: "0x357f93E17FdabEcd3fEFc488a2d27dff8065d00f",
    },
  },
  legacy_zksync_era_v3: {
    marketTitle: "zkSync",
    chainId: 324,
    v3: true,
    enabledFeatures: {
      paymasters: true,
      staking: false,
      incentives: true,
      isGasless: true,
      debtSwitch: true,
      switch: true,
      bridge: true,
    },
    tags: [{ text: "Main", color: "green" }],
    whiteListedIncentives: ["zero"],
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER:
        "0x4f285Ea117eF0067B59853D6d16a5dE8088bA259",
      LENDING_POOL: "0x4d9429246EA989C9CeE203B43F6d1C7D83e3B8F8",
      WETH_GATEWAY: "0x767b4A087c11d7581Ac95eaFfc1FeBFA26bad3d2",
      PAYMASTER: "0x03173eFe71e4201FDb439e716C801E41A239d58c",
      WALLET_BALANCE_PROVIDER: "0xdeEa10da04D867e3303AB6E50FA26C2d8a5e9f70",
      UI_POOL_DATA_PROVIDER: "0x8FE0ac76b634B7D343Bd32282B98E9f271B43367",
      UI_INCENTIVE_DATA_PROVIDER: "0x91ccF57c1E9A7F5A9537eE59306faF8dA3b7e960",
      EARLYZERO_ADDRESS: "0x9793eac2fECef55248efA039BEC78e82aC01CB2f",
      OFT: "0x27d0A2b5316b98088294378692F4EAbfB3222e36",
      VESTING_ADDRESS: "",

      ZERO_ADDRESS: "0x27d0A2b5316b98088294378692F4EAbfB3222e36",
    },
    // halIntegration: {
    //   URL: 'https://app.hal.xyz/recipes/aave-v3-track-health-factor',
    //   marketName: 'aavev3',
    // },
  },
  legacy_manta_v3: {
    marketTitle: "Manta",
    chainId: 169,
    v3: true,
    enabledFeatures: {
      governance: true,
      staking: true,
      liquiditySwap: true,
      collateralRepay: true,
      incentives: true,
      withdrawAndSwitch: true,
      debtSwitch: true,
      switch: true,
      bridge: true,
    },
    tags: [{ text: "Main", color: "green" }],
    whiteListedIncentives: ["zero"],
    subgraphUrl: "https://api.thegraph.com/subgraphs/name/aave/legacycol-v3",
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER:
        "0xC44827C51d00381ed4C52646aeAB45b455d200eB",
      LENDING_POOL: "0x2f9bB73a8e98793e26Cb2F6C4ad037BDf1C6B269",
      WETH_GATEWAY: "0xE05361EA51E20118072aec0fB0FD178e8b09D69e",
      WALLET_BALANCE_PROVIDER: "0xCbDc0aeD7CDf2472784068abEf23a902CafABb98",
      UI_POOL_DATA_PROVIDER: "0xa32Eb787F2A3DC1F2c2da0E5d8caE7Ff74E6fD32",
      UI_INCENTIVE_DATA_PROVIDER: "0x81b3184A3B5d4612F2c26A53Da8D99474B91B2D2",
      EARLYZERO_ADDRESS: "0x642ce49f36f74fcc430ff79a76eb984737a7672d",
      // COLLECTOR: '0x97e59722318F1324008484ACA9C343863792cBf6',
      VESTING_ADDRESS: "",
      OFT: "0x35a57eFB9b4ae833e9A200bb191ff69420caFa1D",
      ZERO_ADDRESS: "0x35a57eFB9b4ae833e9A200bb191ff69420caFa1D",
    },
  },

  legacy_base_v3: {
    marketTitle: "Base",
    chainId: 8453,
    v3: true,
    disableCharts: true,
    enabledFeatures: {
      incentives: true,
      bridge: true,
    },
    tags: [
      { text: "Main", color: "green" },
      { text: "Lp Tokens", color: "yellow" },
    ],
    whiteListedIncentives: ["zero"],
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER:
        "0x5213ab3997a596c75Ac6ebF81f8aEb9cf9A31007",
      LENDING_POOL: "0x766f21277087E18967c1b10bF602d8Fe56d0c671",
      WETH_GATEWAY: "0x11CCDcFb19151FEb086ee6F1f62bfA0940C85612",
      WALLET_BALANCE_PROVIDER: "0x6eA9d99c6653DF987bDEa11ffcd56DFB4B5d38b4",
      COLLECTOR: "0x6F5Ae60d89dbbc4EeD4B08d08A68dD5679Ac61B4",
      UI_POOL_DATA_PROVIDER: "0x0A1198DDb5247a283F76077Bb1E45e5858ee100b",
      UI_INCENTIVE_DATA_PROVIDER: "0xa1e6BcDab01B9d7De83647d1Bbd4113c6c2B4e0d",
      OFT: "0x458AD5B487F4442245E4C5eA7249009E607A5583",
      VESTING_ADDRESS: "",
      ZERO_ADDRESS: "0x458AD5B487F4442245E4C5eA7249009E607A5583",
    },
  },
  legacy_zircuit_v3: {
    marketTitle: "Zircuit",
    chainId: 48900,
    isAlpha: true,
    v3: true,
    disableCharts: true,
    enabledFeatures: {
      staking: false,
      incentives: true,
      bridge: true,
    },
    tags: [
      { text: "Main", color: "green" },
      { text: "New", color: "yellow" },
    ],
    whiteListedIncentives: [],
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER:
        "0xFF679e5B4178A2f74A56f0e2c0e1FA1C80579385",
      LENDING_POOL: "0x2774C8B95CaB474D0d21943d83b9322Fb1cE9cF5",
      WETH_GATEWAY: "0x6eA9d99c6653DF987bDEa11ffcd56DFB4B5d38b4",
      WALLET_BALANCE_PROVIDER: "0xa1e6BcDab01B9d7De83647d1Bbd4113c6c2B4e0d",
      UI_POOL_DATA_PROVIDER: "0x189cfdb4d7a08D926CA209D84a713c4c629645aF",
      UI_INCENTIVE_DATA_PROVIDER: "0xa6EA08D16d47feE408505fda73520EbefC68Ef01",
      // COLLECTOR: '0x15785C5D383Fa33339CF5D5720546C24313BC66D',
      OFT: "0x458AD5B487F4442245E4C5eA7249009E607A5583",
      ZERO_ADDRESS: "0x458AD5B487F4442245E4C5eA7249009E607A5583",
    },
  },

  legacy_mainnet_rwa_v3: {
    marketTitle: "RWA Stablecoins",
    chainId: ChainId.mainnet,
    v3: true,
    description:
      "The RWA Stablecoin is a stablecoin-focused market that allows users to lend/borrow stablecoins backed by real-world assets at high LTVs.",
    // hideInMarketSwitcher: true,
    marketAltName: "RWA Stablecoins",
    grpKey: "ethereum",
    enabledFeatures: {
      staking: false,
      liquiditySwap: true,
      debtSwitch: false,
      incentives: true,
      withdrawAndSwitch: true,
      bridge: true,
    },
    tags: [
      { text: "RWAs", color: "green" },
      { text: "Trending", color: "yellow" },
    ],
    whiteListedIncentives: ["zero"],
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER:
        "0xe3c3c5ead58fc2bed4e577e38985b8f7f1ddff00",
      LENDING_POOL: "0xD3a4DA66EC15a001466F324FA08037f3272BDbE8",
      WETH_GATEWAY: "0x2787c0cb2F20010Ae2814Da9Ef20E04bb64B2466",
      WALLET_BALANCE_PROVIDER: "0xa1e6BcDab01B9d7De83647d1Bbd4113c6c2B4e0d",
      COLLECTOR: "0x4e88e72bd81c7ea394cb410296d99987c3a242fe",
      SWAP_COLLATERAL_ADAPTER: "0x189cfdb4d7a08D926CA209D84a713c4c629645aF",
      DEBT_SWITCH_ADAPTER: "0x80Ce5A187E477663fcFE99A108eefd9FBf0acC18",
      UI_POOL_DATA_PROVIDER: "0xa6EA08D16d47feE408505fda73520EbefC68Ef01",
      UI_INCENTIVE_DATA_PROVIDER: "0x0A1198DDb5247a283F76077Bb1E45e5858ee100b",
      OFT: "0x2Da17fAf782ae884faf7dB2208BBC66b6E085C22",
      VESTING_ADDRESS: "",
      ZERO_ADDRESS: "0x2Da17fAf782ae884faf7dB2208BBC66b6E085C22",
    },
  },
} as const;
