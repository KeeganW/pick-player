import {Link, useLocation, useParams} from "react-router-dom";
import {sample} from "lodash";
import React, {useEffect, useState} from "react";
import {Button, ListGroup, ListGroupItem, Row, Stack} from "react-bootstrap";

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
    const [reload, setReload] = useState(false)
    const rerollButton = (
        <div className="position-absolute bottom-0 start-50 translate-middle">
            <Button onClick={() => setReload(!reload)}>
                Reroll
            </Button>
        </div>
    )
    const customName = params[paramName]
    const options = Object.keys(sources)

    if (!customName) {
        // TODO(keegan): we may not want to sort these if this gets long
        const allLinks = Object.keys(sources).sort((a: string, b: string) => a === 'default' ? -1 : a.localeCompare(b)).map(value => (
            <ListGroupItem as={Link} to={value}>{value}</ListGroupItem>
        ))
        return (
            <ListGroup variant="flush" className="align-items-center">
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
        // Get the customPicks of type ListedOptions
        const customPicks = sources[customName]
        let finalPick, includeReroll;
        if (isPlayerRankedPicks(customPicks)) {
            finalPick = customPicks.primary === RANDOM ? customPicks.secondary : customPicks.primary
        } else {
            finalPick = sample(customPicks)
            includeReroll = true
        }
        return (
            <Stack className="mx-auto">
                <main className="col-md-6 p-3 mx-auto text-center">
                    <h4>{finalPick}</h4>
                </main>
                {includeReroll ? rerollButton : <></>}
            </Stack>
        )
    }
}

export function useDisplayPick(pickText: string | undefined, includeReroll?: boolean) {
    const [reload, setReload] = useState(false)
    const rerollButton = (
        <div className="position-absolute bottom-0 start-50 translate-middle">
            <Button onClick={() => setReload(!reload)}>
                Reroll
            </Button>
        </div>
    )
    return (
        <Stack className="mx-auto">
            <main className="col-md-6 p-3 mx-auto text-center">
                <h4>{pickText}</h4>
            </main>
            {includeReroll ? rerollButton : <></>}
        </Stack>
    )
}