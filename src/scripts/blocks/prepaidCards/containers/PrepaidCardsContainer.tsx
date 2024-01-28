import React from 'react';
import CardsList from '../components/CardsList.tsx';
import '../styles/prepaidCards.css';

import { userData } from '../../../../data/userData.ts';

function PrepaidCardsContainer(): JSX.Element {
    return (
        <div className="block-container">
            <h2>XEPPT Prepaid Card</h2>

           <CardsList cardsList={userData.prepaidCards} />
        </div>
    )
}

export default PrepaidCardsContainer;