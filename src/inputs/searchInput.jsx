import React, { useState } from 'react';

import './searchInput.css';

const SearchInput = ({
  isDisabled,
  handleSearchTermSubmit
}) => {
  const [userInput, setUserInput] = useState('');

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchTermSubmit(userInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} disabled={isDisabled}>
        <input
          className='search-input'
          type='search'
          required
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
