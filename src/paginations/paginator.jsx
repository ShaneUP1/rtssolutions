import React from 'react';

const Paginator = ({
  currentPage,
  pageChangeHandler,
  isLastPage
}) => {
  return (
    <span>
      <button
        disabled={currentPage === 0}
        onClick={() => {
          pageChangeHandler(currentPage - 1);
        }}
      >
        Previous
      </button>
      {currentPage}
      <button
        disabled={isLastPage}
        onClick={() => {
          pageChangeHandler(currentPage + 1);
        }}
      >
        Next
      </button>
    </span>
  )
}

export default Paginator;
