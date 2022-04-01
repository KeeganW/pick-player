import React from "react"
import { Outlet, Link } from "react-router-dom"
import {Button, ButtonToolbar, Container} from "react-bootstrap";

export default function App() {
    return (
        <Container className="p-3">
            <Container className="p-5 mb-4 bg-light rounded-3">
                <Link to=""><h1>Pick Player</h1></Link>
                <nav
                    style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem",
                    }}
                >
                    <ButtonToolbar className="custom-btn-toolbar">
                        <Link to="custom">
                            <Button>Custom Lists</Button>
                        </Link>
                        <Link to="game">
                            <Button>By Game</Button>
                        </Link>
                    </ButtonToolbar>
                </nav>
                <Outlet />
            </Container>
        </Container>
    );
}