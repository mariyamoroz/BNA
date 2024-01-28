import React from 'react';
import BankAccountsList from '../components/BankAccountsList.tsx';
import PlusButton from '../../../shared/components/PlusButton.tsx';
import { userData } from '../../../../data/userData.ts';
import '../styles/bankAccounts.css';

function BankAccountsContainer(): JSX.Element {
    return (
        <div className="block-container">

            <h2>Bank Account and Cards</h2>

            <BankAccountsList bankAccounts={userData.bankAccounts} />

            <div className="add-new-card-block">
                <PlusButton />
                <a href="/" className="add-new-card-link" target="_blank">Link a card or bank</a>
            </div>
        </div>
    )
}

export default BankAccountsContainer;