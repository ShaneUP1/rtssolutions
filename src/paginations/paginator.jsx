import React from 'react';

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
        disabled={currentPage === 1 || disabled}
        onClick={() => {
          pageChangeHandler(apiPage - 1);
        }}
      >
        Previous
      </button>
      {currentPage}
      <button
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
