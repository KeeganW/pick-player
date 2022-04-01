import React, { useEffect, useState } from 'react'
import { sample } from 'lodash'
import { useLocation } from 'react-router-dom'
import { Button, Stack } from 'react-bootstrap'
import { DEFAULT_PICKS } from 'src/picks/CustomPickLists'

export function Default() {
  // Setup the state to be updated whenever something on the page changes
  const [firstPick, setFirstPick] = useState(sample(DEFAULT_PICKS))

  // Update the page whenever directed here
  const location = useLocation()
  useEffect(() => {
    setFirstPick(sample(DEFAULT_PICKS))
  }, [location.key])
  const rerollButton = (
    <div className="position-absolute bottom-0 start-50 translate-middle">
      <Button onClick={() => setFirstPick(sample(DEFAULT_PICKS))}>
        Reroll
      </Button>
    </div>
  )

  return (
    <Stack className="mx-auto">
      <main className="col-md-6 p-3 mx-auto text-center">
        <h4>
          {firstPick}
          {' '}
          is the picked player!
        </h4>
      </main>
      {rerollButton}
    </Stack>
  )
}
