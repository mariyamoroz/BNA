import React from 'react';
import CardSmall from '../components/CardSmall.tsx';

import { userData } from '../../../../data/userData.ts';

import '../styles/accountBalance.css';

function AccountBalanceContainer(): JSX.Element {
    return (
        <div className="block-container">
            <h2>XEPPT Account Balance</h2>

            <CardSmall
                currency={userData.currency}
                balance={userData.currentBalance} />
        </div>
    )
}

export default AccountBalanceContainer;