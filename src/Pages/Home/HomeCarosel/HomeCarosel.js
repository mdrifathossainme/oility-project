import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade} from "swiper";
import './style.css'
import { Link } from 'react-router-dom';
const HomeCarosel = () => {
    return (
          <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade ]}
        loopFillGroupWithBlank={true}
        className="homeCarusel"
      >
        <SwiperSlide
          style={{
            background: `url(https://i.ibb.co/FYx8gPx/1.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: " center ",
          }}
              >
                  <div className="lg:p-16  p-8 ">
                        
                      
                        <p className='lg:mt-[120px] lg:mb-6 lg:text-2xl'>50% off in all product</p>
                        <h1 className='lg:text-7xl text-3xl mb-4'>Man Fashion</h1>
                        <button className='btn btn-primary lg:w-36 rounded-none hover:bg-transparent hover:text-primary '>Shop Now</button>
               
                  </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: `url(https://i.ibb.co/qsbdfVM/2.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: " center center",
          }}
              >
                  <div className="lg:p-16  p-8 ">
                        
                      
                        <p className='lg:mt-[120px] lg:mb-6 lg:text-2xl'>40% off in all product</p>
                        <h1 className='lg:text-7xl text-3xl mb-4'>Woman Fashion</h1>
                        <button className='btn btn-primary lg:w-36 rounded-none hover:bg-transparent hover:text-primary'>Shop Now</button>
               
                  </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: `url(https://i.ibb.co/6B6mmgj/3.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: " center center",
          }}
              >
                 <div className="lg:p-16  p-8 ">
                        
                      
                        <p className='lg:mt-[120px] lg:mb-6 lg:text-2xl'>Taking your Viewing Experience to Next Level</p>
                        <h1 className='lg:text-7xl text-3xl mb-4'>Summer Sale</h1>
                        <button className='btn btn-primary lg:w-36 rounded-none hover:bg-transparent hover:text-primary'>Shop Now</button>
               
                  </div>
        </SwiperSlide>
    
     
      </Swiper>
    </>
    );
};

export default HomeCarosel;