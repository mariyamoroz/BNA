import React from 'react';
import PlusButton from '../../../shared/components/PlusButton.tsx';
import '../styles/prepaidCards.css';

const AddNewCard = (): JSX.Element => {
    return  (
        <div className="card-is-new">
            <PlusButton />

            <p>Order a new card</p>
        </div>
    )
}

export default AddNewCard;