import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const WhiteList = () => {
  const[user]=useAuthState(auth) 

    const [whishList, setWishList] = useState([])
    
             const wishlistUrl=`https://pacific-falls-37798.herokuapp.com/whishlistlove?email=${user?.email}`
             fetch(wishlistUrl)
            .then(res => res.json())
            .then(data => setWishList(data))
    

    const handleDeleted = id => {
        const url = `http://localhost:5000/wishitemdelet/${id}`
        fetch(url,{
            method:"delete"
        })
            .then(res => res.json())
            .then(data => {
            console.log(data)
        })
    
}

  console.log(whishList)



  return (
      <div className="lg:p-12 px-4 ">
          <h1 className="text-3xl pb-4">Wish List</h1>
        
     
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
                          whishList.map(wishitem => {
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
       
    </div>
  );
};

export default WhiteList;
