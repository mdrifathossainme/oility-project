import React from 'react';

const SummerSection = () => {
    return (
        <div className='bg-[#F4F9FC]  '>
            <div className='grid grid-cols-1  lg:px-0 px-8 lg:grid-cols-2'>
                <div className=' lg:order-1 order-2'>
                    <img  src="https://i.ibb.co/VY7kT9F/trending-img.png" alt="" />
                </div>
                <div className=' lg:order-2 order-1  lg:mt-32 py-8'>
                    <p className='text-primary text-xl mb-4'>New season trends!</p>
                    <h1 className='lg:text-4xl text-2xl mb-2' >Best Summer Collection</h1>
                    <h4 className='text-2xl mb-4'>Sale Get up to 50% Off</h4>
                    <button className='btn btn-primary w-[160px] rounded-none hover:bg-transparent hover:text-primary '>SHop now</button>
                </div>
            </div>
        </div>
    );
};

export default SummerSection;