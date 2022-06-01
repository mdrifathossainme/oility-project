import React from 'react';

const Collection = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8'>
            <div className='py-12'
            style={{
            background: `url(https://i.ibb.co/BBqqnzy/shop-banner-img1.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "fit",
            backgroundPosition: " ", }}
            >
                <div className='flex justify-end lg:py-12 '>
                    <span className='lg:pr-16 pr-8'>
                        <h2 className='lg:text-xl mb-2'>Super Sale</h2>
                        <h1 className='lg:text-4xl text-2xl'>New Collection</h1>
                       <button className='border-b-2 mt-2 font-bold border-primary hover:text-primary'>Shop Now</button>
                     </span>
               </div>
            </div>
            <div className='py-12'
            style={{
            background: `url(https://i.ibb.co/vQVqdbW/shop-banner-img2.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "fit",
            backgroundPosition: " ", }}
            >
                <div className='flex justify-end lg:py-12 '>
                    <span className='lg:pr-16 pr-8'>
                        <h2 className='lg:text-xl  mb-2'>New Season</h2>
                        <h1 className='lg:text-4xl text-2xl'>Sale 40% Off</h1>
                       <button className='border-b-2 mt-2 font-bold border-primary hover:text-primary'>Shop Now</button>
                     </span>
               </div>
            </div>
           
           
        </div>
    );
};

export default Collection;