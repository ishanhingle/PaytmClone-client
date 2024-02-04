import React from 'react'

function UserListItem({user,setShowPaymentCard,setToUser}) {
    const handleClick=()=>{
        setShowPaymentCard(true);
        setToUser(user);  
    }
    return (
    <div className='flex p-2 m-1 text-l bg-blue-50 lg:text-2xl justify-between w-4/5 items-center'>
       <h1 className='inline font-bold'>{user.name} <p className='ml-1 text-sm inline font-thin'>@{user.username}</p></h1>
       <button className='border-black rounded-3xl border-2 px-2 py-1 duration-300 hover:bg-blue-100' onClick={handleClick}>Send Money</button>
   </div>
  )
}

export default UserListItem