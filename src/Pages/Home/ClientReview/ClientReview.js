import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import './Clientreview.css' 
import {Navigation } from "swiper";
import { useQuery } from 'react-query';
import Loading from "../../../Components/Loading/Loading"
const ClientReview = () => {
    const url = "http://localhost:5000/reviews"
    const { data, isLoading } = useQuery("reviews", () => fetch(url).then(res => res.json()))
    
    if (isLoading) {
        return <Loading/>
    }
   

    return (
           <div className='lg:w-[60%] w-[90%] mx-auto'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Navigation]}
        className="creview"
      >
                {
                    data.map(rw => <SwiperSlide className="lg:px-24 px-12 text-center">
                        <p>{rw?.reviwe}</p>
                    <div className='mt-4 flex justify-center gap-x-4'>
                           <div class="avatar">
                          <div class="w-16 rounded">
                           <img src={rw?.img} alt="Tailwind-CSS-Avatar-component" />
                            </div>
                            </div>
                            <span>
                                <h1 className='text-left'>{rw?.name }</h1>
                                <h2 className='text-left'>{rw?.title }</h2>
                            </span> 
                        </div>
                        .</SwiperSlide>)
            }
  
      </Swiper>
    </div>
    );
};

export default ClientReview;