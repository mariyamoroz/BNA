import React from 'react';
import { NavLink } from "react-router-dom";

function NavigationBar(): JSX.Element {
    return (
        <nav className="navigation-bar">
            <ul className="navigation-links">
                <li>
                    <NavLink
                        to="/"
                        className="navigation-link"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/card-info"
                        className="navigation-link"
                    >
                        XEPPT Card
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/statements"
                        className="navigation-link"
                    >
                        Statements
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar;