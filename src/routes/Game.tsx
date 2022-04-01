import { GAME_PICKS } from 'src/picks/GameSpecifiedPicks'
import { useListedValues } from 'src/util/Common'

export function Game() {
  return useListedValues('gameName', GAME_PICKS)
}
