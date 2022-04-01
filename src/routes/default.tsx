import React, {useEffect, useState} from "react"
import { sample } from "lodash"
import { DEFAULT_PICKS } from "src/picks/default"
import {useLocation} from "react-router-dom";

export default function Default() {
    // Setup the state to be updated whenever something on the page changes
    const [firstPick, setFirstPick] = useState(sample(DEFAULT_PICKS))

    // Update the page whenever directed here
    const location = useLocation()
    useEffect(() => {
        setFirstPick(sample(DEFAULT_PICKS))
    }, [location.key])

    // Simple printout
    return (
        <main style={{ padding: "1rem 0" }}>
            <h4>{firstPick} is the picked player!</h4>
        </main>
    );
}