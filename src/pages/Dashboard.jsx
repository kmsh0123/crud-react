import React from 'react'
import Navbar from './Navbar'
import { useGetBlogsQuery } from '../feature/api/blogApi'
import BlogCard from './BlogCard';

const Dashboard = () => {
  const {data:blogs} = useGetBlogsQuery();
  console.log(blogs);

  return (
    <>
      <Navbar/>
      <div className="flex flex-wrap gap-5 justify-center container mx-auto mt-5">
      {
        blogs.map(blog =>{
          return(
            <BlogCard key={blog.id} blog={blog} />
          )
        })
      }
      </div>
    </>
  )
}

export default Dashboard