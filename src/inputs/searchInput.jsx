import React, { useState } from 'react';

const SearchInput = ({ handleSearchTermSubmit }) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput) {
      handleSearchTermSubmit(userInput);
    }
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
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default SearchInput;
