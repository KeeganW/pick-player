import React from 'react'
import { render } from 'react-dom'
import {
  Routes,
  Route, HashRouter,
  Navigate,
} from 'react-router-dom'
import NotFound from 'src/routes/notFound'
import Default from 'src/routes/default'
import Custom from 'src/routes/custom'
import Game from 'src/routes/game'

import 'src/index.css'
import App from 'src/App'
import reportWebVitals from 'src/reportWebVitals'

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
