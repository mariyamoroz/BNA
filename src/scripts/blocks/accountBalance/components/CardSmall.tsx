import React from 'react';
import flagImg from '../images/flag.png';

function CardSmall(props: {
    balance: number;
    currency: string;
}): JSX.Element {

    const { balance, currency } = props;

    return (
        <div className="card-sm">
            <img src={flagImg} className="card-img" alt="Canada" />
            <p className="card-balance">{currency + balance.toFixed(2)}</p>
        </div>
    )
}

export default CardSmall;