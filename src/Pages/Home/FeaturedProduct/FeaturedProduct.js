import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './FeaturedProduct.css'
import UseProduct from '../../../hooks/UseProduct';
import { Icon } from 'react-icons-kit'
import { ic_add_shopping_cart } from 'react-icons-kit/md/ic_add_shopping_cart'
import { heartO } from 'react-icons-kit/fa/heartO'
import { searchPlus } from 'react-icons-kit/fa/searchPlus'
const FeaturedProduct = () => {
 const [products] = UseProduct()


    return (
        <>
      <Swiper
       slidesPerView={window.innerWidth<600? 1:4}
          spaceBetween={30}
          slidesPerGroup={1}
     
          pagination={{
            clickable: true,
          }}
          loopFillGroupWithBlank={true}
        className="FeaturedProduct"
            >
                
                {products.slice(10, 20).map(pt => 
               <SwiperSlide key={pt._id}>
                    <div className='border-2'>
                     
                        <div className=' hoverimg relative' >
                            <img  src={pt?.img} alt="" />
                            <div className=' hover-bg h-full w-full absolute top-0 '>
                                <span className='flex justify-center items-center h-full gap-x-4'>
                                    <span className= ' hover-btn'><Icon icon={ic_add_shopping_cart} className="" size={20}></Icon></span>
                                    <span className='hover-btn'><Icon icon={heartO} size={20}></Icon></span>
                                    <span className='hover-btn'><Icon icon={searchPlus} size={20}></Icon></span>
                                </span>
                                
                             </div>
                        </div>
                        <div className='p-2 '>
                        <h4 className='py-2'>{pt?.name.slice(0,25)}</h4>
                            <span className='text-primary py-1 flex justify-between '><h4>${pt?.price}</h4>  <span className='text-success'> { pt?.shipping}% off</span> </span>
                           <span className='flex items-center gap-x-2'> <img className='w-24' src="https://i.ibb.co/6B0VPQz/four-golden-star-rating-illustration-260nw-1442679176-1.png" alt="" />
                            <span>({pt?.ratingsCount})</span></span>
                       </div>
                 
                    </div>  
                 
        </SwiperSlide>
                  
                
            )}
                
        
        
      </Swiper>
    </>
    );
};

export default FeaturedProduct;