import React, { useState } from 'react';
import { Icon } from 'react-icons-kit'
import { plus } from 'react-icons-kit/fa/plus'
import {minus} from 'react-icons-kit/fa/minus'
import { toast } from 'react-toastify';
import RequireAuth from "../../../Components/RequierAuth/RequierAuth"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../../Components/Loading/Loading';
const SingleProductModal = ({ productModal,setProductModal,refetch}) => {
   
    const [orderQunatity, setOrderQunatiry] = useState(1)
    const [user,loading]=useAuthState(auth)

    if (loading) {
        return <Loading/>
    }

   
    const handleClose = () => {
          setProductModal(null)
    }


    const handleOrderQunatityMinus = () => {
        const value = orderQunatity - 1
        setOrderQunatiry(value)
    }
    const handleOrderQunatityPlus = () => {
        const value = orderQunatity + 1
        setOrderQunatiry(value)
    }

    const order = {
        name: productModal.name,
        email:user?.email,
        img:productModal.img,
        category:productModal.category,
        seller:productModal.seller,
        shipping:productModal.shipping,
        orderQunatity: orderQunatity
        
    }

    const handleValue = (e) => {
        const newValue = e.target.value;
        setOrderQunatiry(newValue)
    }

    const handOrder = (e) => {
        e.preventDefault()
      const url = `https://pacific-falls-37798.herokuapp.com/order`
    
    fetch(url, {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify(order)
    })
    .then(res=>res.json())
        .then(data => {
        if (data.success === false) {
            toast.error('This Product Already Add')
            }
        else {
           
           refetch()
            toast.success('Order Success')
            }
        
          setProductModal(null)
        })
        
        const stock = productModal.stock - orderQunatity
        const upUrl = `https://pacific-falls-37798.herokuapp.com/displayproducts/${productModal._id}`
        fetch(upUrl, {
            method: "PUT",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify({stock})
        })
            .then(res => res.json())
            .then(data => {
                
                
    
        })

    }


   




    return (
      
    
        <>  
            
            <RequireAuth>
              <input type="checkbox" id="singleProductModal" class="modal-toggle" />
              <div class="modal ">
                    <div class="modal-box w-8/12 max-w-full max-h-[90%] ">
                    <label onClick={handleClose} for="singleProductModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                        <div className=''>
                            <img className='' src={productModal.img} alt="" />
                        </div>
                        <div className=' '>
                            <h1 className='text-3xl'>{productModal.name}</h1>
                            <div className='flex items-center mt-4 justify-between '>
                                <span className='flex items-center gap-x-4'>
                                  <span className='text-primary text-3xl' > <h1>${productModal.price}</h1></span>

                                <span className='text-success'>{productModal.shipping}% off</span>
                                </span> 

                                <span className='flex items-center '>
                                    <img className='w-24' src="https://i.ibb.co/6B0VPQz/four-golden-star-rating-illustration-260nw-1442679176-1.png" alt="" />
                                    ({productModal.ratingsCount})</span>
                            </div>

                            <h6 className='mb-3'>vitae itaque ut quidem rerum ad delectus! Consequatur quibusdam ullam eaque blanditiis qui praesentium accusantium soluta temporibus? Modi</h6>
                            <h6 className='mb-3'>Category: {productModal.category}</h6>
                            <h6 className='mb-3'>Brand: {productModal.seller}</h6>
                            <h6 className='mb-3'>AvailAble Qunatity : {productModal.stock} </h6>
                            <h6 className='font-bold'>Shipping Price: ${productModal.shipping} </h6>

                            <div className='mt-4'>
                                <div>
                                    <span className='font-semibold'>Order Qunatity: </span>
                                    <span><Icon onClick={handleOrderQunatityMinus} className='px-2 cursor-pointer' icon={minus}/>
                                <input value={orderQunatity} onChange={handleValue} type="number" className={`border-2 w-28  p-1 ${productModal.stock <orderQunatity? "border-red-500":"border-gray-300 "}  focus:outline-none `} min={1} />
                                  <Icon onClick={handleOrderQunatityPlus} className='px-2 cursor-pointer ' icon={plus} /></span>
                         
                                    </div>
                                    
                                    {
                                        productModal.stock === 0 ?  <h6 className='text-red-500 font-semibold'> Stock Out</h6> : <>
                                        <div className={`${productModal.stock < orderQunatity? "block":"hidden"}`} >
                                    <h6 className='text-red-500 font-semibold'> Product Quantity Not Availavle</h6>
                             </div>
                                        </>
                                    }
                                
                               
                                
                            </div>

                            <button disabled={productModal.stock < orderQunatity|| productModal.stock===0} onClick={handOrder} className='btn btn-primary  rounded-none text-white mt-4 hover:bg-transparent hover:text-primary '>Add To Cart</button>
                           
                       
                        </div>

                    </div>
                                 
                 
                </div>
                </div>     
            </RequireAuth>        
                
         
            
        </>
    );
};

export default SingleProductModal;