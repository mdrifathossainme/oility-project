import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Icon } from 'react-icons-kit'
import {heartO} from 'react-icons-kit/fa/heartO'
import { useQuery } from "react-query";
import Loading from "../../Components/Loading/Loading"
const WhiteList = () => {
  const[user]=useAuthState(auth) 

  const wishlistUrl = `http://localhost:5000/whishlistlove?email=${user?.email}`
  
  const{data:whishList,isLoading ,refetch}=useQuery('whitelist',()=>fetch(wishlistUrl).then(res=>res.json()))
    
 
  if (isLoading) {
    return <Loading/>
  }
      
    const handleDeleted = id => {
        const url = `http://localhost:5000/wishitemdelet/${id}`
        fetch(url,{
            method:"delete"
        })
            .then(res => res.json())
          .then(data => {
            if (data.acknowledged === true) {
             refetch()
              }
        })
    
}
refetch()

  return (
    <>
      
      <div className="lg:p-12 px-4 ">
        <h1 className="text-3xl pb-4">Wish List</h1>

        {
            whishList.length>0?   <>
         <div class="">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>product</th>
        <th>price</th>
        <th>seller</th>
        <th></th>
        <th>Removed</th>
      </tr>
    </thead>
                  <tbody>
                      

                      {
                          whishList?.map(wishitem => {
                              return (
                                  
                                    <tr>
                            <td className="lg:w-[200px]"><img className="w-36" src={wishitem.img} alt="" /></td>
                            
                            <td className="lg:w-[200px]"><h4 >{wishitem?.name.slice(0, 20)}</h4></td>
                            <td className="lg:w-[200px]"><h4 >${wishitem?.price}</h4></td>

                            <td  className="lg:w-[200px]"> <h4 >{wishitem?.seller}</h4></td>
                            <td  className="lg:w-[200px]"> <Link to=""><button className="btn btn-primary rounded-sm text-white hover:bg-transparent hover:text-primary "> Seleted Option</button></Link></td>
                                      <td className="lg:w-[200px]"> <button
                                          onClick={()=> handleDeleted(wishitem._id)} className="btn btn-primary bg-transparent text-primary hover:text-white rounded-sm ">Deleted</button> </td>
                            
                                            </tr>
                              )
                          })
        }
     
    </tbody>
  </table>
          </div>
        </>:  <>
          
          <div className="h-full w-full flex flex-col justify-center items-center">
     
                <Icon  icon={heartO} size={150} />
            <p className="font-bold text-xl mt-4">No items found in wishlist</p>
            <Link to="/shop"> <button className="btn btn-primary rounded-sm hover:bg-transparent hover:text-primary w-[150px] mt-4 ">Add Item</button></Link>
        </div>
          
        </>
          }
      
        
     
     
       
      </div>
    </>
  );
};

export default WhiteList;
