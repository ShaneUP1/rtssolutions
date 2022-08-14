import React, { useState } from 'react';

import './searchInput.css';

const SearchInput = ({
  isDisabled,
  handleSearchTermSubmit
}) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchTermSubmit(userInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className='search-input'
          type='search'
          value={userInput}
          onChange={(event) => {
            setUserInput(event.currentTarget.value)
          }}
          placeholder='Search...'
        />
        <button
          type='submit'
          disabled={isDisabled}
        >
          {
            isDisabled ?
              '...Loading' :
              'Search'
          }
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
