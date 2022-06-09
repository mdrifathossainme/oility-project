import React, { useEffect, useState } from "react";

import { Icon } from "react-icons-kit";
import { th } from "react-icons-kit/fa/th";
import { listUl } from "react-icons-kit/fa/listUl";
import { chevronRight } from "react-icons-kit/fa/chevronRight";
import AllProducts from "./AllProducts";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
const Shop = () => {
  const [selectgrid, setSeceltGrid] = useState(false);
  const [category, setCategory] = useState("");
  const [productLenght, setPhoductLenght] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState();

  const handleGrid = () => {
    setSeceltGrid(false);
  };

  const handleList = () => {
    setSeceltGrid(true);
  };

  useEffect(() => {
    const url = `https://pacific-falls-37798.herokuapp.com/productscount`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPhoductLenght(data.count));
  }, []);

  console.log(productLenght);
  return (
    <>
      <div className="lg:p-12 p-4">
        <div>
          <h1 className="text-3xl">Shop</h1>
        </div>
        <div className="mt-8 grid grid-cols-2 items-center lg:order-1  ">
          <div className="flex items-center justify-between ">
            <div className=" flex-1">
              <h4 className="text-xl">Categories</h4>
            </div>
            <div className=" flex-1 lg:px-0 px-4">
              <select class=" border-2 :px-1  p-2 focus:outline-none">
                <option>Default</option>
                <option>Price - High to Low</option>
                <option>Price - Low to High </option>
              </select>
            </div>
          </div>
          <div className=" flex justify-end ">
            <span
              onClick={handleGrid}
              className={` rounded-md px-3 py-2 hover:bg-primary hover:text-white cursor-pointer ${
                selectgrid === false ? "bg-primary   text-white " : " border-2"
              } `}
            >
              <Icon icon={th} size={20} />
            </span>
            <span
              onClick={handleList}
              className={`mx-4 rounded-md px-3 py-2 hover:bg-primary cursor-pointer hover:text-white ${
                selectgrid === true ? "bg-primary   text-white " : " border-2"
              } `}
            >
              <Icon icon={listUl} size={20} />
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-x-8   mt-8 ">
          <div className="lg:col-span-1 lg:order-1  order-2">
            <div className="border-r-2 pr-5">
              <div
                onClick={() => setCategory("")}
                className={`flex hover:text-primary cursor-pointer    mb-3 items-center justify-between ${
                  category ? "" : "text-primary"
                } `}
              >
                <div className="flex  ">
                  <Icon icon={chevronRight} size={15} />
                  <h3 className="font-semibold ml-2"> All</h3>
                </div>
                ({productLenght})
              </div>
              <div
                onClick={() => setCategory("Men's Sneaker")}
                className={`flex hover:text-primary cursor-pointer    mb-3 items-center justify-between ${
                  category === "Men's Sneaker" ? "text-primary" : ""
                } `}
              >
                <div className="flex  ">
                  <Icon icon={chevronRight} size={15} />
                  <h3 className="font-semibold ml-2"> Men's Sneaker</h3>
                </div>
                (22)
              </div>
              <div
                onClick={() => setCategory("Bag")}
                className={`flex hover:text-primary cursor-pointer    mb-3 items-center justify-between ${
                  category === "Bag" ? "text-primary" : ""
                } `}
              >
                <div className="flex  ">
                  <Icon icon={chevronRight} size={15} />
                  <h3 className="font-semibold ml-2">Bag</h3>
                </div>
                (11)
              </div>
              <div
                onClick={() => setCategory("Cap")}
                className={`flex hover:text-primary cursor-pointer    mb-3 items-center justify-between ${
                  category === "Cap" ? "text-primary" : ""
                } `}
              >
                <div className="flex  ">
                  <Icon icon={chevronRight} size={15} />
                  <h3 className="font-semibold ml-2"> Cap</h3>
                </div>
                (12)
              </div>
              <div
                onClick={() => setCategory("Earphones")}
                className={`flex hover:text-primary cursor-pointer    mb-3 items-center justify-between ${
                  category === "Earphones" ? "text-primary" : ""
                } `}
              >
                <div className="flex  ">
                  <Icon icon={chevronRight} size={15} />
                  <h3 className="font-semibold ml-2"> Earphones</h3>
                </div>
                (08)
              </div>
              <div
                onClick={() => setCategory("Men's Pants")}
                className={`flex hover:text-primary cursor-pointer    mb-3 items-center justify-between ${
                  category === "Men's Pants" ? "text-primary" : ""
                } `}
              >
                <div className="flex  ">
                  <Icon icon={chevronRight} size={15} />
                  <h3 className="font-semibold ml-2"> Men's Pants</h3>
                </div>
                (11)
              </div>
              <div
                onClick={() => setCategory("Bottle")}
                className={`flex hover:text-primary cursor-pointer    mb-3 items-center justify-between ${
                  category === "Bottle" ? "text-primary" : ""
                } `}
              >
                <div className="flex  ">
                  <Icon icon={chevronRight} size={15} />
                  <h3 className="font-semibold ml-2"> Bottle</h3>
                </div>
                (11)
              </div>
              <div
                onClick={() => setCategory("Men's Boot")}
                className={`flex hover:text-primary cursor-pointer    mb-3 items-center justify-between ${
                  category === "Men's Boot" ? "text-primary" : ""
                } `}
              >
                <div className="flex  ">
                  <Icon icon={chevronRight} size={15} />
                  <h3 className="font-semibold ml-2"> Men's Boot</h3>
                </div>
                (10)
              </div>
            </div>
            <div className="lg:mt-12 mt-4">
              <h1 className="text-xl">Size</h1>
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => setSize(0)}
                  className={` btn border-2  rounded-sm ${
                    size === 0
                      ? "bg-primary text-white border-primary hover:bg-primary "
                      : "border-gray-200 "
                  } `}
                >
                  All Size
                </button>
                <button
                  onClick={() => setSize(1)}
                  className={` btn border-2  rounded-sm ${
                    size === 1
                      ? "bg-primary text-white border-primary hover:bg-primary "
                      : "border-gray-200 "
                  } `}
                >
                  x
                </button>
                <button
                  onClick={() => setSize(2)}
                  className={` btn border-2  rounded-sm ${
                    size === 2
                      ? "bg-primary text-white border-primary hover:bg-primary "
                      : "border-gray-200 "
                  } `}
                >
                  m
                </button>
                <button
                  onClick={() => setSize(3)}
                  className={` btn border-2  rounded-sm ${
                    size === 3
                      ? "bg-primary text-white border-primary hover:bg-primary "
                      : "border-gray-200 "
                  } `}
                >
                  XL
                </button>
              </div>
            </div>
            <div className="lg:mt-12 mt-4">
              <h1 className="text-xl">color</h1>
              <div className="mt-4 flex gap-3">
                <div
                  onClick={() => setColor(0)}
                  className={` border-2 p-1 rounded-full ${
                    color === 0 ? "border-primary" : ""
                  }`}
                >
                  <div className="w-5 h-5 cursor-pointer rounded-full bg-red-500 "></div>
                </div>
                <div
                  onClick={() => setColor(1)}
                  className={` border-2 p-1 rounded-full ${
                    color === 1 ? "border-primary" : ""
                  }`}
                >
                  <div className="w-5 h-5 cursor-pointer rounded-full bg-black "></div>
                </div>
                <div
                  onClick={() => setColor(2)}
                  className={`border-2 p-1 rounded-full ${
                    color === 2 ? "border-primary" : ""
                  }`}
                >
                  <div className="w-5 h-5 cursor-pointer rounded-full bg-amber-800 "></div>
                </div>
              </div>
            </div>
            <div className="lg:mt-12 lg-4">
              <h1 className="text-xl">Popular Items</h1>
              <div className="lg:mt-12 mt-8 flex flex-col gap-y-8">
                <div className="flex gap-x-4">
                  <img
                    className="w-24"
                    src="https://i.ibb.co/PZxXK5v/photo-8.webp"
                    alt=""
                  />
                  <div>
                    <h1 className="text-xl"> Music Sound Box</h1>
                    <span className="flex gap-x-4">
                      <h1 className="text-primary text-xl">$231.00</h1>
                      <del>$342.00</del>
                    </span>
                    <img
                      className="w-24"
                      src="https://i.ibb.co/6B0VPQz/four-golden-star-rating-illustration-260nw-1442679176-1.png"
                      alt=""
                    />
                  </div>
                </div>
                
                <div className="flex gap-x-4">
                  <img
                    className="w-24"
                    src="https://i.ibb.co/SR7wTDb/in-full-hd-tv-te50fa-ua43te50fakxxl-lperspectiveblack-thumb-231881867.png"
                    alt=""
                  />
                  <div>
                    <h1 className="text-xl"> Smart Tv</h1>
                    <span className="flex gap-x-4">
                      <h1 className="text-primary text-xl">$431.00</h1>
                      <del>$542.00</del>
                    </span>
                    <img
                      className="w-24"
                      src="https://i.ibb.co/6B0VPQz/four-golden-star-rating-illustration-260nw-1442679176-1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <img
                    className="w-24"
                    src="https://i.ibb.co/Y3Syd0J/i-Mac-2020-Model-3-1-GHz-6-Core-Processor-1.png"
                    alt=""
                  />
                  <div>
                    <h1 className="text-xl"> I Mac</h1>
                    <span className="flex gap-x-4">
                      <h1 className="text-primary text-xl">$12.00</h1>
                      <del>$1242.00</del>
                    </span>
                    <img
                      className="w-24"
                      src="https://i.ibb.co/6B0VPQz/four-golden-star-rating-illustration-260nw-1442679176-1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <img
                    className="w-24"
                    src="https://i.ibb.co/5WHg2xb/large-audio-speakers-3d-rendering-260nw-459278746.png"
                    alt=""
                  />
                  <div>
                    <h1 className="text-xl"> Sound Box Set</h1>
                    <span className="flex gap-x-4">
                      <h1 className="text-primary text-xl">$2421.00</h1>
                      <del>$1142.00</del>
                    </span>
                    <img
                      className="w-24"
                      src="https://i.ibb.co/6B0VPQz/four-golden-star-rating-illustration-260nw-1442679176-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:mt-12 lg-4">
              <h1 className="text-xl">Tag</h1>
              <div className="mt-4 flex flex-wrap	 gap-3">
                <div onClick={() => setCategory("Men's Sneaker")}>
                  <button
                    className={`btn hover:bg-primary hover:text-white hover:border-primary border-2  rounded-sm  ${
                      category === "Men's Sneaker"
                        ? "text-white bg-primary border-primary"
                        : ""
                    } `}
                  >
                    Sneaker
                  </button>
                </div>
                <div onClick={() => setCategory("Earphones")}>
                  <button
                    className={`btn hover:bg-primary hover:text-white hover:border-primary border-2  rounded-sm  ${
                      category === "Earphones"
                        ? "text-white bg-primary border-primary"
                        : ""
                    } `}
                  >
                    Electronic
                  </button>
                </div>
                <div onClick={() => setCategory("Men's Pants")}>
                  <button
                    className={`btn hover:bg-primary hover:text-white hover:border-primary border-2  rounded-sm  ${
                      category === "Men's Pants"
                        ? "text-white bg-primary border-primary"
                        : ""
                    } `}
                  >
                    Pnat's
                  </button>
                </div>
                <div onClick={() => setCategory("Men's Boot")}>
                  <button
                    className={`btn hover:bg-primary hover:text-white hover:border-primary border-2  rounded-sm  ${
                      category === "Men's Boot"
                        ? "text-white bg-primary border-primary"
                        : ""
                    } `}
                  >
                    Shose
                  </button>
                </div>

                <div onClick={() => setCategory("Cap")}>
                  <button
                    className={`btn hover:bg-primary hover:text-white hover:border-primary border-2 border-gray-200 rounded-sm  ${
                      category === "Cap"
                        ? "text-white bg-primary border-primary"
                        : ""
                    } `}
                  >
                    cap
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                background: `url('https://i.ibb.co/28Zvh6J/sidebar-banner-img.jpg')`,
                backgroundRepeat: "no-repeat",
              }}
              className="lg:mt-12 lg-4 w-full h-[350px] relative "
            >
              <div className="absolute left-4 bottom-5">
                <h1 className="text-white text-2xl">New Collection</h1>
                <h1 className="text-white text-3xl">SALE 30% Off</h1>
                <Link to="/shop">
                  <button className="mt-1 btn border-2 rounded-sm hover:bg-transparent hover:text-white ">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div data-aos-easing="ease-out-cubic"
            data-aos-duration="500" data-aos="zoom-in" className="lg:col-span-3 lg:order-2 order-1">
            
            <div   className="">
              <AllProducts category={category} selectgrid={selectgrid} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
