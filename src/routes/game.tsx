import React from "react"
import {gamePicksMap} from "src/picks/game";
import {useListedValues} from "src/util/common";

export default function Game() {
    return useListedValues("gameName", gamePicksMap)
}