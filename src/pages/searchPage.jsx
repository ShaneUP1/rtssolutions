import React, { Fragment, useMemo, useState } from 'react';

import SearchInput from '../inputs/searchInput';
import Paginator from '../paginations/paginator';

import './searchPage.css';

const SearchPage = () => {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [apiPage, setApiPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const updateLocalStorage = (value) => {
    const history = JSON.parse(localStorage.getItem('history'));
    if (history) {
      history.push(value);
      localStorage.setItem('history', JSON.stringify(history));
    } else {
      const newArray = [value];
      localStorage.setItem('history', JSON.stringify(newArray));
    }
  };

  const handleSearch = (userInput) => {
    setLoading(true);
    updateLocalStorage(userInput);
    setSearchTerm(userInput);
    let page = !userInput ? 0: apiPage;

    fetch(`http://hn.algolia.com/api/v1/search?query=${userInput}&page=${page}`)
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
        setApiPage(fetchedData.page)
        setLoading(false);
      });
  };

  const handlePageChange = (pageNumber) => {
    setLoading(true);
    setApiPage(pageNumber);

    fetch(`http://hn.algolia.com/api/v1/search?query=${searchTerm}&page=${pageNumber}`)
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
        setApiPage(fetchedData.page)
        setLoading(false);
      });
  }

  const isLastPage = useMemo(() => {
    if (data) {
      return apiPage === data.nbPages - 1;
    }
  }, [data, apiPage]);

  return (
    <div className='searchPage-container'>
      <SearchInput
        isDisabled={loading}
        handleSearchTermSubmit={handleSearch}
      />
      {
        data && data.hits &&
        <Fragment>
          <Paginator
            disabled={loading}
            isLastPage={isLastPage}
            apiPage={apiPage}
            pageChangeHandler={handlePageChange}
          />
          <ul className='list'>
            {
              data.hits.map((hit) => {
                if (hit.url && hit.title) {
                  return (
                    <li key={hit.created_at} className='list-item'>
                      <a className='link' href={`${hit.url}`}>{hit.title}</a>
                    </li>
                  )
                }
                return <Fragment />;
              })
            }
          </ul>
        </Fragment>
      }
    </div >

  );
};

export default SearchPage;
