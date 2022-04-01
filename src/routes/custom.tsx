import { TAS_PICKS } from 'src/picks/tas'
import { DEFAULT_PICKS } from 'src/picks/default'
import { useListedValues } from 'src/util/common'

export default function Custom() {
  const customPicksMap: { [name: string]: string[] } = {
    default: DEFAULT_PICKS,
    tas: TAS_PICKS,
  }

  return useListedValues('customName', customPicksMap)
}
