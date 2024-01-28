import React from 'react';
import AccountBalanceContainer from '../scripts/blocks/accountBalance/containers/AccountBalanceContainer.tsx';
import PrepaidCardsContainer from '../scripts/blocks/prepaidCards/containers/PrepaidCardsContainer.tsx';
import TransactionsContainer from '../scripts/blocks/transactions/containers/TransactionsContainer.tsx';
import BankAccountsContainer from '../scripts/blocks/bankAccounts/containers/BankAccountsContainer.tsx';
import AddMoneyContainer from '../scripts/blocks/addMoney/containers/AddMoneyContainer.tsx';

function HomePage() {
    return (
        <main className="container">
            <div className="main-content">
                <AccountBalanceContainer />

                <PrepaidCardsContainer />

                <TransactionsContainer />
            </div>

            <div className="aside-content">
                <BankAccountsContainer />

                <AddMoneyContainer />
            </div>
        </main>
    )
}

export default HomePage;