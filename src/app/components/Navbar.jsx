'use client';
import Image from 'next/image';
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const {cart} = useSelector((state)=>state);

  return (
    <div className='w-full bg-slate-900'>
      <div className='flex justify-between items-center w-10/12 max-w-[1080px] mx-auto'>
        <NavLink to='/'>
            <Image src="/logo.png" alt="" width={180} height={60} className='my-2'/>
        </NavLink>

        <div className='flex gap-5 items-center relative'>
            <NavLink to='/'>
                <span className="text-md text-white hover:text-green-500 transition-all duration-200">Home</span>
            </NavLink>
            <NavLink to='/cart'>
              <div className='relative'>
                <FaShoppingCart className='text-2xl text-white hover:text-green-500 transition-all duration-200'/>
                {
                  cart.length > 0 && 
                  <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                  justify-center items-center animate-bounce rounded-full text-white'>
                    {cart.length}
                  </span>
                }
              </div>
              
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
