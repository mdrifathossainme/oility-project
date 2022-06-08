import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import { Icon } from "react-icons-kit";
import { ic_shopping_cart } from "react-icons-kit/md/ic_shopping_cart";
import { userO } from "react-icons-kit/fa/userO";
import { heartO } from "react-icons-kit/fa/heartO";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {ic_logout} from 'react-icons-kit/md/ic_logout'
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
const NavMenu = ({ children }) => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  const menuItem = (
    <>
      <li className="hover:text-primary-focus ">
        <CustomLink to="/">Home</CustomLink>
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
      <li className=" block lg:hidden  ">
      {user ? (
          <>
            <div class="dropdown dropdown-hover">
              <label tabindex="0" class=" ">
                {user?.photoURL? <img className="w-[40px] h-[40px] cursor-pointer  rounded-full border-2 border-primary " src={user.photoURL} alt="" />:<img className="w-[40px] h-[40px] cursor-pointer rounded-full  "src="https://i.ibb.co/TcFkJKX/download-1.png"  alt="" />}
                
              </label>
              <ul
                tabindex="0"
                class="dropdown-content lg:mt-0 mt-28 menu p-2 border-2 rounded-lg shadow bg-base-100  w-52"
              >
                <li>
                  <Link to="">My Profile</Link>
                  <Link to="">My Order</Link>
                  <Link to="">Review</Link>
                  <button onClick={logout}> <Icon icon={ic_logout }/> Logout</button>
                  
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <CustomLink to="/login">
         
              <span className="">
                <Icon icon={userO} size={20} /> Login
              </span>
            </CustomLink>
          </>
        )}
      </li>
      <li className="hover:text-primary-focus block lg:hidden ">
        <span className=" ">
           <CustomLink to="/whitelist">   <Icon icon={heartO} size={20} /> Wishlist</CustomLink>
        </span>
      </li>
    </>
  );

  return (
    <>
      <div class="drawer drawer-end ">
        <input id="navmenu" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <div class="w-full flex py-2 z-50 items-center justify-between sticky top-0   bg-base-100 border-b-2 lg:px-12 px-4">
            <div class=" flex-4 px-2 mx-2">
             <Link to="/"> <img src="https://i.ibb.co/3pGw4P6/logo-dark.png" alt="" /></Link>
            </div>
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
                <div className="flex">
                  <span className=" hidden lg:block mx-4 cursor-pointer ">
          {user ? (
          <>
            <div class="dropdown dropdown-hover">
              <label tabindex="0" class=" ">
                {user?.photoURL? <img className="w-[40px] h-[40px] cursor-pointer  rounded-full border-2 border-primary " src={user.photoURL} alt="" />:<img className="w-[40px] h-[40px] cursor-pointer rounded-full  "src="https://i.ibb.co/TcFkJKX/download-1.png"  alt="" />}
                
              </label>
              <ul
                tabindex="0"
                class="dropdown-content lg:mt-0 mt-28 menu p-2 border-2 rounded-lg shadow bg-base-100  w-52"
              >
                <li>
                  <Link to="">My Profile</Link>
                  <Link to="">My Order</Link>
                  <Link to="">Review</Link>
                  <button onClick={logout}> <Icon icon={ic_logout }/> Logout</button>
                  
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <CustomLink to="/login">
         
              <span className="">
                <Icon icon={userO} size={20} /> Login
              </span>
            </CustomLink>
          </>
        )}    </span>

                  <span className={`mx-4 ${user ? "lg:mt-2" : "mt-0"}  hidden lg:block cursor-pointer hover:text-primary-focus `}>
                    <CustomLink to="/whitelist">   <Icon icon={heartO} size={20} /> Wishlist</CustomLink>
                 
                  </span>

                  <Link to="cart">
  
                    <label for="cart-menu" class="">
                      <span className="mx-4  cursor-pointer hover:text-primary-focus  ">
                        <Icon className={`${user? "lg:mt-2":"lmt-0"}`} icon={ic_shopping_cart} size={25} />
                      </span>
                    </label>
                  </Link>
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
