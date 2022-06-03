import React, { useState } from 'react';
import UseProduct from '../../../hooks/UseProduct';
import { Icon } from 'react-icons-kit'
import { ic_add_shopping_cart } from 'react-icons-kit/md/ic_add_shopping_cart'
import { heartO } from 'react-icons-kit/fa/heartO'
import { searchPlus } from 'react-icons-kit/fa/searchPlus'

import './newArrival.css'
import SingleProductModal from './SingleProductModal';
const NewArrival = () => {
    const [products] = UseProduct()

    const [productModal,setProductModal]=useState(null)
   

    return (
        <>
         <div className='grid lg:grid-cols-4  grid-cols-2 gap-4 2'>
            {products.slice(0, 6).map(pt => {
                return (
                    <div key={pt._id} className='border-2'>
                     
                        <div className=' hoverimg relative' >
                            <img  src={pt?.img} alt="" />
                            <div className=' hover-bg h-full w-full absolute top-0 '>
                                <span className='flex justify-center items-center h-full gap-x-4'>
                                    <span className= ' hover-btn'><Icon icon={ic_add_shopping_cart} className="" size={20}></Icon></span>
                                    <span className='hover-btn'><Icon icon={heartO} size={20}></Icon></span>

                                    
                                    <label for="singleProductModal"> <span onClick={()=>setProductModal(pt)} className='hover-btn'><Icon icon={searchPlus} size={20}></Icon></span></label>

                                </span>
                                
                             </div>
                        </div>
                        <div className='p-2 '>
                        <h4 className='py-2'>{pt?.name.slice(0,40)}</h4>
                            <span className='text-primary py-1 flex justify-between '><h4>${pt?.price}</h4>  <span className='text-success'> { pt?.shipping}% off</span> </span>
                           <span className='flex items-center gap-x-2'> <img className='w-24' src="https://i.ibb.co/6B0VPQz/four-golden-star-rating-illustration-260nw-1442679176-1.png" alt="" />
                            <span>({pt?.ratingsCount})</span></span>
                       </div>
                 
                    </div>
                )
            })}
            </div>
            {
                productModal&&<SingleProductModal productModal={productModal} setProductModal={setProductModal} ></SingleProductModal>
            }
        </>
    );
};

export default NewArrival;