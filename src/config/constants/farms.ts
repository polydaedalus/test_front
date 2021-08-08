import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  // {
  //  pid: 0,
  //  lpSymbol: 'CAKE',
  //  lpAddresses: {
  //    137: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //  },
  //  token: tokens.syrup,
  //  quoteToken: tokens.wbnb,
  // },
  {
    pid: 251,
    lpSymbol: 'IRID-USDC LP',
    lpAddresses: {
      137: '0x4F34831Ac774978BC1f192c45B574022D5969103',
    },
    token: tokens.cake,
    quoteToken: tokens.usdc,
  },
  {
    pid: 252,
    lpSymbol: 'WMATIC-USDC LP',
    lpAddresses: {
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
    },
    token: tokens.wmatic,
    quoteToken: tokens.usdc,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  {
    pid: 0,
    lpSymbol: 'IRID-PLATIN LP',
    lpAddresses: {
      137: '0xD592bfB50ad10088A428F1a4e74213090fC4A6dC',
    },
    token: tokens.platin,
    quoteToken: tokens.cake,
  },
  {
    pid: 2,
    lpSymbol: 'IRID-WMATIC LP',
    lpAddresses: {
      137: '0x4A945aD2D521Dbc2a2fDfeBb69547CB944B40AF3',
    },
    token: tokens.wmatic,
    quoteToken: tokens.cake,
  },
  {
    pid: 3,
    lpSymbol: 'PLATIN-USDC LP',
    lpAddresses: {
      137: '0x60BEFF3E9d3b4E8409471Ecc58e568EB153F1e00',
    },
    token: tokens.platin,
    quoteToken: tokens.usdc,
  },
  {
    pid: 4,
    lpSymbol: 'WETH-USDC LP',
    lpAddresses: {
      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d',
    },
    token: tokens.weth,
    quoteToken: tokens.usdc,
  },
  /**
   * Single token pools
   */

  {
    pid: 5,
    isTokenOnly: true,
    lpSymbol: 'IRID',
    lpAddresses: {
      137: '0x4F34831Ac774978BC1f192c45B574022D5969103',
    },
    token: tokens.cake,
    quoteToken: tokens.usdc,
  },
  {
    pid: 6,
    isTokenOnly: true,
    lpSymbol: 'PLATIN',
    lpAddresses: {
      137: '0x60BEFF3E9d3b4E8409471Ecc58e568EB153F1e00',
    },
    token: tokens.platin,
    quoteToken: tokens.usdc,
  },
  {
    pid: 7,
    isTokenOnly: true,
    lpSymbol: 'WMATIC',
    lpAddresses: {
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
    },
    token: tokens.wmatic,
    quoteToken: tokens.usdc,
  },
  {
    pid: 8,
    isTokenOnly: true,
    lpSymbol: 'AAVE',
    lpAddresses: {
      137: '0x7c76b6b3fe14831a39c0fec908da5f17180df677',
    },
    token: tokens.aave,
    quoteToken: tokens.usdc,
  },
  {
    pid: 9,
    isTokenOnly: true,
    lpSymbol: 'WETH',
    lpAddresses: {
      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d',
    },
    token: tokens.weth,
    quoteToken: tokens.usdc,
  },
  {
    pid: 10,
    isTokenOnly: true,
    lpSymbol: 'WBTC',
    lpAddresses: {
      137: '0xf6a637525402643b0654a54bead2cb9a83c8b498',
    },
    token: tokens.wbtc,
    quoteToken: tokens.usdc,
  },
  {
    pid: 11,
    isTokenOnly: true,
    lpSymbol: 'QUICK',
    lpAddresses: {
      137: '0x1f1e4c845183ef6d50e9609f16f6f9cae43bc9cb',
    },
    token: tokens.quick,
    quoteToken: tokens.usdc,
  },
  {
    pid: 12,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      137: '0x2cf7252e74036d1da831d11089d326296e64a728',
    },
    token: tokens.usdc,
    quoteToken: tokens.usdc,
  },
  {
    pid: 13,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      137: '0xf04adbf75cdfc5ed26eea4bbbb991db002036bdd',
    },
    token: tokens.dai,
    quoteToken: tokens.usdc,
  },
  {
    pid: 13,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      137: '0x2cf7252e74036d1da831d11089d326296e64a728',
    },
    token: tokens.usdt,
    quoteToken: tokens.usdc,
  },
]

export default farms
