import React, { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Loader from './pages/Loader'
import Dashboard from './pages/Dashboard'
import Guard from './components/Guard'
import { ClipLoader } from 'react-spinners'
import UploadProduct from './pages/UploadProduct'
import Edit from './pages/Edit'
import Details from './pages/Details'


const App = () => {
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
    setLoading(false)
    },3000)
  },[])
  return (
    <div className=''>
        {
            loading ?    
            <div className="flex justify-center items-center min-h-screen">
                <ClipLoader className='border-5' color={"#8b5cf7"} loading={loading} size={80}/>
            </div>    
            : 
          <Routes>    
          <Route path="/" element={<Guard><Dashboard/></Guard>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/uploadproduct" element={<UploadProduct/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
          <Route path='/detail/:id' element={<Details/>}/>
         </Routes>
        }
    </div>
  )
}

export default App