import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import BlogCard from './BlogCard';
import axios from 'axios';
import Swal from 'sweetalert2';
import Pagination from './Pagination';
import { Link, useParams } from 'react-router-dom';

const Dashboard = () => {
  const [products,setProducts] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [pagesPerPage] = useState(8);
  const {id} = useParams();

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
      
        <Pagination changePage={changePage} pageCount={pageCount}/>
    </>
  )
}

export default Dashboard