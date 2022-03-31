import React from "react"
import { sample } from "lodash"
import { DEFAULT_PICKS } from "src/picks/default"

export default function Default() {
    const first_pick = sample(DEFAULT_PICKS)
    return (
        <main style={{ padding: "1rem 0" }}>
            <h4>{first_pick} is the picked player!</h4>
        </main>
    );
}