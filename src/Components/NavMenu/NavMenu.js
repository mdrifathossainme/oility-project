import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import { Icon } from "react-icons-kit";
import { ic_shopping_cart } from "react-icons-kit/md/ic_shopping_cart";
import { userO } from 'react-icons-kit/fa/userO'
import {heartO} from 'react-icons-kit/fa/heartO'
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
const NavMenu = ({ children }) => {
const[user]= useAuthState(auth)
  
  console.log(user)
  const logout = () => {
    signOut(auth);
  }

  const menuItem = (
    <>
      <li className="hover:text-primary-focus ">
        <CustomLink  to="/">Home</CustomLink>
      </li>
      <li className="hover:text-primary-focus ">
        <CustomLink to="/shop">Shop</CustomLink>
      </li>
      <li className="hover:text-primary-focus ">
        <CustomLink to="/contactus">Contact Us</CustomLink>
      </li>
     
      <li className="hover:text-primary-focus "> 
        <CustomLink to="/blog">Blog</CustomLink>
      </li>
      <li className="hover:text-primary-focus ">
        <CustomLink to="/Signup">Signup</CustomLink>
      </li>
      <li className="hover:text-primary-focus lg:hidden  " >

        {user? <CustomLink to="/login"> <span className=""><Icon icon={userO} size={20} /> Login</span></CustomLink> : <>
        
        <div class="dropdown dropdown-hover">
            <label tabindex="0" class=" m-1">{ user?.displayName}</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                           <li><button onClick={logout}>Logout</button></li>
             
            </ul>
          </div>
        </>}
               
          </li>
          <li className="hover:text-primary-focus  lg:hidden " >
                <span className=" "><Icon icon={heartO} size={20} /> Wishlist</span>
          </li>
    </>
  );

  return (
    <>
      <div class="drawer drawer-end ">
        <input id="navmenu" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <div class="w-full flex py-2 z-50 items-center justify-between sticky top-0   bg-base-100 border-b-2 lg:px-12 px-4">
            <div class=" flex-4 px-2 mx-2"><img src="https://i.ibb.co/3pGw4P6/logo-dark.png" alt="" /></div>
            <span className="flex-1">
              <span className="flex items-center justify-end lg:justify-around">
                <div class=" lg:hidden">
                  <label for="navmenu" class="btn btn-square btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>

                <div class=" hidden lg:block">
                  <ul class="menu menu-horizontal">{menuItem}</ul>
                </div>
                <div className="flex" >
             
                  <span className=" hidden lg:block mx-4 cursor-pointer hover:text-primary-focus">

                    {user ? <>
                    
                    <div class="dropdown dropdown-hover">
            <label tabindex="0" class=" m-1">rifat</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                           <li><button onClick={logout}>Logout</button></li>
             
            </ul>
                      </div>
                    </> : <>
        
        
                      
                      <CustomLink to="/login"> <span className=""><Icon icon={userO} size={20} /> Login</span></CustomLink>
        </>}

                      
                 </span>
                  
                  
                  

                <span className="mx-4 hidden lg:block cursor-pointer hover:text-primary-focus  "><Icon icon={heartO} size={20} /> Wishlist</span>
                  
                  <Link to="cart"> <label for="cart-menu" class=""><span className="mx-4 cursor-pointer hover:text-primary-focus  "><Icon icon={ic_shopping_cart} size={25} /></span></label></Link>
                 
                
                </div>
              </span>
            </span>
          </div>

          {children}
        </div>
        <div class="drawer-side">
          <label for="navmenu" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">{menuItem}</ul>
        </div>
      </div>

 
    </>
  );
};

export default NavMenu;
