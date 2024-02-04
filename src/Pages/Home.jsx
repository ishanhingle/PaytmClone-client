import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className=' min-h-screen flex flex-wrap justify-around items-center font-extrabold gap-4  bg-blue-gray-50' >
      <div className='w-full lg:w-1/3 text-center top-3 p-2'>
        <h1 className='lg:text-5xl ml-3 font-serif text-gray-700 m-5'> HELLO USER! </h1>
        <div className=' text-blue-gray-500 mb-4 font-serif lg:text-xl'>
        Get basic understanding of inner workings of digital finance. This Project mimics
        how e-wallet transactions unfold. Here, you can send virtual money to different users.
        </div>
          <Link className='bg-green-100 p-2 rounded-2xl  font-bold hover:bg-white' to='/dashboard'>
            GET STARTED
          </Link>
      </div>
      <img
          className='w-50 h-30 lg:h-full'
          src='https://cdn4.iconfinder.com/data/icons/cashless-currency/64/rupee-cashless-mobile_payment-e_payment-e_wallet-512.png'
        />
    </div>
  )
}

export default Home