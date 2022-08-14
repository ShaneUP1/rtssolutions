import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => {
    return (
        <div>
            <span>appHeader</span>
            <nav>
                <Link to='/history'>History</Link>
                <Link to='/'>Search</Link>
            </nav>
        </div>
    );
};

export default AppHeader;
