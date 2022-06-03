import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/fa/facebook";
import { google } from "react-icons-kit/fa/google";
import { Link, useNavigate } from "react-router-dom";
import LoadingNE from "../../Components/Loading/LoadingNE"
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


const Signup = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    const [createUserWithEmailAndPassword, emailPasswordUser, emailPasswordLoading, emailPasswordError,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, uperror] = useUpdateProfile(auth);
    const [signInWithFacebook, fbuser, fbloading, fberror] = useSignInWithFacebook(auth);

    const [customerror, setCustError] = useState('')

    const navigate=useNavigate()

    if (loading||emailPasswordLoading||fbuser) {
    return <LoadingNE/>
    }
    
    if (user||emailPasswordUser||fbuser) {
        navigate('/')
    }


    const onSubmit = async (data) => {

        if (data.password !== data.confirmpassword) {
        setCustError("Pssword Don't Match")
        }
        else {
            setCustError("")
            
            await createUserWithEmailAndPassword(data.email, data.password)
            await updateProfile({displayName:data.displayName})

           reset(); 
        }
    
    
  };

  return (
    <div className="lg:px-16 px-4 ">
      <h1 className="text-3xl lg:py-12 py-8 hidden lg:block">Register</h1>
      <div
        className=" mt-12 lg:mt-0 rounded-sm lg:w-[50%] w-[95%] px-4 mb-12 lg:px-12 py-8 mx-auto"
        style={{ boxShadow: "1px 1px 10px 5px rgba(128, 128, 128, 0.304) " }}
      >
        <h1 className="text-3xl pb-8">Create An Account</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="form-control ">
            <input
              {...register("displayName", {
                required: true,
                maxLength: {
                  value: 20,
                  message: "Max Length 20 Character",
                },

                pattern: {
                  value: /^([^0-9]*)$/,
                  message: "Number Don't Accepted ",
                },
              })}
              className="border-2 focus:outline-none lg:w-[460px] h-[50px] px-4 "
              placeholder="Your Name"
              type="text"
              id=""
            />
            <label class="label p-0">
              {errors.displayName?.type === "required" && (
                <span className="text-red-500 text-[12px] font-bold">
                  <p>Name Required *</p>
                </span>
              )}
              {errors.displayName?.type === "maxLength" && (
                <span className="text-red-500 text-[12px] font-bold">
                  <p>{errors.displayName?.message} *</p>
                </span>
              )}
              {errors.displayName?.type === "pattern" && (
                <span className="text-red-500 text-[12px] font-bold">
                  <p>{errors.displayName?.message} *</p>
                </span>
              )}
            </label>
          </div>
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
              className="border-2 focus:outline-none lg:w-[460px] h-[50px] px-4 "
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
                           
                    
                         
              className="border-2 focus:outline-none lg:w-[460px] h-[50px] px-4 "
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
          <div className="form-control ">
             <input
                   
              {...register("confirmpassword", {
                required: true,
              })}
                          
            
              className="border-2 focus:outline-none lg:w-[460px] h-[50px] px-4 "
              placeholder="Confirm Password"
              type="password"
            />

            <label class="label p-0">
              <span className="label-text-alt">
                {errors.confirmpassword?.type === "required" && (
                  <p className="text-red-500 text-[12px] font-bold">
                    Confirm Password required *
                  </p>
                )}
                {customerror?<p className="text-red-500 text-[12px] font-bold">
                    {customerror}
                  </p> :""
                }
              </span>
            </label>
          </div>

          <span className="flex items-center  ">
            {" "}
            <label htmlFor="checkbox" className="order-2 pl-2">
              I agree to terms & Policy.
            </label>
            <input
              className="mt-1 w-4 h-4"
              style={{ accentColor: "red", fontSize: "30px" }}
              type="checkbox"
              id="checkbox"
            />
          </span>

          <input
            className="btn btn-primary rounded-sm hover:bg-transparent hover:text-primary text-white"
            type="submit"
            value="Register"
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
          Already have an account?{" "}
          <span className="font-bold">
            <Link to="/login" className="hover:text-primary">
              Log in
            </Link>
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
