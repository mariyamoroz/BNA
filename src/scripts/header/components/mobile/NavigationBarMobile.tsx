import React from 'react';
import { NavLink } from 'react-router-dom';
import LinkIcon from '../../../shared/components/LinkIcon.tsx';
import PlusIcon from '../../../../icons/PlusIcon.tsx';

function NavigationBarMobile(props): JSX.Element {
    return (
        <nav className="navigation-bar-mobile">
            <ul className="navigation-links">
                <li className="navigation-title">
                    <b>Menu</b>
                    <LinkIcon icon={PlusIcon} className="navigation-close-icon" onClick={props.closeMenu} />
                </li>
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

export default NavigationBarMobile;