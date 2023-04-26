import Cookies from 'js-cookie';
import React, { useState } from 'react'
import { useLogoutMutation } from '../feature/api/authApi';
import {ImSpinner2} from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../feature/service/authSlice';

const Navbar = () => {
  const user = JSON.parse(Cookies.get("user"));  
  const token = Cookies.get("token");
  const [isLoading,setIsLoading] = useState(false);
  const nav = useNavigate();

    const [logout] = useLogoutMutation();
    const dispatch = useDispatch();

    const logoutHandler = async () =>{
        setIsLoading(true);
        const {data} = await logout(token);
        setIsLoading(false);
        if(data?.success){
          nav("/login")
        }
        dispatch(removeUser())
        console.log(data);
    }

  return (
    <>
        <div className="flex justify-between items-center container mx-auto shadow-lg shadow-violet-400 p-5 mt-1 rounded-lg">
            <h1 className='text-2xl font-bold'>
              <Link to="/">
              React-CRUD
              </Link>
              </h1>
            <ul className='flex items-center space-x-8'>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <button onClick={logoutHandler} className='bg-violet-600 p-2 px-10 rounded-xl text-white hover:bg-violet-900 transition duration-200'>{
              isLoading ? <ImSpinner2 className='animate-spin'/> : "Logout"
            }</button>
            </ul>
        </div>
    </>
  )
}

export default Navbar