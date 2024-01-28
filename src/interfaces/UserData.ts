import { Card } from './Card.ts';
import { BankAccount } from './BankAccount.ts';
import { Transaction } from './Transaction.ts';

export interface UserData {
    abbr?: string,
    name: string;
    surname: string;
    currency: string;
    currentBalance: number | string,
    prepaidCards?: Card[],
    bankAccounts?: BankAccount[],
    transactions?:Transaction[],
}