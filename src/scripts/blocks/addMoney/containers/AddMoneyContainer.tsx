import React from 'react';
import AddMoney from '../components/AddMoney.tsx';
import '../styles/addMoney.css';

function AddMoneyContainer(): JSX.Element {
    return (
        <div className="block-container add-money-block">
            <AddMoney />
        </div>
    )
}

export default AddMoneyContainer;