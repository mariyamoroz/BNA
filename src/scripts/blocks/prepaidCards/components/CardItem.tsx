import React from 'react';
import '../styles/prepaidCards.css';
import { Card } from '../../../../interfaces/Card.ts';

const CardItem =(props: Card): JSX.Element => {
    const {
        isActive = false,
        currency = '$',
        balance = 0,
        numberOfCard,
        shouldBeOrdered = false,
        backgroundImage = ''
    } = props;

    return (
        <div
            className={`card ${shouldBeOrdered ? 'card-is-active' : ''}`}
            style={{ backgroundImage: `url(${backgroundImage})`}}
        >
            <span className="card-status">{isActive ? 'Active' : 'Inactive'}</span>

            <div className="card-balance-container">
                <span className="card-balance">{currency + balance.toFixed(2)}</span>
                <p>Available balance</p>
            </div>

            <span>{numberOfCard}</span>
        </div>
    )
}

export default CardItem;