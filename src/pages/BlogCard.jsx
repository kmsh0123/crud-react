import React from 'react'

    const BlogCard = ({blog}) => {
        return (
          <div className='flex flex-col w-auto'>
              <div class="w-80 border rounded-2xl overflow-hidden shadow-md shadow-green-100">
            <img class="w-[200px] h-[200px]" src={blog.image} alt=""/>
            <div class="p-3">
              <h1 class="text-2xl mb-2">Card Title</h1>
              <p class="text-slate-600">{blog.description.substring(0,100)}</p>
            <button class="bg-blue-700 p-3 px-8 rounded-xl my-3 text-white font-bold hover:bg-slate-700 transition-all">See More</button>
            </div>
         </div>
          </div>
        )
      }

export default BlogCard