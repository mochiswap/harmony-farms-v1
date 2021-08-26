import { MenuEntry } from '@mochiswap/huikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://one.mochiswap.io/',
      },
      {
        label: 'Liquidity',
        href: 'https://one.mochiswap.io/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'SOLO Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'xMOCHI (NEW!)',
    icon: 'TicketIcon',
    href: '/xmochi',
  },
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://analytics.mochiswap.io',
      },
      {
        label: 'Tokens',
        href: 'https://analytics.mochiswap.io/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://analytics.mochiswap.io/Pairs',
      },
      {
        label: 'Accounts',
        href: 'https://analytics.mochiswap.io/Accounts',
      },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/mochiswap/',
      // },
    ],
  },
  {
    label: 'Features',
    icon: 'TicketIcon',
    items: [
      {
        label: 'MultiSig Fund',
        href: 'https://mochiswap.medium.com/introducing-multi-sig-on-mochiswap-bd5a7af5c278',
      },
      {
        label: 'Community Proposals',
        href: 'https://gov.harmony.one/#/mochiswap',
      },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/mochiswap/',
      // },
    ],
  },
  {
    label: 'Info',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'GitHub',
        href: 'https://github.com/mochiswap',
      },
      {
        label: 'BSC Mochi Mining',
        href: 'https://farms.mochiswap.io',
      },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/mochiswap/',
      // },
    ],
  },
  {
    label: 'Docs',
    icon: 'TicketIcon',
    href: 'https://docs.mochiswap.io/',
  },
  {
    label: 'Bridge',
    icon: 'IfoIcon',
    href: 'https://bridge.harmony.one/busd',
  }
]

export default config
