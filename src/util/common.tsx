import {Link, useParams} from "react-router-dom";
import {sample} from "lodash";
import React from "react";
import {Button, ListGroup, ListGroupItem} from "react-bootstrap";

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
        // TODO(keegan): we may not want to sort these if this gets long
        const allLinks = Object.keys(sources).sort((a: string, b: string) => a === 'default' ? -1 : a.localeCompare(b)).map(value => (
            <ListGroupItem>
                <Link to={value}>
                    {value}
                </Link>
            </ListGroupItem>
        ))
        return (
            <ListGroup>
                {allLinks}
            </ListGroup>
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