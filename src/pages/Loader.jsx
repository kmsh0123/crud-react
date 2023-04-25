import React, { useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import Login from './Login';

const Loader = () => {
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
    setLoading(false)
    },1000)
  },[])
  return (
    <div className='flex justify-center items-center min-h-screen'>
        {
            loading ?        
         <ClipLoader className='border-5' color={"#8b5cf7"} loading={loading} size={80}/>
            : 
        <Login/>
        }
    </div>
  )
}

export default Loader