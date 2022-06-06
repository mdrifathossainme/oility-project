import React, { useState } from 'react';

import { Icon } from 'react-icons-kit'
import { th } from 'react-icons-kit/fa/th'
import { listUl } from 'react-icons-kit/fa/listUl'
import {chevronRight} from 'react-icons-kit/fa/chevronRight'
import AllProducts from './AllProducts';
const Shop = () => {

    const [selectgrid, setSeceltGrid] = useState(false)

    const handleGrid = () => {
        setSeceltGrid(false)
    }

    const handleList = () => {
         setSeceltGrid(true)
    }
    


    return (
        <div className='lg:p-12 p-4'>
            <div >
                <h1 className='text-3xl'>Shop</h1>
            </div>
             <div className='mt-8 grid grid-cols-2 items-center '>
                <div className='flex items-center justify-between '>
                      <div className=' flex-1'>
                       <h4 className='text-xl'>Categories</h4>
                 </div>
                <div className=' flex-1' >
                    <select class=" border-2 px-1 p-2 focus:outline-none">
                    <option>Default</option>
                    <option>Price - High to Low</option>
                    <option>Price -  Low to High </option>
                </select>
                </div>
              </div>
                <div className=' flex justify-end '>
                    <span onClick={handleGrid} className={` rounded-md px-3 py-2 hover:bg-primary hover:text-white cursor-pointer ${selectgrid===false?"bg-primary   text-white ":" border-2"} `} ><Icon icon={th} size={20 }/></span>
                    <span onClick={handleList} className={`mx-4 rounded-md px-3 py-2 hover:bg-primary cursor-pointer hover:text-white ${selectgrid===true?"bg-primary   text-white ":" border-2"} `}><Icon icon={listUl} size={20 }/></span>
                </div>
                
               </div>
                <div className='grid lg:grid-cols-4 grid-cols-1 gap-x-8   mt-8 '>
                <div className='lg:col-span-1'>

                    <div className='border-r-2 pr-5'>
                           <div className='flex hover:text-primary cursor-pointer    mb-3 items-center justify-between '>
                        <div className='flex i '>
                            <Icon icon={chevronRight} size={15} />
                            <h3 className='font-semibold ml-2'> All</h3>
                        </div>
                        (20)
                    </div>
                    <div className='flex hover:text-primary cursor-pointer    mb-3 items-center justify-between '>
                        <div className='flex i '>
                            <Icon icon={chevronRight} size={15} />
                            <h3 className='font-semibold ml-2'> Men's Sneaker</h3>
                        </div>
                        (20)
                    </div>
                    <div className='flex hover:text-primary cursor-pointer    mb-3 items-center justify-between '>
                        <div className='flex i '>
                            <Icon icon={chevronRight} size={15} />
                            <h3 className='font-semibold ml-2'> Men's Sneaker</h3>
                        </div>
                        (20)
                    </div>
                    <div className='flex hover:text-primary cursor-pointer    mb-3 items-center justify-between '>
                        <div className='flex i '>
                            <Icon icon={chevronRight} size={15} />
                            <h3 className='font-semibold ml-2'> Men's Sneaker</h3>
                        </div>
                        (20)
                    </div>
                    <div className='flex hover:text-primary cursor-pointer    mb-3 items-center justify-between '>
                        <div className='flex i '>
                            <Icon icon={chevronRight} size={15} />
                            <h3 className='font-semibold ml-2'> Men's Sneaker</h3>
                        </div>
                        (20)
                    </div>
                    <div className='flex hover:text-primary cursor-pointer    mb-3 items-center justify-between '>
                        <div className='flex i '>
                            <Icon icon={chevronRight} size={15} />
                            <h3 className='font-semibold ml-2'> Men's Sneaker</h3>
                        </div>
                        (20)
                    </div>
                 </div>
                </div>
            
                <div className='lg:col-span-3' >.
                
                    <div>
                        <AllProducts selectgrid={ selectgrid} />
                </div>
                </div>

            </div>
        </div>
    );
};

export default Shop;