import React, { Fragment, useEffect, useMemo, useState } from 'react';

import SearchInput from '../inputs/searchInput';
import Paginator from '../paginations/paginator';

import './searchPage.css';

const SearchPage = () => {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [apiPage, setApiPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const updateLocalStorage = (value) => {
    // check to see if we already have a history item in storage
    const history = JSON.parse(localStorage.getItem('history'));

    // if so, just push current search term into it
    if (history) {
      history.push(value);
      localStorage.setItem('history', JSON.stringify(history));
    } else {

      // if not, create one
      const newArray = [value];
      localStorage.setItem('history', JSON.stringify(newArray));
    }
  };

  // this effect will run if the search term or page number are modified
  useEffect(() => {
    const fetchData = () => {
      fetch(`http://hn.algolia.com/api/v1/search?query=${searchTerm}&page=${apiPage}`)
        .then((response) => response.json())
        .then((fetchedData) => {
          setData(fetchedData);
          setApiPage(fetchedData.page)
          setLoading(false);
        });
    }
    if (searchTerm) {
      fetchData();
    }
    setLoading(false);
  }, [apiPage, searchTerm]);

  // function to pass into search component to handle search term submits
  const handleSearch = (userInput) => {
    // first trim and excess spaces and then compare to make sure not calling api for same term
    if (userInput.trim().length && userInput !== searchTerm) {
      setLoading(true);
      updateLocalStorage(userInput);
      setSearchTerm(userInput);
      setApiPage(0);
    }
  };

  // function to pass into paginator to handle page updates
  const handlePageChange = (pageNumber) => {
    setLoading(true);
    setApiPage(pageNumber);
  }

  // boolean to determine when to disable Next button
  const isLastPage = useMemo(() => {
    if (data) {
      return apiPage === data.nbPages - 1;
    }
    return true;
  }, [data, apiPage]);

  return (
    <div className='searchPage-container'>
      <SearchInput
        isDisabled={loading}
        handleSearchTermSubmit={handleSearch}
      />
      {
        // if we don't have any data.hits don't show pagination or list
        data?.hits &&
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
                return <Fragment key={hit.created_at} />;
              })
            }
          </ul>
        </Fragment>
      }
    </div >

  );
};

export default SearchPage;
