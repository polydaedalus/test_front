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
    lpSymbol: 'PLATIN-USDC LP',
    lpAddresses: {
      137: '0x60BEFF3E9d3b4E8409471Ecc58e568EB153F1e00',
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
  // {
  //   pid: 1,
  //   lpSymbol: 'PLATIN-PLATIN LP',
  //   lpAddresses: {
  //     137: '0xD592bfB50ad10088A428F1a4e74213090fC4A6dC',
  //   },
  //   token: tokens.platin,
  //   quoteToken: tokens.cake,
  // },
  {
    pid: 1,
    lpSymbol: 'PLATIN-WMATIC LP',
    lpAddresses: {
      137: '0x8c79D1CcB5E5Ea4Df5e0FF14b59A305f2808ac93',
    },
    token: tokens.wmatic,
    quoteToken: tokens.cake,
  },
  {
    pid: 2,
    lpSymbol: 'PLATIN-WETH LP',
    lpAddresses: {
      137: '0x1996ABaFb1ce1de7B5357eC9D281Bc378A0b8DEd',
    },
    token: tokens.weth,
    quoteToken: tokens.cake,
  },
  {
    pid: 3,
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
    lpSymbol: 'PLATIN',
    lpAddresses: {
      137: '0x60BEFF3E9d3b4E8409471Ecc58e568EB153F1e00',
    },
    token: tokens.cake,
    quoteToken: tokens.usdc,
  },
  // {
  //   pid: 6,
  //   isTokenOnly: true,
  //   lpSymbol: 'PLATIN',
  //   lpAddresses: {
  //     137: '0x60BEFF3E9d3b4E8409471Ecc58e568EB153F1e00',
  //   },
  //   token: tokens.platin,
  //   quoteToken: tokens.usdc,
  // },
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
    lpSymbol: 'PolyDoge',
    lpAddresses: {
      137: '0x7b3E67E63906d8576466c2f48158A30be0a9e36c',
    },
    token: tokens.polydoge,
    quoteToken: tokens.usdc,
  },
  {
    pid: 14,
    // isTokenOnly: true,
    lpSymbol: 'VERT-USDC LP',
    lpAddresses: {
      137: '0x668269d6E5D2c2dE31D132Ac218044211643622B',
    },
    token: tokens.vert,
    quoteToken: tokens.usdc,
  },
]

export default farms
