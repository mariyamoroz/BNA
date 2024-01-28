import React from 'react';
import AccountBalanceContainer from '../scripts/blocks/accountBalance/containers/AccountBalanceContainer.tsx';
import PrepaidCardsContainer from '../scripts/blocks/prepaidCards/containers/PrepaidCardsContainer.tsx';
import TransactionsContainer from '../scripts/blocks/transactions/containers/TransactionsContainer.tsx';

function CardInfoPage() {
    return (
        <main className="container">

            <div className="main-content">
                <AccountBalanceContainer />

                <PrepaidCardsContainer />

                <TransactionsContainer />
            </div>

        </main>
    )
}

export default CardInfoPage;