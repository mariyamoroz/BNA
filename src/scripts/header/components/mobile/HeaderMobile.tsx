import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import LinkIcon from '../../../shared/components/LinkIcon.tsx';
import LogoIcon from '../../../../icons/LogoIcon.tsx';
import MenuIcon from '../../../../icons/MenuIcon.tsx';
import NotificationsIcon from '../../../../icons/NotificationsIcon.tsx';
import NavigationBarMobile from '../mobile/NavigationBarMobile.tsx';
import SettingsBar from '../default/SettingsBar.tsx';

function HeaderMobile(): JSX.Element {
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const [settingsVisible, setSettingsVisible] = useState<boolean>(false);

    const clickMenu = (): void => {
        setMenuVisible(!menuVisible);
    }

    const clickSettingsPanel = (): void => {
        setSettingsVisible(!settingsVisible);
    }

    return (
        <div>
            <header>
                <div className="container header-container">
                    <LinkIcon icon={MenuIcon} className="menu" onClick={clickMenu} />

                    <LinkIcon icon={LogoIcon} className="logo" />

                    <div className="header-controls">
                        <span>FR</span>

                        <LinkIcon
                            icon={NotificationsIcon}
                            className="notifications-icon"
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

            <CSSTransition
                in={menuVisible}
                timeout={300}
                classNames="slide"
                unmountOnExit
            >
                <NavigationBarMobile closeMenu={clickMenu} />
            </CSSTransition>

        </div>
    )
}

export default HeaderMobile;