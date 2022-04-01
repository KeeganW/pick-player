import React from "react"
import { render } from "react-dom"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"
import Default from "src/routes/default"
import Custom from "src/routes/custom"

import "src/index.css"
import App from "src/App"
import reportWebVitals from "src/reportWebVitals"

// More route information can be found at https://reactrouter.com/docs/en/v6/getting-started/tutorial
const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/pick-player/" element={<App />} >
                <Route path="" element={<Default />} />
                <Route path="custom" element={<Custom />} />
                <Route // No match case
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>Sorry, we couldn't find that page. Please go back!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
