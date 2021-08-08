import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Spectre',
  description:
    'To be decided',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Spectre')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Spectre')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Spectre')}`,
      }
    case '/auto':
      return {
        title: `${t('Auto-compounding Pool')} | ${t('Spectre')}`,
      }
    default:
      return null
  }
}
