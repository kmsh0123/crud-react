import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import ReactPaginate from 'react-paginate';
import { Link, useLocation } from 'react-router-dom';

const Pagination = ({ changePage, pageCount }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let currentPage = parseInt(searchParams.get('page')) || 1;

  // Ensure currentPage is within the valid range
  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > pageCount) {
    currentPage = pageCount;
  }

  const handlePageChange = (selectedPage) => {
    changePage(selectedPage.selected + 1);
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set('page', selectedPage.selected + 1);
    window.history.replaceState(null, null, `?${newSearchParams.toString()}`);
  };

  return (
    <ReactPaginate
      previousLabel={<BsChevronLeft />}
      nextLabel={<BsChevronRight />}
      onPageChange={handlePageChange}
      pageCount={pageCount}
      activeClassName="bg-violet-400 text-white"
      containerClassName="flex fixed w-96 bottom-[-16px] left-0 right-0 p-5 bg-violet-900 text-white mx-auto container items-center justify-center mt-8 mb-4 my-10 cursor-pointer select-none"
      pageClassName="block border-solid border-violet-200 hover:bg-violet-400 w-10 h-10 flex items-center justify-center rounded-md mr-4"
      previousLinkClassName="w-10 h-10 flex items-center justify-center bg-violet-400 rounded-md mr-4"
      nextLinkClassName="w-10 h-10 flex items-center justify-center bg-violet-400 rounded-md"
      disabledClassName="opacity-50 cursor-not-allowed"
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
