import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Icon } from "react-icons-kit";
import { ic_add_shopping_cart } from "react-icons-kit/md/ic_add_shopping_cart";
import { heartO } from "react-icons-kit/fa/heartO";
import { searchPlus } from "react-icons-kit/fa/searchPlus";
import { heart } from "react-icons-kit/fa/heart";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";
const AllProducts = ({ selectgrid }) => {
  const [user] = useAuthState(auth);
  const [product,setProduct]=useState([])
  const [pageCount, setPagecount] = useState(0)
  const [page, setPage] = useState(0)
  const [whishList,setwi]=useState([])




  // const wishlistUrl = `http://localhost:5000/whishlistlove?email=${user?.email}`;
  // const {
  //   data: whishList,
  //   isLoading: as,
  //   refetch: asd,
  // } = useQuery("whishlistl", () =>
  //   fetch(wishlistUrl).then((res) => res.json())
  //   );
  
  
  useEffect(() => {
     const url = `http://localhost:5000/allproducts?page=${page}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data) )

  },[page])
  
  
  const pageCounturl='http://localhost:5000/productscount'
  useEffect(() => {
    fetch(pageCounturl)
      .then(res => res.json())
      .then(data => {
        const count = data.count;
        const pages = Math.ceil(count / 12)
        setPagecount(pages)

    })
  },[])
  
  
  
  
  
  return (
    <div>
      <div
        className={`grid ${
          selectgrid === false ? "lg:grid-cols-3 grid-cols-2 gap-4  " : "grid-cols-1 gap-8 "
        }   `}
      >
        {product?.map((pt) => {
          return (
            <div
              key={pt?._id}
              className={`${
                selectgrid === true
                  ? " grid lg:grid-cols-4 grid-cols-2 gap-8 justify-start "
                  : "border-2 relative"
              }  `}
            >
              <div
                className={`${
                  selectgrid === true ? "col-span-1" : "hoverimg relative"
                }`}
              >
                <img
                  className={`${selectgrid === true ? "w-[200px] lg:h-auto h-full " : ""}`}
                  src={pt?.img}
                  alt=""
                />
                {pt.stock > 0 && selectgrid === false && (
                  <div className=" hover-bg h-full w-full absolute top-0 ">
                    <span className="flex justify-center items-center h-full gap-x-4">
                      <label for="singleProductModal">
                  
                        <span className="hover-btn">
                          <Icon icon={ic_add_shopping_cart} size={20}></Icon>
                        </span>
                      </label>

                      {whishList?.find((wn) => wn.name === pt.name) ? (
                        <span className="hover-btn red-white">
                          <Icon icon={heart} size={20}></Icon>
                        </span>
                      ) : (
                        <span className="hover-btn">
                          <Icon icon={heartO} size={20}></Icon>
                        </span>
                      )}

                 
                   
                        <span className="hover-btn">
                          <Icon icon={searchPlus} size={20}></Icon>
                        </span>
        
                    </span>
                  </div>
                )}
                  </div>
                  



              <div  className={`${ selectgrid === true ? "lg:col-span-3  col-span-1" : " p-2 " }`}>
                      <h4 className="py-2">{selectgrid === false ? <>
                      {pt?.name.slice(0, 30)}
                      </> : <>
                        {pt?.name}
                      </>}</h4>

                <span className={`text-primary py-1 lg:flex justify-between `}>
                          {selectgrid === false ? <>
                 <h4>${pt?.price}</h4>
                  <span className="text-success"> {pt?.shipping}% off</span>
                          </> :
                              <>
                            <div className=" lg:flex justify-between w-full  ">
                                      <span>
                                            <div className="flex">
                                  <h4>${pt?.price}</h4>
                                <span className="text-success ml-4"> {pt?.shipping}% off</span>
                                </div>
                              </span>
                                      
                                      <span>
                                          <div className="flex items-center gap-x-2">
                            <img
                                className="w-24"
                                src="https://i.ibb.co/6B0VPQz/four-golden-star-rating-illustration-260nw-1442679176-1.png"
                                alt=""
                            />
                            <span className="text-black" >({pt?.ratingsCount})</span>
                            </div>
                            </span>
                              
                             </div>
                              </>  
                            }
                      </span>

                      <div className={`${selectgrid === true? "":"hidden"}`}>
                          <p>Vitae itaque ut quidem rerum ad delectus! Consequatur quibusdam ullam eaque blanditiis qui praesentium accusantium soluta temporibus? Modi</p>
                      </div>
                      <div className={`${selectgrid === true? "":"hidden"}`}>
                          <div className="flex items-center gap-x-4">
                              <Link to=""><button className="btn  mt-2 rounded-sm btn-primary hover:bg-transparent text-white hover:text-primary"> <span className=" pr-2 hidden lg:block">
                          <Icon icon={ic_add_shopping_cart} size={20}></Icon>
                              </span> Add To Cart</button></Link>
                              

                              <span>
                                    {whishList?.find((wn) => wn.name === pt.name, ) ? (
                        <span className="hover:text-primary cursor-pointer red-white">
                          <Icon icon={heart} size={20}></Icon>
                        </span>
                      ) : (
                        <span className="hover:text-primary cursor-pointer">
                          <Icon icon={heartO} size={20}></Icon>
                        </span>
                      )}
                      </span>

                 
                   
                        <span className=" hover:text-primary cursor-pointer">
                          <Icon icon={searchPlus} size={20}></Icon>
                        </span>
                         </div>
                      </div>

                <span className={`${selectgrid===false? "flex items-center gap-x-2":"hidden" }`}>
              
                  <img
                    className="w-24"
                    src="https://i.ibb.co/6B0VPQz/four-golden-star-rating-illustration-260nw-1442679176-1.png"
                    alt=""
                  />
                  <span>({pt?.ratingsCount})</span>
                      </span>
                      
              </div>
              {pt.stock === 0 && (
                <div className=" absolute top-2 left-2 ">
                  <h4 className="bg-red-500 py-1 rounded-md text-white px-2">
                    Stock Out
                  </h4>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-12">
        {
          [...Array(pageCount).keys()].map(number =>
          
            <button
            onClick={()=>setPage(number)}
              className={`btn   min-h-0  rounded-sm  border-2  border-gray-200  hover:bg-primary hover:border-primary  mx-2 ${page===number? "bg-primary text-white ":""}`}>
              {number + 1}
            
            </button>)
      }
      </div>
    </div>
  );
};

export default AllProducts;
