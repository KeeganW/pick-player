import {PlayerRankedPicks, RANDOM} from "src/util/common";

/**
 * In game picks, primary is that which the game rules recommend,
 * secondary is the curated suggestion if primary is random.
 */
export const gamePicksMap = {
    "Wingspan": {
        primary: RANDOM,
        secondary: "The person who last went bird watching"
    }
} as { [name: string]: PlayerRankedPicks }