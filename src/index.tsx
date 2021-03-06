import React from 'react'
import { render } from 'react-dom'
import {
  Routes,
  Route,
  HashRouter,
  Navigate,
} from 'react-router-dom'
import { NotFound } from 'src/routes/NotFound'
import { Default } from 'src/routes/Default'
import { Custom } from 'src/routes/Custom'
import { Game } from 'src/routes/Game'
import { App } from 'src/App'
import 'src/index.css'

// More route information can be found at https://reactrouter.com/docs/en/v6/getting-started/tutorial
// Need to use hash router. More info can be found at https://towardsdev.com/github-pages-does-not-work-for-me-f9d48fd44a5f#b2a0
const rootElement = document.getElementById('root')
render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<Default />} />
        <Route path="/custom" element={<Custom />}>
          <Route path=":customName" element={<Custom />} />
        </Route>
        <Route path="game" element={<Game />}>
          <Route path=":gameName" element={<Game />} />
        </Route>
      </Route>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  </HashRouter>,
  rootElement,
)
