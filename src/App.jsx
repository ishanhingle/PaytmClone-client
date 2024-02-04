import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Dashboard from './Pages/Dashboard'
import Transfer from './Pages/Transfer'
import Signup from './Pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' min-w-full place-items-center'>
      <Header/>
      <Routes >
         <Route path='/' element={<Home/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/signin' element={<Signin/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/transfer' element={<Transfer/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
