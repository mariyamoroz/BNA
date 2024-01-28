import React, {JSX} from 'react';
import TransactionsItem from '../components/TransactionsItem.tsx';
import { Transaction } from '../../../../interfaces/Transaction.ts';

function TransactionsList(props: {
    transactionsList: Transaction[],
    showMore?: boolean,
}): JSX.Element {

    return (
        <ul className={`transactions-list ${props.showMore ? 'transactions-list-is-fully-visible' : ''}`}>
            {props.transactionsList.map((transaction: Transaction) => {
                const {
                    id, place, date, type, currency, sum,
                } = transaction;

                return (
                    <TransactionsItem
                        key={id}
                        id={id}
                        place={place}
                        date={date}
                        type={type}
                        currency={currency}
                        sum={sum}
                    />)
                }
            )}
        </ul>
    )
}

export default TransactionsList;