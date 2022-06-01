import React from 'react';
import Collection from './Collection/Collection';
import HomeCarosel from './HomeCarosel/HomeCarosel';

const Home = () => {
    return (
        <div>
            <div>
                <HomeCarosel />
        
            </div>
            
            <div className='lg:px-12 px-4'>
                <div  className='py-16'>
                      <Collection/>
              </div>
            </div>
              
                
        </div>
    );
};

export default Home;