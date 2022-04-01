import { useListedValues } from 'src/util/common'
import DEFAULT_PICKS, { COIN_FLIP_PICKS, TAS_PICKS, TRAVEL_PICKS } from 'src/picks/custom'

export default function Custom() {
  const customPicksMap: { [name: string]: string[] } = {
    Default: DEFAULT_PICKS,
    TAS: TAS_PICKS,
    Travel: TRAVEL_PICKS,
    "Coin Flip": COIN_FLIP_PICKS,
  }

  return useListedValues('customName', customPicksMap)
}
