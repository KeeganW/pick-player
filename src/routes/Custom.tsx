import { useListedValues } from 'src/util/Common'
import {
  COIN_FLIP_PICKS, TAS_PICKS, TRAVEL_PICKS, DEFAULT_PICKS,
} from 'src/picks/CustomPickLists'

export function Custom() {
  const CUSTOM_PICKS: { [name: string]: string[] } = {
    Default: DEFAULT_PICKS,
    TAS: TAS_PICKS,
    Travel: TRAVEL_PICKS,
    'Coin Flip': COIN_FLIP_PICKS,
  }

  return useListedValues('customName', CUSTOM_PICKS)
}
