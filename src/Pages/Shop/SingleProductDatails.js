import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { Icon } from "react-icons-kit";
import {shield} from 'react-icons-kit/feather/shield'
import { repeat } from "react-icons-kit/fa/repeat";
import { money } from "react-icons-kit/fa/money";
import {minus} from 'react-icons-kit/feather/minus'
import { plus } from 'react-icons-kit/feather/plus'
import {shoppingCart} from 'react-icons-kit/feather/shoppingCart'
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";
import { instagram } from "react-icons-kit/fa/instagram";
import { twitter } from "react-icons-kit/fa/twitter";
import { youtubePlay } from "react-icons-kit/fa/youtubePlay";
import { googlePlus } from "react-icons-kit/fa/googlePlus";
import Footer from "../../Components/Footer/Footer";
import { toast } from "react-toastify";
const SingleProductDatails = () => {
  const { id } = useParams();

  const url = `http://localhost:5000/product/${id}`;
  const { data, isLoading } = useQuery("singleProduct", () =>
    fetch(url).then((res) => res.json())
  );
  const [color, setColor] = useState();
  const [size, setSize] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const [tabarea, setTabArea] = useState(1);
    

    const handlePlushQuantity = () => { 
        if (quantity<5) {
            const newQuantity = quantity + 1
                setQuantity(newQuantity)
        }
    
    }
    const handleMinusQuantity = () => {
       if (quantity>1) {
            const newQuantity = quantity - 1
                setQuantity(newQuantity)
        }
    }

    const handleReviewSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        toast.success("Thanks for Review")
}








  if (isLoading) {
    return <Loading />;
    }
    console.log(data)

  return (
      <>
      <div className="lg:p-12 p-4">
      <h2 className="text-4xl ">{data?.name}</h2>

      <div className="lg:mt-12 mt-8 flex flex-wrap  gap-6">
        <div className="lg:w-[50%] lg:flex justify-end">
          <img className="w-[70%]" src={data?.img} alt="" />
        </div>
        <div className="lg:w-[40%]">
          <h1 className="text-2xl"> {data?.name}</h1>
          <div className="flex items-center mt-4 w-full justify-between ">
            <span className="flex items-center gap-x-4">
              <span className="text-primary text-3xl">
                
                <h1>${data?.price}</h1>
              </span>
            </span>

            <span className="flex items-center ">
              <img
                className="w-24"
                src="https://i.ibb.co/6B0VPQz/four-golden-star-rating-illustration-260nw-1442679176-1.png"
                alt=""
              />
              ({data?.ratingsCount})
            </span>
          </div>
          <p className="my-4">
            vitae itaque ut quidem rerum ad delectus! Consequatur quibusdam
            ullam eaque blanditiis qui praesentium accusantium soluta
            temporibus? Modi
          </p>
          <div>
            <div className="my-1">
              
              <span className="text-primary mr-2">
                <Icon icon={shield} />
              </span>
              <span>1 Year Brand Warranty</span>
            </div>
            <div className="my-1">
              
              <span className="text-primary mr-2">
                <Icon icon={repeat} />
              </span>
              <span>30 Days Return Policy</span>
            </div>
            <div className="my-1">
              
              <span className="text-primary mr-2">
                <Icon icon={money} />
              </span>
              <span>Cash on Delivery available</span>
            </div>
          </div>
          <div className="lg:mt-6 flex items-center gap-x-2">
            <div>
              <h1 className="text-lg">
                <p>color</p>
              </h1>
            </div>
            <div className=" flex gap-3">
              <div
                onClick={() => setColor(0)}
                className={` border-2 p-1 rounded-full ${
                  color === 0 ? "border-primary" : ""
                }`}
              >
                <div className="w-3 h-3 cursor-pointer rounded-full bg-red-500 "></div>
              </div>
              <div
                onClick={() => setColor(1)}
                className={` border-2 p-1 rounded-full ${
                  color === 1 ? "border-primary" : ""
                }`}
              >
                <div className="w-3 h-3 cursor-pointer rounded-full bg-black "></div>
              </div>
              <div
                onClick={() => setColor(2)}
                className={`border-2 p-1 rounded-full ${
                  color === 2 ? "border-primary" : ""
                }`}
              >
                <div className="w-3 h-3 cursor-pointer rounded-full bg-amber-800 "></div>
              </div>
            </div>
          </div>
          <div className=" flex my-4 items-center gap-x-4 ">
            <div>
              
              <h1 className="text-lg">
                <p>Size</p>
              </h1>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setSize(1)}
                className={` btn btn-xs border-2  rounded-sm ${
                  size === 1
                    ? "bg-primary text-white border-primary hover:bg-primary "
                    : "border-gray-200 "
                } `}
              >
                x
              </button>
              <button
                onClick={() => setSize(2)}
                className={` btn btn-xs border-2  rounded-sm ${
                  size === 2
                    ? "bg-primary text-white border-primary hover:bg-primary "
                    : "border-gray-200 "
                } `}
              >
                m
              </button>
              <button
                onClick={() => setSize(3)}
                className={` btn btn-xs border-2  rounded-sm ${
                  size === 3
                    ? "bg-primary text-white border-primary hover:bg-primary "
                    : "border-gray-200 "
                } `}
              >
                XL
              </button>
              <button
                onClick={() => setSize(4)}
                className={` btn border-2 btn-xs  rounded-sm ${
                  size === 4
                    ? "bg-primary text-white border-primary hover:bg-primary "
                    : "border-gray-200 "
                } `}
              >
                XXL
              </button>
            </div>
          </div>
         <div className="flex flex-wrap gap-4 items-center">
                          <div>
                                  <span onClick={handleMinusQuantity} className=" cursor-pointer bg-slate-200 rounded-full py-[10px] px-[12px] "><Icon icon={minus} /></span>
           <span className="px-4"> <input value={quantity} className="border-2 border-slate-300 py-1  w-[50px] text-center focus:outline-none " type="number"  min={1} max={5} /> </span>             
                          <span onClick={handlePlushQuantity} className=" cursor-pointer bg-slate-200 rounded-full py-[10px] px-[12px] "><Icon icon={plus} /></span>  
                      </div>

            <button className="btn btn-primary text-white hover:bg-transparent hover:border-primary hover:text-primary rounded-sm "> <Icon className="pr-3" icon={shoppingCart} />  Add to Cart</button>              
           </div>
                  <div className="my-4 flex gap-x-4 items-center">
                      <p>Share : </p>
                       <div className="flex gap-x-4 pr-3 ">
              <Icon className=" cursor-pointer " icon={facebookSquare} />
              <Icon className=" cursor-pointer " icon={instagram} />
              <Icon className=" cursor-pointer " icon={twitter} />
              <Icon className=" cursor-pointer " icon={youtubePlay} />
              <Icon className=" cursor-pointer " icon={googlePlus} />
            </div>
           </div>
        </div>
      </div>
          </div>
          <div className=" lg:p-12 p-8 ">
              <div className="flex gap-x-4">
                    <div onClickCapture={()=>setTabArea(1)} > <h6 className={` cursor-pointer hover:text-primary border-b-2 pb-2  space-x-4 ${tabarea===1? " text-primary border-primary":"border-slate-100 "}`}>DESCRIPTION</h6></div>
                    <div onClickCapture={()=>setTabArea(2)}> <h6 className={` cursor-pointer hover:text-primary border-b-2 pb-2  space-x-4 ${tabarea===2? " text-primary border-primary":"border-slate-100 "}`}>ADDITIONAL INFO </h6>  </div>
                    <div onClickCapture={()=>setTabArea(3)}> <h6 className={` cursor-pointer hover:text-primary border-b-2 pb-2  space-x-4 ${tabarea===3? " text-primary border-primary":"border-slate-100 "}`}>REVIEWS (8)</h6>   </div>
              </div>
              <div className="my-8"> 
                <div className={`${tabarea===1? "block":"hidden"}`} >
                  <p> Aillum sunt incidunt at assumenda error deleniti pariatur. Reprehenderit asperiores dicta quos fuga ex, modi magni dignissimos nisi consequatur hic sequi enim? Rerum, sint officia quisquam voluptas aperiam exercitationem provident enim alias, quos accusamus nemo nostrum esse. Reiciendis similique dolorum aperiam voluptatibus ipsam, magnam repudiandae minus adipisicing elit. Aut sunt nihil eum voluptate, architecto beatae dignissimos nisi placeat eveniet. Quaerat expedita, laudantium eligendi laborum aut minima exercitationem earum quibusdam adipisci tenetur debitis accusamus, rerum,.</p>
              </div>
                <div className={`${tabarea===2? "block":"hidden"}`} >
                  <div class="overflow-x-auto">
  <table class="table w-[80%] ">
  
    <tbody className="border-2">

      <tr className="border-2 ">
        <td className="border-2 w-[20%] " > <span className="font-semibold ">Capacity</span> </td>
        <td className="border-2">	780gm</td>
      </tr>
      <tr className="border-2 ">
        <td className="border-2 w-[20%] " > <span className="font-semibold ">Color</span> </td>
        <td className="border-2">Black White Red</td>
      </tr>
      <tr className="border-2 ">
        <td className="border-2 w-[20%] " > <span className="font-semibold ">Water Resistant</span> </td>
        <td className="border-2">	Yes</td>
      </tr>	
      <tr className="border-2 ">
        <td className="border-2 w-[20%] " > <span className="font-semibold "> Material</span> </td>
        <td className="border-2">Artificial Leather</td>
      </tr>
  

    </tbody>
  </table>
</div>
              </div>
                <div className={`${tabarea===3? "block":"hidden"}`} >
                      <h1 className="text-2xl">8 Review For {data.name}</h1>
                      <div className="my-8">
                          <div className="flex items-center gap-x-4 lg:flex-nowrap flex-wrap">
                                <div  >
                              <img  className="w-36 rounded-full " src="https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/285984041_775266643879987_4432557406092160221_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1Nt7sbBVfbkAX-39I8Y&_nc_ht=scontent.fdac140-1.fna&oh=00_AT9OrPkpcxv1K4w2m-5wq1KbTdB6VyX5mr0Y8hPyxAlxHA&oe=62A5E14D" alt="" />
                          </div>
                          <div>
                             <div className="flex  items-center justify-between">
                               <span> <h1>Md Rifat Hossain</h1>
                                          <h2>June 9,2022</h2></span>
                                      <span><img className='w-24' src="https://i.ibb.co/6B0VPQz/four-golden-star-rating-illustration-260nw-1442679176-1.png" alt="" /></span>
                             </div>
                              <p className="mt-4"> Doloremque aperiam veritatis et  consectetur adipisicing elit. Delectus similique odio unde expedita optio facilis vel, quos recusandae ducimus odit eaque molestiae enim corporis aspernatur atque dolor, sit amet consectetur adipisicing elit. Quos, tempora? </p>
                          </div>
                        </div>
                          <div className="flex mt-8 items-center gap-x-4 lg:flex-nowrap flex-wrap">
                                <div  >
                              <img  className="w-36 rounded-full " src="https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/261880983_653550162718303_7188586080518399796_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=D_Ng1mecF7sAX9vFgwU&_nc_ht=scontent.fdac140-1.fna&oh=00_AT_IEdrHtEZz912xkC5XzKHFD19A15Q2K3CrhRQOXDUYUw&oe=62A46E80" alt="" />
                          </div>
                          <div>
                             <div className="flex  items-center justify-between">
                               <span> <h1>Mostofa R. Rahman</h1>
                                          <h2>August 7,2022</h2></span>
                                      <span><img className='w-24' src="https://i.ibb.co/6B0VPQz/four-golden-star-rating-illustration-260nw-1442679176-1.png" alt="" /></span>
                             </div>
                              <p className="mt-4"> Doloremque aperiam veritatis et  consectetur adipisicing elit. Delectus similique odio unde expedita optio facilis vel, quos recusandae ducimus odit eaque molestiae enim corporis aspernatur atque dolor, sit amet consectetur adipisicing elit. Quos, tempora? </p>
                          </div>
                        </div>
                       
                      </div>

                      <div>
                          <h1 className="text-2xl my-8">8 Review For {data.name}</h1>
                          <form onSubmit={handleReviewSubmit}>
                              <textarea name="" placeholder="Your Review" required id="" className="w-full p-4 my-4 border-[1px] rounded-md  border-gray-400 focus:outline-none focus:border-black" rows="5"></textarea>
                              <span className="flex gap-x-8"> 
                             <input placeholder="Your Name" required className="w-[50%] h-[52px] border-[1px] rounded-sm px-4  border-gray-400 focus:outline-none focus:border-black"  type="text" />
                                  <input placeholder="Your email" required className="w-[50%] h-[52px] border-[1px] rounded-sm px-4  border-gray-400 focus:outline-none focus:border-black" type="email" />
                                 

                              </span>
                               <input type="submit" className="btn mt-4 rounded-sm btn-primary text-white hover:bg-transparent hover:text-primary hover:border-primary" value="Review Submit" />
                          </form>
                      </div>
              </div>
            </div>
          </div>
          <Footer/>
      </>
  );
};

export default SingleProductDatails;
