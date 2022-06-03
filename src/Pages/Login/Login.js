import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/fa/facebook";
import { google } from "react-icons-kit/fa/google";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoadingNE from "../../Components/Loading/LoadingNE";
import {
    useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Login = () => {

  const { register,formState: { errors },handleSubmit, reset} = useForm();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, suuser, suloading, suerror] = useSignInWithEmailAndPassword(auth);
  const [signInWithFacebook, fbuser, fbloading, fberror] = useSignInWithFacebook(auth);
  const [sendPasswordResetEmail, sending, fperror] = useSendPasswordResetEmail(
    auth);
  const [forgotpasswordToggle, setForgotPasswordToggle] = useState(false);
  const navigate = useNavigate();
  const location =useLocation()

 
  const form = location.state?.from?.pathname || "/"
  
  useEffect(() => {

    if (user || suuser || fbuser) {
    navigate(form, {replace:true});
  }
  },[user || suuser || fbuser,form,navigate])

   if (loading || suloading || fbuser) {
    return <LoadingNE />;
  }
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    reset();
  };

    const handleForgetPassword = (e) => {
        e.preventDefault()
        sendPasswordResetEmail(e.target.email.value)
        toast.success("Check Yout Mail")
      

  };

  return (
      <>
          {
             forgotpasswordToggle===false? <>
           <div className="lg:px-16 px-4 ">
        <h1 className="text-3xl lg:py-12 py-16 hidden lg:block ">LogIn</h1>
        <div
          className=" mt-12 lg:mt-0  rounded-sm lg:w-[50%] w-[95%] mb-12 px-4 lg:px-12 lg:py-8 py-6 mx-auto"
          style={{ boxShadow: "1px 1px 10px 5px rgba(128, 128, 128, 0.304) " }}
        >
          <h1 className="text-3xl pb-8">LogIn</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
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

            <div className="flex justify-between ">
              <span className="flex items-center  ">
                <label htmlFor="checkbox" className="order-2 pl-2">
                  Remember me
                </label>
                <input
                  className="mt-1 w-4 h-4"
                  style={{ accentColor: "red", fontSize: "30px" }}
                  type="checkbox"
                  id="checkbox"
                />
              </span>
              <span className=" cursor-pointer hover:underline ">
                <span
                  onClick={() => setForgotPasswordToggle(!forgotpasswordToggle)}
                >
                  {" "}
                  Forgot password?
                </span>
              </span>
            </div>

            <input
              className="btn btn-primary rounded-sm hover:bg-transparent hover:text-primary text-white"
              type="submit"
              value="Login"
            />
          </form>
          <div class="divider">OR</div>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => signInWithFacebook()}
              className=" btn  hover:bg-[#3b5998] bg-[#3b5998] w-[150px] text-white rounded-md"
            >
              <Icon className="pr-2" icon={facebook} /> Facebook
            </button>
            <button
              onClick={() => signInWithGoogle()}
              className=" w-[150px] btn bg-[#d85040] text-white hover:bg-[#d85040]"
            >
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
          </>: <>
          <div className="lg:px-16 px-4 ">
          <h1 className="text-3xl lg:py-12 py-16 hidden lg:block ">
            Forget Password
          </h1>
          <div
            className=" mt-12 lg:mt-0  rounded-sm lg:w-[50%] w-[95%] mb-12 px-4 lg:px-12 lg:py-8 py-6 mx-auto"
            style={{
              boxShadow: "1px 1px 10px 5px rgba(128, 128, 128, 0.304) ",
            }}
          >
            <h1 className="text-3xl pb-8">Reset Password</h1>

            <form
              onSubmit={handleForgetPassword}
              className="flex flex-col gap-4"
            >
              <div className="form-control ">
                <input
                  className="border-2 focus:outline-none lg:w-[460px] h-[50px] px-4 "
                  placeholder="Your Email"
                                          type="email"
                                          name="email"
                                          required
                />
              </div>

              <input
                className="btn btn-primary rounded-sm hover:bg-transparent hover:text-primary text-white"
                type="submit"
                value="Rest Password"
              />
            </form>
            <span className=" cursor-pointer hover:underline hover:text-primay ">
              <span
                onClick={() => setForgotPasswordToggle(!forgotpasswordToggle)}
              >
                {" "}
                Login
              </span>
            </span>
          </div>
        </div>
          </>
          }
          
     
     
         
     
    </>
  );
};

export default Login;
