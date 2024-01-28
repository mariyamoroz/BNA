import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import LinkIcon from '../../../shared/components/LinkIcon.tsx';
import LogoIcon from '../../../../icons/LogoIcon.tsx';
import ExpandIcon from '../../../../icons/ExpandIcon.tsx';
import NotificationsIcon from '../../../../icons/NotificationsIcon.tsx';
import NavigationBar from './NavigationBar.tsx';
import SettingsBar from './SettingsBar.tsx';

import { userData } from '../../../../data/userData.ts';

import '../../styles/settingsBar.css';

function Header(): JSX.Element {

    const fullName: string = userData.name + ' ' + userData.surname;

    const [settingsVisible, setSettingsVisible] = useState<boolean>(false);

    const clickSettingsPanel = (): void => {
        setSettingsVisible(!settingsVisible);
    }

    return (
        <header>
            <div className="container header-container">
                <LinkIcon icon={LogoIcon} className="logo" />

                <NavigationBar />

                <div className="header-controls">

                    <span>FR</span>

                    <LinkIcon
                        icon={NotificationsIcon}
                        className="notifications-icon"
                    />

                    <div className="abbr-username">{userData.abbr}</div>
                    <span className="full-username">{fullName.toUpperCase()}</span>

                    <LinkIcon
                        icon={ExpandIcon}
                        className={`expand-icon ${settingsVisible ? 'expand-icon-up' : ''}`}
                        onClick={clickSettingsPanel}
                    />
                </div>

                <CSSTransition
                    in={settingsVisible}
                    timeout={300}
                    classNames="slide-down"
                    unmountOnExit
                >
                    <SettingsBar />
                </CSSTransition>
            </div>
        </header>
    )
}

export default Header;