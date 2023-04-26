import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import BlogCard from './BlogCard';
import axios from 'axios';
import Swal from 'sweetalert2';

const Dashboard = () => {
  const [products,setProducts] = useState([]);
  
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

  const fetchApi = async () => {
    const {data} = await axios.get("http://localhost:3000/products");
    setProducts(data);
  }
  useEffect(()=>{
    fetchApi();
  },[products])
  return (
    <>
      <Navbar/>
      <div className='flex flex-wrap gap-5 justify-center items-center container mx-auto mt-4'>
        {
          products?.map(blog=><BlogCard key={blog.id} blog={blog} deletCard={deletCard}/>)
        }
      </div>
    </>
  )
}

export default Dashboard