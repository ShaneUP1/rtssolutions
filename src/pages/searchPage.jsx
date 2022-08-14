import React from 'react';
import { useState } from 'react';
import SearchInput from '../inputs/searchInput';

import './searchPage.css';

const SearchPage = () => {
  const [data, setData] = useState([]);

  const handleSearchTermSubmit = (searchTerm) => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchTerm}`)
    .then((response) => response.json())
    .then((fetchedData) => setData(fetchedData.hits));
  };

  return (
    <div>
      <SearchInput handleSearchTermSubmit={handleSearchTermSubmit}/>
      <ul>
        {
          data.map((hit) => {
            return (
              <li key={hit.objectID}>
                <a href={`${hit.url}`}>{hit.title}</a>
              </li>
            )
          })
        }
      </ul>
    </div>

  );
};

export default SearchPage;
