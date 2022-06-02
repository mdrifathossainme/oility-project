import React from 'react';

const ServiceSection = () => {
    return (
        <div className='grid grid=cols-1 lg:grid-cols-3 gap-8'>
            
            <div className=' border-r-2 px-8'>
                <span className='flex justify-center '><img className='w-12 mb-4' src="https://i.ibb.co/rmz1t2Y/1-1.webp" alt="" /></span>
                <h1  className='text-xl text-center'>Free Delivery</h1>
                <p className=' text-center' >If you are going to use of Lorem, you need to be sure there anything</p>
            </div>
            <div className=' border-r-2 px-8'>
                <span className='flex justify-center '><img className='w-12 mb-4' src="https://i.ibb.co/7J7yFY9/3-1.webp" alt="" /></span>
                <h1  className='text-xl text-center'>30 Day Return</h1>
                <p className=' text-center' >If you are going to use of Lorem, you need to be sure there anything</p>
            </div>
            <div className=' border-r-2 px-8'>
                <span className='flex justify-center '><img className='w-12 mb-4' src="https://i.ibb.co/ZgjHgMd/2-1.webp" alt="" /></span>
                <h1  className='text-xl text-center'>27/4 Support</h1>
                <p className=' text-center' >If you are going to use of Lorem, you need to be sure there anything</p>
            </div>
        </div>
    );
};

export default ServiceSection;