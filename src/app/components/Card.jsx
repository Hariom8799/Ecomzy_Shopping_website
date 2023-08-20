import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slices/CartSlice';

const Card = ({product}) => {
  const {cart}  = useSelector((state)=> state)
  const dispatch = useDispatch();

  function removeFromCart(){
    dispatch(remove(product.id))
    toast.error("Item removed from cart")
  }

  function addToCart(){
    dispatch(add(product))
    toast.success("Item added in cart")
    
  }

  return (
    <div className=' p-3 flex flex-col items-center justify-between rounded-lg hover:scale-110 transition-all duration-500 group card-shadow-1 '>
        <div className='space-y-2 py-2 px-5'>
          <h2 className='text-md font-bold'>{product.title}</h2>
          <p className='text-xs text-gray-500'>{product.description.split(" ").slice(0,10).join(" ") + "..."}</p>
          <div className='h-[180px]'>
          <img src={product.image} alt="" className='h-full w-full object-contain'/>
          </div>
        </div>
        <div className='w-full flex justify-between px-3 py-2'>
            <p className='text-md font-bold text-green-500 '>${product.price}</p>
            <div>
              {
                    cart.some((p)=> p.id === product.id) ?
                    (
                      <button onClick={removeFromCart} className='border-2 border-black opacity-70 rounded-full px-3 py-1 text-sm font-bold  group-hover:bg-black group-hover:opacity-70 group-hover:text-white transition-all duration-200 '>
                        Remove Item
                      </button>
                    ) :
                    (
                      <button onClick={addToCart} className='border-2 border-black opacity-70 rounded-full px-3 py-1 text-sm font-bold group-hover:bg-black group-hover:opacity-70 group-hover:text-white transition-all duration-200 '>
                        Add to Cart
                      </button>
                    )
                      
                }
            </div>
                
            
        </div>
        
    </div>
  )
}

export default Card
