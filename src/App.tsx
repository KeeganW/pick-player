import React from "react"
import { Outlet, Link } from "react-router-dom"

export default function App() {
    return (
        <div>
            <Link to="/"><h1>Pick Player</h1></Link>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/custom">Custom Lists</Link>
                <Link to="/game">By Game</Link>
            </nav>
            <Outlet />
        </div>
    );
}