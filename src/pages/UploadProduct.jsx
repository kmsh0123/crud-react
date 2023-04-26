import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const UploadProduct = () => {
  const [title,setTitle] = useState("");
  const [price,setPrice] = useState("");
  const [description,setDescription] = useState("");
  const [image,setImage] = useState("");
  const nav = useNavigate();

  const ApiCreate = async (pdData) => {
    const {data} = await axios.post("http://localhost:3000/products",pdData);
    console.log(data);
    nav("/");
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const productData = {title,price,image,description};
    await ApiCreate(productData);
  }

  return (
    <>
      <div className='flex justify-center items-center min-h-screen container mx-auto'>
        <form onSubmit={onSubmitHandler} className="shadow shadow-violet-300 p-5 rounded-2xl m-2 md:m-2 lg:m-0 w-96">
            <h1 className='text-3xl text-violet-600 font-semibold text-center mb-5'>Upload U are Products</h1>
            <div className="space-y-5">
              
            <input value={price} onChange={e=>setPrice(e.target.value)} className='border rounded-lg shadow-xl outline-0 p-4 w-full text-violet-500' type="number" placeholder='Enter Your Product Price'/>
            <input value={title} onChange={e=>setTitle(e.target.value)} className='border rounded-lg shadow-xl outline-0 p-4 w-full text-violet-500' type="text" placeholder='Enter Your Product Title'/>
            <input value={description} onChange={e=>setDescription(e.target.value)}className='border rounded-lg p-4 w-full shadow-xl outline-0 text-violet-500' type="text" placeholder='Enter Your Product Description'/>
            <input value={image} onChange={e=>setImage(e.target.value)} className='border rounded-lg p-4 w-full shadow-xl outline-0 text-violet-500' type="text" placeholder='Enter Your Product Link'/>
            <button type="submit" className={`bg-violet-700 rounded-3xl p-4 w-full text-white hover:bg-violet-900 transition duration-300 my-5`}>Upload Product</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default UploadProduct