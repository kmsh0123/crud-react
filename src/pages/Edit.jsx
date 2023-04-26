import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  const [title,setTitle] = useState("");
  const [price,setPrice] = useState("");
  const [description,setDescription] = useState("");
  const [image,setImage] = useState("");
  const nav = useNavigate();

const {id} = useParams();
    const getProductData = async () => {
        const {data} = await axios.get(`http://localhost:3000/products/${id}`)
        console.log(data);
        setTitle(data?.title);
        setPrice(data?.price);
        setDescription(data?.description);
        setImage(data?.image);
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
    const UserData = {title,price,description,image};
    await axios.patch(`http://localhost:3000/products/${id}`,UserData);
    nav("/");
    }
    useEffect(()=>{
        getProductData();
    },[])
  return (
    <div>
        <div className='flex justify-center items-center min-h-screen container mx-auto'>
        <form onSubmit={onSubmitHandler} className="shadow shadow-violet-300 p-5 rounded-2xl m-2 md:m-2 lg:m-0 w-96">
            <h1 className='text-3xl text-violet-600 font-semibold text-center mb-5'>Upload U are Products</h1>
            <div className="space-y-5">
              
            <input value={price} onChange={e=>setPrice(e.target.value)} className='border rounded-lg shadow-xl outline-0 p-4 w-full text-violet-500' type="number" placeholder='Enter Your Product Price'/>
            <input value={title} onChange={e=>setTitle(e.target.value)} className='border rounded-lg shadow-xl outline-0 p-4 w-full text-violet-500' type="text" placeholder='Enter Your Product Title'/>
            <input value={description} onChange={e=>setDescription(e.target.value)}className='border rounded-lg p-4 w-full shadow-xl outline-0 text-violet-500' type="text" placeholder='Enter Your Product Description'/>
            <input value={image} onChange={e=>setImage(e.target.value)} className='border rounded-lg p-4 w-full shadow-xl outline-0 text-violet-500' type="text" placeholder='Enter Your Product Link'/>
            <div className="flex gap-3">
            <button type="submit" className={`bg-rose-700 rounded-3xl p-4 w-1/2 text-white hover:bg-rose-900 transition duration-300 my-5`}>
                <Link to="/">Cancel</Link>
            </button>
            <button type="submit" className={`bg-violet-700 rounded-3xl p-4 w-1/2 text-white hover:bg-violet-900 transition duration-300 my-5`}>Edit Product</button>
            </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Edit