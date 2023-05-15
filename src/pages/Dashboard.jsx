import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import BlogCard from './BlogCard';
import axios from 'axios';
import Swal from 'sweetalert2';
import ReactPaginate from 'react-paginate';
import {BsChevronLeft,BsChevronRight} from "react-icons/bs"

const Dashboard = () => {
  const [products,setProducts] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [pagesPerPage] = useState(8);
  // const [postsPerPage,setPostsPerPage] = useState(8);
  
  const deletCard = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async(result) => {
      if (result.isConfirmed) {
        Swal.fire(await axios.delete(`http://localhost:3000/products/${id}`))
      }
    })
  }
  
  const lastPostIndex = currentPage * pagesPerPage;
  const firstPostIndex = lastPostIndex - pagesPerPage;
  const currentPosts = products.slice(firstPostIndex,lastPostIndex)

  const pageCount = Math.ceil(products.length/pagesPerPage)

  const changePage = ({selected}) => {
    setCurrentPage(selected + 1)
  }


  const fetchApi = async () => {
    const {data} = await axios.get("http://localhost:3000/products");
    setProducts(data);
  }
  useEffect(()=>{
    fetchApi();
  },[currentPosts])
  return (
    <>
      <Navbar/>
      <div className='flex flex-wrap gap-5 justify-center items-center container mx-auto mt-4'>
        {
          currentPosts?.map(blog=><BlogCard key={blog.id} blog={blog} deletCard={deletCard}/>)
        }
      </div>
   
        <ReactPaginate className='flex fixed w-96 bottom-[-16px] left-0 right-0 p-5 bg-violet-900 text-white mx-auto container items-center justify-center mt-8 mb-4 my-10 cursor-pointer select-none'
        previousLabel = {
          <span className="w-10 h-10 flex items-center justify-center bg-violet-400  rounded-md mr-4">
              <BsChevronLeft />
          </span>}
          onPageChange={changePage}
          pageCount={pageCount}
          activeClassName="bg-violet-400 text-white"
          containerClassName=""
          pageClassName="block border-solid border-violet-200 hover:bg-violet-400 w-10 h-10 flex items-center justify-center rounded-md mr-4"    
          nextLabel= {
            <span className="w-10 h-10 flex items-center justify-center bg-violet-400  rounded-md">
                <BsChevronRight />
            </span>}
        />
    </>
  )
}

export default Dashboard 