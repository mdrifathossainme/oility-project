import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Icon } from "react-icons-kit";
import { ic_add_shopping_cart } from "react-icons-kit/md/ic_add_shopping_cart";
import { heartO } from "react-icons-kit/fa/heartO";
import {cog} from 'react-icons-kit/fa/cog'
import { heart } from "react-icons-kit/fa/heart";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading/Loading";
const AllProducts = ({ selectgrid ,category }) => {
  const [user] = useAuthState(auth);
  const [product,setProduct]=useState([])
  const [pageCount, setPagecount] = useState(0)
  const [page, setPage] = useState(0)
  const [limit,setLimit]=useState(12)
  const [categori, setCategoti] = useState(0)
  const [alartModal, sentAlartModal] = useState(null)
  





const wishlistUrl = `https://pacific-falls-37798.herokuapp.com/whishlistlove?email=${user?.email}`
const { data:whishList, isLoading:as, refetch:asd } = useQuery("whishlistl", ()=> fetch(wishlistUrl).then(res => res.json()))
  
  
  useEffect(() => {
     const url = `https://pacific-falls-37798.herokuapp.com/allproducts?page=${category? categori:page}&category=${category}&limit=${category? "":limit}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data) )

  },[page,category])
  

  
  const pageCounturl=`https://pacific-falls-37798.herokuapp.com/productscount`
  useEffect(() => {
    fetch(pageCounturl)
      .then(res => res.json())
      .then(data => {
        const count = data.count;
        const pages = Math.ceil(count / 12)
        setPagecount(pages)

    })
  },[category])
  
 const handleWhiteList = (pt) => {
        const {_id, ...rest } = pt        
        const whiteListProduct = { email:user?.email, ...rest }
     
        const url = `https://pacific-falls-37798.herokuapp.com/whitelist`
        
        fetch(url, {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(whiteListProduct)
            
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('white List Product Add Success')
                    
                }
                else {
                    toast.error("The product is already on this White List")
                }
            })
        
        
        
    
  }


  
  const handleDeleted = id => {
    const url = `https://pacific-falls-37798.herokuapp.com/wishitemdelet/${id}`
    console.log(id)
    fetch(url, {
      method: "delete"
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          asd()
        }
      })
  }
  

  if (!product) {
  return <Loading/>
}
 
  
  
  
  return (
    <div id="#top">
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
                  <div   data-aos="fade-up" className=" hover-bg h-full w-full absolute top-0 ">
                    <span className="flex justify-center items-center h-full gap-x-4">
                      <label for="singleProductModal">
                  
                       {user?  <span className="hover-btn">
                          <Icon icon={ic_add_shopping_cart} size={20}></Icon>
                        </span>: <span onClick={() => alert("Login Fast")} className="hover-btn">
                          <Icon icon={ic_add_shopping_cart} size={20}></Icon>
                        </span>}
                      </label>

                      {whishList?.find((wn) => wn?.name === pt.name,asd()) ? (
                        <span onClick={()=>handleDeleted(pt._id)} className="hover-btn red-white">
                          <Icon icon={heart} size={20}></Icon>
                        </span>
                      ) : (
                          <>
                          {user?  <span onClick={() => handleWhiteList(pt)} className="hover-btn">
                            
                          <Icon icon={heartO} size={20}></Icon>
                            </span> :
                              <span onClick={() => alert("Login Fast")} className="hover-btn">
                            
                          <Icon icon={heartO} size={20}></Icon>
                        </span>}
                          </>
                      )}

                 
                   
                      <Link to={`/prodduct/${pt._id}`}> <span className="hover-btn">
                          <Icon icon={cog} size={20}></Icon>
                        </span></Link>
        
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
                              {user? <Link to=""><button className="btn  mt-2 rounded-sm btn-primary hover:bg-transparent text-white hover:text-primary"> <span className=" pr-2 hidden lg:block">
                             <Icon icon={ic_add_shopping_cart} size={20}></Icon>
                              </span> Add To Cart</button></Link>:<Link onClick={()=> alert("Login Fast") } to=""><button className="btn  mt-2 rounded-sm btn-primary hover:bg-transparent text-white hover:text-primary"> <span className=" pr-2 hidden lg:block">
                             <Icon icon={ic_add_shopping_cart} size={20}></Icon>
                              </span> Add To Cart</button></Link>}
                              

                    <span>
                      
                          {whishList?.find((wn) => wn?.name === pt.name,asd()) ? (
                        <span onClick={()=>handleDeleted(pt._id)} className="hover-btn red-white">
                          <Icon icon={heart} size={20}></Icon>
                        </span>
                      ) : (
                          <>
                          {user?  <span onClick={() => handleWhiteList(pt)} className="hover-btn">
                            
                          <Icon icon={heartO} size={20}></Icon>
                            </span> :
                              <span onClick={() => alert("Login Fast")} className="hover-btn">
                            
                          <Icon icon={heartO} size={20}></Icon>
                        </span>}
                          </>
                      )}
                      </span>

                 
                   
                    
                      <Link to={`/prodduct/${pt._id}`}> <span className="hover-btn">
                          <Icon icon={cog} size={20}></Icon>
                        </span></Link>
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
      {
        category?"": <>
         <div className="flex justify-center mt-12">
        {
          [...Array(pageCount).keys()].map(number =>
          
            <button for="#top"
            onClick={()=>setPage(number)}
              className={`btn   min-h-0  rounded-sm  border-2  border-gray-200  hover:bg-primary hover:border-primary  mx-2 ${page===number? "bg-primary text-white ":""}`}>
              {number + 1}
            
            </button>)
      }
      </div>
        </>
     }
    </div>
  );
};

export default AllProducts;
