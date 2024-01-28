import React from 'react';
import BankAccountsItem from './BankAccountsItem.tsx';
import { BankAccount } from '../../../../interfaces/BankAccount.ts';

function BankAccountsList (props: {
    bankAccounts: BankAccount[],
}): JSX.Element {

    return (
        <ul className="bank-accounts-list">
            {
                props.bankAccounts.map((bankAccount: BankAccount) => {
                    const { id, name, number } = bankAccount;

                    return (
                        <BankAccountsItem
                            key={id}
                            id={id}
                            name={name}
                            number={number}
                        />
                    )
                })
            }
        </ul>
    )
}

export default BankAccountsList;