import React, { useState } from 'react';
import TransactionsFilters from '../components/TransactionsFilters.tsx';
import TransactionsList from '../components/TransactionsList.tsx';
import ShowMore from '../components/ShowMore.tsx';
import { Transaction } from '../../../../interfaces/Transaction.ts';
import { userData } from '../../../../data/userData.ts';

import '../styles/transactions.css';

function TransactionsContainer(): JSX.Element {

    const [transactions, setTransactions] = useState<Transaction[]>(userData.transactions);
    const [filter, setFilter] = useState<string>('All');
    const [showMore, setShowMore] = useState<boolean>(false);


    function transactionsFiltered(filter: string): void {
        const filteredTransactions: Transaction[] = filter === 'All'
            ? userData.transactions
            : transactions.filter(transaction => transaction.isXEPPTBank);

        setTransactions([...filteredTransactions]);
        setFilter(filter);
    }

    return (
        <div className="block-container">
            <h2>Transactions</h2>

            <div className="transactions-content">
                <TransactionsFilters
                    transactionsFiltered={transactionsFiltered}
                    filter={filter}
                    setFilter={setFilter}
                />

                <TransactionsList
                    transactionsList={transactions}
                    showMore={showMore}
                />

                { transactions.length > 3 && (
                    <ShowMore showMore={showMore} setShowMore={setShowMore} />
                )}
            </div>
        </div>
    )
}

export default TransactionsContainer;