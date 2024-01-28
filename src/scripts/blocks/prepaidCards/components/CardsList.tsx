import React from 'react';
import CardItem from './CardItem.tsx';
import AddNewCard from './AddNewCard.tsx';
import { Card } from '../../../../interfaces/Card.ts';

function CardsList(props: Card[]): JSX.Element {

    return (
        <div className="card-list-container">
            <div className="card-list">
                {props.cardsList.map((card: Card) => {
                    const {
                        id,
                        isActive,
                        balance,
                        currency,
                        numberOfCard,
                        backgroundImage
                    } = card;

                    return (
                        <CardItem
                            key={id}
                            isActive={isActive}
                            balance={balance}
                            currency={currency}
                            numberOfCard={numberOfCard}
                            backgroundImage={backgroundImage}
                    />
                    )
                })}

                <AddNewCard />
            </div>
        </div>
    )
}

export default CardsList;