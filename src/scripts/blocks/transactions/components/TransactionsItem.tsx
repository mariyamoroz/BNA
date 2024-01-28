import React, { JSX } from 'react';
import AccountBalanceWalletIcon from '../../../../icons/AccountBalanceWalletIcon.tsx';
import CreditCardIcon from '../../../../icons/CreditCardIcon.tsx';
import { Transaction } from '../../../../interfaces/Transaction.ts';

const TransactionsItem = ({
  place, date, type, sum, currency,
}: Transaction): JSX.Element => {

    const formattedDate: string = new Date(date).toLocaleString('en-US', { month: 'short', day: 'numeric' });

    const transactionInfo: string = formattedDate + ', ' + type;

    const isPlusOperation: boolean = type !== 'Payment';

    const totalSum = (isPlusOperation ? '+' : '-') + currency + sum.toFixed(2);

    return (
        <li className={`transactions-item ${isPlusOperation ? 'transactions-item-is-plus' : ''}`}>
            <div className="transactions-item-icon">
                { isPlusOperation ? <AccountBalanceWalletIcon /> : <CreditCardIcon /> }
            </div>

            <div>
                <p className="transactions-item-place">{place}</p>
                <p className="transactions-item-info">{transactionInfo}</p>
            </div>

            <p className="transactions-item-sum">{totalSum}</p>
        </li>
    )

}

export default TransactionsItem;