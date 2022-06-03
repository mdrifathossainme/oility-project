import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/fa/facebook";
import { google } from "react-icons-kit/fa/google";
import { Link, useNavigate } from "react-router-dom";
import LoadingNE from "../../Components/Loading/LoadingNE"
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


const Login = () => {


     const { register,formState: { errors },handleSubmit,reset,} = useForm();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
  signInWithEmailAndPassword,suuser,suloading,suerror] = useSignInWithEmailAndPassword(auth);
    const [signInWithFacebook, fbuser, fbloading, fberror] = useSignInWithFacebook(auth);

    const [customerror, setCustError] = useState('')

    const navigate=useNavigate()

    if (loading||suloading||fbuser) {
    return <LoadingNE/>
    }
    
    if (user||suuser||fbuser) {
        navigate('/')
    }


    const onSubmit = async (data) => {
            setCustError("")
            await signInWithEmailAndPassword(data.email, data.password)
           reset(); 
    
    
  };  
    return (
        <div className="lg:px-16 px-4 ">
      <h1 className="text-3xl lg:py-12 py-8">Register</h1>
      <div
        className=" rounded-sm w-[50%] mb-12 lg:px-12 py-8 mx-auto"
        style={{ boxShadow: "1px 1px 10px 5px rgba(128, 128, 128, 0.304) " }}
      >
        <h1 className="text-3xl pb-8">Create An Account</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        
          <div className="form-control ">
            <input
              {...register("email", {
                required: true,

                pattern: {
                  value:
                    /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
                  message: "Email is not valid",
                },
              })}
              className="border-2 focus:outline-none w-[460px] h-[50px] px-4 "
              placeholder="Your Email"
              type="email"
            />

            <label class="label p-0">
              <span className="label-text-alt">
                {errors.email?.type === "required" && (
                  <p className="text-red-500 text-[12px] font-bold">
                    Email required *
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="text-red-500 text-[12px] font-bold">
                    {errors.email.message} *
                  </p>
                )}
              </span>
            </label>
          </div>
          <div className="form-control ">
                      <input
      
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Minimun Use 8 Charecter",
                },
              })}
                           
                    
                         
              className="border-2 focus:outline-none w-[460px] h-[50px] px-4 "
              placeholder="Your Password"
              type="password"
            />

             <label class="label p-0">
              <span className="label-text-alt">
                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-[12px] font-bold">
                    Password required *
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 text-[12px] font-bold">
                    {errors.password.message} *
                  </p>
                )}
              </span>
            </label>
          </div>
          

          <input
            className="btn btn-primary rounded-sm hover:bg-transparent hover:text-primary text-white"
            type="submit"
            value="Login"
          />
        </form>
        <div class="divider">OR</div>
        <div className="flex justify-center gap-4">
          <button onClick={()=>signInWithFacebook()} className=" btn  hover:bg-[#3b5998] bg-[#3b5998] w-[150px] text-white rounded-md">
            <Icon className="pr-2" icon={facebook} /> Facebook
          </button>
          <button onClick={()=>signInWithGoogle()} className=" w-[150px] btn bg-[#d85040] text-white hover:bg-[#d85040]">
           
            <Icon className="pr-2 " icon={google} /> Google
          </button>
        </div>
        <p className="text-center my-4">
        Ia am New In Oility 
         
                    <span className="font-bold pl-2">
            <Link to="/signup" className="hover:text-primary">
              Resigter
            </Link>
          </span>{" "}
        </p>
      </div>
    </div>
    );
};

export default Login;