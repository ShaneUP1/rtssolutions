import React from 'react';
import { Link } from 'react-router-dom';

import './appHeader.css';

const AppHeader = () => {
    return (
        <div className='appHeader-container'>
            <h1>Hacker News Search</h1>
            <div className='nav-container'>
                <nav>
                    <Link to='/history' className='nav-link'>History</Link>
                    <Link to='/' className='nav-link'>Search</Link>
                </nav>
            </div>
        </div>
    );
};

export default AppHeader;
