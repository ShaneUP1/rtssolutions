import React from 'react';

import './paginator.css';

const Paginator = ({
  disabled,
  apiPage,
  pageChangeHandler,
  isLastPage
}) => {
  const currentPage = apiPage + 1;

  return (
    <span>
      <button
        className='paginator-button'
        disabled={currentPage === 1 || disabled}
        onClick={() => {
          pageChangeHandler(apiPage - 1);
        }}
      >
        Previous
      </button>
      {currentPage}
      <button
        className='paginator-button'
        disabled={isLastPage || disabled}
        onClick={() => {
          pageChangeHandler(apiPage + 1);
        }}
      >
        Next
      </button>
    </span>
  )
}

export default Paginator;
