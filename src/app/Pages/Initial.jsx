'use client';
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast";
import Card from '../components/Card'
import Loader from "../components/Loader";


const Initial = () => {
    const [loading,setLoading] = useState(true);
    const [productData,setProductData] = useState([])

    async function getProduct(){
        try{
            setLoading(true);
            let url = "https://fakestoreapi.com/products"
            let resp = await fetch(url);
            let data = await resp.json()
            setProductData(data)
            console.log(data)
            setLoading(false)
        }
        catch(error){
            setProductData([])
            toast.error("Something went wrong")
        }
        
    }

    useEffect(()=>{
        getProduct();
    },[])

  return (
    <div className="w-10/12 max-w-[1080px] min-h-[80vh] relative mx-auto " >
        {
            loading ? <Loader/> : 
            (
                productData ?
                (
                    <div className="w-full grid grid-cols-4 my-10 gap-x-5 gap-y-8">
                        {
                            productData.map((product)=>{
                                return <Card product={product} key={product.id} />
                            })
                        }

                    </div>
                
                    
                ) :
                
                    <div><p>Something went wrong</p></div>
                
            )
        }
    </div>
  )
}

export default Initial
