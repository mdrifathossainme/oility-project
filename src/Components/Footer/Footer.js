import React from "react";
import { Icon } from "react-icons-kit";
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";
import { instagram } from "react-icons-kit/fa/instagram";
import { twitter } from "react-icons-kit/fa/twitter";
import { youtubePlay } from "react-icons-kit/fa/youtubePlay";
import { googlePlus } from "react-icons-kit/fa/googlePlus";
import { mapMarker } from "react-icons-kit/fa/mapMarker";
import { envelopeOpen } from "react-icons-kit/fa/envelopeOpen";
import { phone } from "react-icons-kit/fa/phone";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Thank for Subscribe");
    e.target.reset();
  };

  return (
    <div >
      <div className="bg-primary py-16  ">
        <div className="lg:px-16 px-8 gap-4 grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl text-white">Subscribe Our Newsletter</h1>
          </div>
          <div>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                className="lg:w-[80%] w-[60%] h-12 focus:outline-none px-4"
                placeholder="Your Email Addrees"
              />
              <input
                className="btn h-12 rounded-none bg-black text-white border-black hover:bg-black"
                type="submit"
                value="Subscribe"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(32,35,37)] lg:px-12  px-8 py-24 text-white border-b-2 border-zinc-700">
        <div className="grid grid-cols-2  gap-4 lg:grid-cols-10 ">
          <div className=" col-span-2 ">
            <span>
              <Link to="/"><img
                className="mb-4"
                src="https://i.ibb.co/8z9vTrz/logo-light.png"
                alt=""
              /></Link>
            </span>
            <p className="mb-8 ">
              If you are going to use of Lorem Ipsum need to be sure there isn't
              hidden of text
            </p>
            <div className="flex gap-x-4 pr-3 ">
              <Icon className=" cursor-pointer " icon={facebookSquare} />
              <Icon className=" cursor-pointer " icon={instagram} />
              <Icon className=" cursor-pointer " icon={twitter} />
              <Icon className=" cursor-pointer " icon={youtubePlay} />
              <Icon className=" cursor-pointer " icon={googlePlus} />
            </div>
          </div>

          <div className="mt-3 lg:flex justify-center lg:col-span-2 col-span-1">
            <div>
              <h1 className="text-xl">Useful Links</h1>
              <ul className="mt-4">
                <li className="mb-2 hover:text-primary ease-in-out duration-300 ">
                  <Link to="/">About Us</Link>
                </li>
                <li className="mb-2 hover:text-primary ease-in-out duration-300 ">
                  <Link to="/">FAQ</Link>
                </li>
                <li className="mb-2 hover:text-primary ease-in-out duration-300 ">
                  <Link to="/">Location</Link>
                </li>
                <li className="mb-2 hover:text-primary ease-in-out duration-300 ">
                  <Link to="/">Affiliates</Link>
                </li>
                <li className="mb-2 hover:text-primary ease-in-out duration-300 ">
                  <Link to="/">Contat</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-3 lg:flex justify-center lg:col-span-2 col-span-1">
            <div>
              <h1 className="text-xl">Category</h1>
              <ul className="mt-4">
                <li className="mb-2 hover:text-primary ease-in-out duration-300 ">
                  <Link to="/">Men</Link>
                </li>
                <li className="mb-2 hover:text-primary ease-in-out duration-300 ">
                  <Link to="/">Woman</Link>
                </li>
                <li className="mb-2 hover:text-primary ease-in-out duration-300 ">
                  <Link to="/">Kids</Link>
                </li>
                <li className="mb-2 hover:text-primary ease-in-out duration-300 ">
                  <Link to="/">Best Seller</Link>
                </li>
                <li className="mb-2 hover:text-primary ease-in-out duration-300 ">
                  <Link to="/">New Arrivals</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-3 lg:flex justify-center lg:col-span-2 col-span-1">
            <div>
              <h1 className="text-xl">My Account</h1>
              <ul className="mt-4">
                <li className="mb-2 hover:text-primary ease-in-out duration-300 ">
                  <Link to="/">My Account</Link>
                </li>
                <li className="mb-2 hover:text-primary ease-in-out duration-300 ">
                  <Link to="/">Discount</Link>
                </li>
                <li className="mb-2 hover:text-primary ease-in-out duration-300 ">
                  <Link to="/">Returns</Link>
                </li>
                <li className="mb-2 hover:text-primary ease-in-out duration-300 ">
                  <Link to="/">Orders History</Link>
                </li>
                <li className="mb-2 hover:text-primary ease-in-out duration-300 ">
                  <Link to="/">Order Trackin</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-3  lg:col-span-2 col-span-1">
            <div>
              <h1 className="text-xl">Contact Info</h1>
              <div className="mt-4">
                <div className="flex gap-x-3">
                  <div>
                    <Icon className=" cursor-pointer " icon={mapMarker} />
                  </div>
                  <div>123 Street, Old Trafford, New South London , UK</div>
                </div>
                <div className="flex gap-x-3 py-4">
                  <div>
                    <Icon className=" cursor-pointer " icon={envelopeOpen} />
                  </div>
                  <div>
                    {" "}
                    <a
                      className="hover:text-primary "
                      href="mailto:mdrifathossain.mr@gmail.com"
                    >
                      info@oilitygmail.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-x-3 ">
                  <div>
                    <Icon className=" cursor-pointer " icon={phone} />
                  </div>
                  <div>+0880123456678</div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
          
          <div className="bg-[#202325] py-8  text-white">
           
              <div className="lg:px-12 px-4 grid lg:grid-cols-2 lg:justify-around justify-center ">
                  <div className="flex lg:justify-start mb-4 justify-center">    <p> Copyright &copy;  {new Date().getFullYear()} oility  </p></div>
                  <div  className="lg:flex lg:justify-end  lg:block hidden">
                      <img  className=" h-[30px]" src="https://i.ibb.co/SJmt8qz/1-1.webp" alt="" />
                  </div>
              </div>
          </div>
    </div>
  );
};

export default Footer;
