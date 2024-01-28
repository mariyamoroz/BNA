import React from 'react';

function TransactionsFilters(props: {
    transactionsFiltered: any,
    setFilter: any,
    filter: boolean,
}): JSX.Element {
    const { transactionsFiltered, filter, setFilter } = props;

    return (
        <div className="transactions-filter-buttons">
            <button className={`button${filter === 'All' ? ' button-is-active' : ''}`} onClick={() => {
                setFilter('All');
                transactionsFiltered('All');
            }}>
                <span>All</span>
            </button>

            <button className={`button${filter === 'XEPPTCard' ? ' button-is-active' : ''}`} onClick={() => {
                setFilter('XEPPTCard');
                transactionsFiltered('XEPPTCard');
            }}>
                <span>XEPPT Card</span>
            </button>
        </div>
    )
}

export default TransactionsFilters;