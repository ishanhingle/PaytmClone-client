import React, { useEffect, useState } from 'react'
import Balance from '../Components/Balance'
import Users from '../Components/Users'
import { useRecoilState, useRecoilValue } from 'recoil'
import { currUser } from '../store/currUser'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import backendURL from '../config/config'
import { balanceAtom } from '../store/balance'

function Dashboard() {
  const user=localStorage.getItem("token");
  const [balance,setBalance]=useRecoilState(balanceAtom);
  useEffect(()=>{
    axios.get(backendURL+"/accounts/balance",{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    }).then(res=>{
      setBalance(res.data.balance)
    })
  },[])
  const navigate=useNavigate();
  if(user==null){
     alert('Please SignIn First')
     return <Navigate to='/signin'></Navigate>
  }
  return (
    <div  className='w-full  min-h-screen flex flex-col items-center text-center p-1' >
     <Balance value={balance.toFixed(2)}/>
     <Users/>
    </div>
  )
}

export default Dashboard
