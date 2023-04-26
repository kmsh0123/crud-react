import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

    const BlogCard = ({blog,deletCard}) => {
      const nav = useNavigate();

      const goDetail = e => {
        e.stopPropagation();
        nav(`/detail/${blog?.id}`)
      }
        const goEdit = e => {
          e.stopPropagation();
          nav(`edit/${blog?.id}`)
        }
        return (
          <>
                <div onClick={goDetail} className='flex flex-col w-80 mb-5 cursor-pointer'>
                  <div className="w-80 border rounded-2xl overflow-hidden shadow-md shadow-green-100">
                <img className="w-64 h-64 mx-auto my-5" src={blog.image} alt=""/>
                <div className="p-3">
                  <h1 className="text-2xl mb-2 truncate">{blog.title}</h1>
                  <p className="text-slate-600 truncate">{blog.description}</p>
                  <div className="flex items-center justify-evenly">
                      <button onClick={(e)=>{
                        e.stopPropagation();
                        deletCard(blog.id)
                        }} className="bg-red-700 p-2 px-5 rounded-xl text-white font-bold hover:bg-slate-700 transition duration-300 my-5">Delete</button>
                      <button onClick={goEdit} className="bg-violet-700 p-2 px-8 rounded-xl text-white font-bold hover:bg-slate-700 transition duration-300 my-5">Edit</button>
                      <span className="text-xl font-bold">${blog.price}</span>
                  </div>
                </div>
            </div>
              </div>
                  
          </>
          
        )
      }
    
 export default BlogCard