import React from 'react';

function SettingsBar(): JSX.Element {
    return (
        <div className="settings-bar">
            <ul className="settings-bar-items">
                <li className="settings-bar-item">Notifications</li>
                <li className="settings-bar-item">Settings</li>
                <li className="settings-bar-item">Logout</li>
            </ul>
        </div>
    )
}

export default SettingsBar;