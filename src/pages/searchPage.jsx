import React from 'react';
import { useState } from 'react';
import SearchInput from '../inputs/searchInput';

import './searchPage.css';

const SearchPage = () => {
  const [data, setData] = useState([]);

  const handleSearchTermSubmit = (searchTerm) => {
    fetch(`http://hn.algolia.com/api/v1/search?=${searchTerm}`)
    .then((response) => response.json())
    .then((fetchedData) => setData(fetchedData.hits));
  };

  return (
    <div>
      <SearchInput handleSearchTermSubmit={handleSearchTermSubmit}/>
    </div>
  );
};

export default SearchPage;
