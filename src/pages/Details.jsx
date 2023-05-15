import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar';

const Details = () => {
    const [product,setProduct] = useState({});
    const {id} = useParams();

    const detailProduct = async () => {
        const {data} = await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(data);
    };
    useEffect(()=>{
        detailProduct();
    },[])
   
  return (
    <>
    <Navbar/>
    <div className='container mx-auto mt-16'>
        <div className="flex items-center justify-center overflow-y-hidden">
        <img className='w-56 shadow-lg p-5 shadow-violet-600 rounded-lg' src={product?.image} alt="" />
            <div className="ml-10 p-5">
            <h1 className='text-4xl font-bold mt-6'>{product?.title}</h1>
            <p className=' text-2xl my-10'>{product?.description}</p>
            <div className="flex gap-3">
                <Link to={"/"}>
            <button className="bg-rose-700 p-2 px-8 rounded-xl text-white font-bold hover:bg-rose-900 transition duration-300 my-5">Home</button>
                </Link>
                <Link to={`/edit/${id}`}>
            <button className="bg-violet-700 p-2 px-10 rounded-xl text-white font-bold hover:bg-violet-900 transition duration-300 my-5">Edit</button>
                </Link>
                </div>
            </div>
            
        </div>
    </div>
    </>
    
  )
}

export default Details