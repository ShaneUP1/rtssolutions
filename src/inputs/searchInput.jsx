import React, { useState } from 'react';

const SearchInput = ({ handleSearchTermSubmit }) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('CLICKED')
    handleSearchTermSubmit(userInput);
  };

  return (
    <div className='searchContainer'>
      <form onSubmit={handleSubmit}>
        <input
          value={userInput}
          onChange={(event) => {
            setUserInput(event.currentTarget.value)
          }}
          placeholder='Search...'
        />
      </form>
    </div>
  );
};

export default SearchInput;
