import React from 'react';
import Footer from '../../Components/Footer/Footer';
import ClientReview from './ClientReview/ClientReview';
import Collection from './Collection/Collection';
import ExclusiveProducts from './ExclusiveProducts/ExclusiveProducts';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import HomeCarosel from './HomeCarosel/HomeCarosel';
import ServiceSection from './ServiceSection/ServiceSection';
import SummerSection from './SummerSection/SummerSection';

const Home = () => {
    return (
        <div>
            <div>
                <HomeCarosel />
        
            </div>
                <div  className='my-16 lg:px-12 px-4'>
                      <Collection/>
                </div>
                <div className='my-12 lg:px-12 px-4'>
                    <h1 className='text-center text-4xl mb-4'>Exclusive Products</h1>
                      <ExclusiveProducts/>
                </div>
                <div className='py-12'>
                    <SummerSection/>
            </div>
                <div className='my-12 lg:px-12 px-4'>
                    <h1 className='text-center text-4xl mb-8'>Featured Products</h1>
                     <FeaturedProduct/>
                </div>
               
                
           
            
             <div className='my-12 bg-[#FFF1F1] py-24'>
                    <h1 className='text-center text-4xl mb-8'>Our Client Say!</h1>
                     <ClientReview/>
                </div>
             <div className='my-24 lg:px-12 px-4'>
                   <ServiceSection/>
                </div>
              
                <Footer/>
        </div>
    );
};

export default Home;