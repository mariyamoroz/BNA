import React from 'react';

import '../styles/transactions.css';

interface ShowMore {
    showMore: boolean;
    setShowMore: any;
}

const ShowMore = ({
  showMore, setShowMore
}: ShowMore): JSX.Element => {

    return (
        <button className="button button-grey show-more-button" onClick={() => setShowMore(!showMore)}>
            {!showMore ? 'Show more' : 'Show less' }
        </button>
    )
}

export default ShowMore;