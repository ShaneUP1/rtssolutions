import React, { Fragment, useState } from 'react';

import SearchInput from '../inputs/searchInput';
import Paginator from '../paginations/paginator';

import './searchPage.css';

const SearchPage = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(0);

  const fetchData = (queryParam) => {
    if (typeof queryParam === 'string') {
      fetch(`http://hn.algolia.com/api/v1/search?query=${queryParam}`)
        .then((response) => response.json())
        .then((fetchedData) => {
          setData(fetchedData);
          setPage(fetchedData.page + 1);
        });
    } else {
      // if queryParam is not a string then it's a page change
      fetch(`http://hn.algolia.com/api/v1/search?page=${queryParam}`)
        .then((response) => response.json())
        .then((fetchedData) => {
          setData(fetchedData);
          setPage(fetchedData.page);
        });
    }
  }
  console.log(data.nbPages);

  return (
    <div>
      <SearchInput handleSearchTermSubmit={fetchData} />
      <Paginator
        isLastPage={page === data.nbPages - 1}
        currentPage={page}
        pageChangeHandler={fetchData}
      />
      <ul>
        {
          data.hits && data.hits.map((hit) => {
            if (hit.url && hit.title) {
              return (
                <li key={hit.objectID}>
                  <a href={`${hit.url}`}>{hit.title}</a>
                </li>
              )
            }
            return <Fragment />;
          })
        }
      </ul>
    </div>

  );
};

export default SearchPage;
