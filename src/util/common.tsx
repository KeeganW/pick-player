import {useParams} from "react-router-dom";
import {sample} from "lodash";
import React from "react";

export const RANDOM = "random" as "random"

export type PlayerRankedPicks = {
    primary: string,
    secondary: string,
}
type ListedOptions = string[] | PlayerRankedPicks

function isPlayerRankedPicks(toBeDetermined: ListedOptions): toBeDetermined is PlayerRankedPicks {
    return !!(toBeDetermined as PlayerRankedPicks).primary;
}

export function useListedValues(paramName: string, sources: { [name: string]: ListedOptions }) {
    // Get the selected name
    const params = useParams()
    const customName = params[paramName]
    const options = Object.keys(sources)

    if (!customName) {
        return (
            <main style={{ padding: "1rem 0" }}>
                <h4>Please provide a name in the url.</h4>
            </main>
        )
    } else if (!options.includes(customName)) {
        return (
            <main style={{ padding: "1rem 0" }}>
                <h4>No known picks under this name!</h4>
            </main>
        )
    } else {
        const customPicks = sources[customName]
        if (isPlayerRankedPicks(customPicks)) {
            const rankedPick = customPicks.primary === RANDOM ? customPicks.secondary : customPicks.primary
            return (
                <main style={{ padding: "1rem 0" }}>
                    <h4>{rankedPick}</h4>
                </main>
            )
        }
        const pick = sample(customPicks)
        return (
            <main style={{ padding: "1rem 0" }}>
                <h4>{pick}</h4>
            </main>
        )
    }
}