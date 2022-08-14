import React, { useState } from 'react';

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
    <div className='searchContainer'>
      <form onSubmit={handleSubmit}>
        <input
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
