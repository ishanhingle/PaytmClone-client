import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import {currUser} from '../store/currUser';
import { Button } from '@material-tailwind/react';
function Header() {
  const [user,setUser]=useRecoilState(currUser);
  const navigate=useNavigate();
  const signOut=()=>{
    localStorage.removeItem("token");
		navigate("/signin");
    setUser(null);
  }
  return (
    <div className='w-full flex justify-between flex-wrap border-black border-b-2 bg-blue-gray-50 text-grey-800 p-4'>
          <div className='font-black text-2xl bg-transparent p-0 m-2'>
                PaytmClone
          </div>
          <div className='flex gap-4 text-xl m-2 ml-3 '>
            <Link className= ' rounded-xl p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black' to='/'>Home</Link>
            <Link className= 'rounded-xl  p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black' to='dashboard'>Dashboard</Link>
            {(user==null)?
            <Link className= 'rounded-xl  p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' to='signin'>Signin</Link>
            :(<div className=' flex flex-wrap'>
              <div className= 'rounded-xl font-extrabold p-2'>{`Hello, ${user.name}`}</div>
              <button className=' ml-1 rounded-xl  p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black' onClick={signOut}>
                <svg
							  	xmlns="http://www.w3.org/2000/svg"
							  	fill="none"
							  	viewBox="0 0 24 24"
							  	strokeWidth="1"
							  	stroke="currentColor"
							  	className="w-8 h-8"
							  >
							  <path
							  	strokeLinecap="round"
							  	strokeLinejoin="round"
							  	d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
							  />
							  </svg>
              </button>
              </div>
            )
            }
            
          </div>
    </div>
  )
}

export default Header