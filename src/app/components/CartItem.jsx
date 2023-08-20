import React from 'react'
import {FaTrash} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice';

const CartItem = ({item,itemIndex}) => {

    const dispatch = useDispatch();
    function removeFromCart(){
        dispatch(remove(item.id))
    }
  return (
    <div className='border-b-2 border-gray-700'>
    <div className='w-full flex justify-between gap-10 items-center py-5 px-3'>
        <img src={item.image} alt="" width={"150px"}/>
        <div className='flex flex-col gap-3 '>
            <h2 className='text-xl text-gray-700 font-semibold'>{item.title}</h2>
            <p className='text-md '>{item.description}</p>
            <div className='flex justify-between items-center'>
                <p className='text-md font-bold text-green-600'>${item.price}</p>
                <button className='p-2 rounded-full flex justify-center items-center bg-red-300' onClick={removeFromCart}>
                    <FaTrash className='text-red-900'/>
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default CartItem