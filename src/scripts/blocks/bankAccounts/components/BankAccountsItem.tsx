import React from 'react';
import { BankAccount } from '../../../../interfaces/BankAccount.ts';

function BankAccountsItem ({
   id, name, number,
}: BankAccount): JSX.Element {

    return (
        <li key={id} className="bank-accounts-item">
           {name + ' ( ' + number + ' )'}
        </li>
    )
}

export default BankAccountsItem;