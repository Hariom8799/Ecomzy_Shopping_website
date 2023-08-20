'use client';
import Image from 'next/image'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart'
import Initial from './Pages/Initial'

export default function Home() {
  return (
    <>
    <div>
      <Navbar/>
    </div>

    <Routes>
      <Route path='/' element={<Initial/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  )
}
