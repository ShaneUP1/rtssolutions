import React, { useEffect, useState } from 'react'

import './historyPage.css';

const HistoryPage = () => {
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        const localStorageHistory = JSON.parse(localStorage.getItem('history'));
        setSearchHistory(localStorageHistory)
    }, []);

    return (
        <div className='historyPage-container'>
            <h3>Search query history from newest to oldest.</h3>
            <ul>
                {
                    searchHistory ?
                    searchHistory.map((searchQuery, index) => {
                        return (
                            <li key={index}>{searchQuery}</li>
                        );
                    })
                    :
                    'Search history is clean.'
                }
            </ul>
        </div >
    )
}

export default HistoryPage;
