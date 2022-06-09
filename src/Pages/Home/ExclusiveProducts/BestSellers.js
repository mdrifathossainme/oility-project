import React, { useState } from 'react';
import UseProduct from '../../../hooks/UseProduct';
import { Icon } from 'react-icons-kit'
import { ic_add_shopping_cart } from 'react-icons-kit/md/ic_add_shopping_cart'
import { heartO } from 'react-icons-kit/fa/heartO'
import { searchPlus } from 'react-icons-kit/fa/searchPlus'
import SingleProductModal from './SingleProductModal';
import { toast } from 'react-toastify';
import Loading from '../../../Components/Loading/Loading';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {heart} from 'react-icons-kit/fa/heart'
const BestSellers = () => {
   
    const [user]=useAuthState(auth)
    const [productModal, setProductModal] = useState(null)
 
    
 

    const url = "https://pacific-falls-37798.herokuapp.com/displayproducts"
    const wishlistUrl = `https://pacific-falls-37798.herokuapp.com/whishlistlove?email=${user?.email}`
 
const { data, isLoading, refetch } = useQuery("newavail", () => fetch(url).then(res => res.json()))
const { data:whishList, isLoading:as, refetch:asd } = useQuery("whishlistl", () => fetch(wishlistUrl).then(res => res.json()))



    
    
    
    
    
    
    
  if (isLoading) {
        return <Loading/>
    }

    const handleWhiteList = (pt) => {
        const {_id, ...rest } = pt
        console.log(pt._id)
        
        const whiteListProduct = { email:user?.email, ...rest }
     
        const url = `https://pacific-falls-37798.herokuapp.com/whitelist`
        
        fetch(url, {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(whiteListProduct)
            
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('white List Product Add Success')
                    
                }
                else {
                    toast.error("The product is already on this White List")
                }
            })
        
        
        
    
    }
   

    return (
          <>
            
         <div className='grid lg:grid-cols-4  grid-cols-2 gap-4 2'>
            {data?.slice(6,12).map(pt => {
                return (

                    <div key={pt?._id} className='border-2 relative'>
                       
                        <div className=' hoverimg relative' >
                            <img  src={pt?.img} alt="" />
                            {pt.stock>0 && <div className=' hover-bg h-full w-full absolute top-0 '>
                                <span className='flex justify-center items-center h-full gap-x-4'>

                                      <label for="singleProductModal"> <span onClick={()=>setProductModal(pt)} className='hover-btn'><Icon icon={ic_add_shopping_cart} size={20}></Icon></span></label>
                                    
                                    { whishList?.find(wn=>wn.name===pt.name, asd())  ? <span className='hover-btn red-white'><Icon icon={heart} size={20}></Icon></span>
                                        
                                        : <span onClick={() => handleWhiteList(pt)} className='hover-btn'><Icon icon={heartO} size={20}></Icon></span>}
                                   


                                        <label for="singleProductModal"> <span onClick={()=>setProductModal(pt)} className='hover-btn'><Icon icon={searchPlus} size={20}></Icon></span></label>
                                </span>
                                
                             </div>}
                        </div>
                        <div className='p-2 '>
                        <h4 className='py-2'>{pt?.name.slice(0,30)}</h4>
                            <span className='text-primary py-1 flex justify-between '><h4>${pt?.price}</h4>  <span className='text-success'> { pt?.shipping}% off</span> </span>
                           <span className='flex items-center gap-x-2'> <img className='w-24' src="https://i.ibb.co/6B0VPQz/four-golden-star-rating-illustration-260nw-1442679176-1.png" alt="" />
                            <span>({pt?.ratingsCount})</span></span>
                        </div>
                        {pt.stock===0 && <div className=' absolute top-2 left-2 '>
                            <h4 className='bg-red-500 py-1 rounded-md text-white px-2'>Stock Out</h4>
                        </div>}
                 
                    </div>
                )
            })}
            </div>
            {
                productModal&&<SingleProductModal  productModal={productModal} refetch={refetch} setProductModal={setProductModal} ></SingleProductModal>
            }
        </>
    );
};

export default BestSellers;