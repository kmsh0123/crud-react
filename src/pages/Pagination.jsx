import React from 'react'
import {BsChevronLeft,BsChevronRight} from "react-icons/bs"
import ReactPaginate from 'react-paginate'


const Pagination = ({changePage,pageCount}) => {
  return (
    <ReactPaginate className='flex fixed w-96 bottom-[-16px] left-0 right-0 p-5 bg-violet-900 text-white mx-auto container items-center justify-center mt-8 mb-4 my-10 cursor-pointer select-none'
    previousLabel = {
      <span className="w-10 h-10 flex items-center justify-center bg-violet-400  rounded-md mr-4">
          <BsChevronLeft />
      </span>}
      onPageChange={changePage}
      pageCount={pageCount}
      activeClassName="bg-violet-400 text-white"
      pageClassName="block border-solid border-violet-200 hover:bg-violet-400 w-10 h-10 flex items-center justify-center rounded-md mr-4"    
      nextLabel= {
        <span className="w-10 h-10 flex items-center justify-center bg-violet-400  rounded-md">
            <BsChevronRight />
        </span>
        }
    />
  )
}

export default Pagination