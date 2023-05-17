import React from "react";
import { Link } from "react-router-dom";
import login from "../../../public/login.jpg";
import { AiOutlineLogin, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";


const Register = () => {
  return (
    <>
      <div className="text-center">
        <h1 className=" heading mt-24">Register now!</h1>
      </div>

      <div className="md:flex justify-between items-center">
        <div>
          <img src={login} alt="" />
        </div>

        <div className="hero min-h-screen container mx-auto p-20">
          <div className="hero-content flex-col ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    required
                    name="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    name="photo"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                    className="input input-bordered"
                  />
                  <AiFillEyeInvisible className="absolute ml-72 top-14"></AiFillEyeInvisible>
                </div>
                {/* <p className='text-yellow-600'>{error}</p> */}
                <div className="form-control mt-6">
                  <button className="btn btn-success tracking-widest text-white">
                    Register now{" "}
                    <AiOutlineLogin className="ml-8 text-xl font-bold"></AiOutlineLogin>
                  </button>
                </div>
                <p>
                  Already have you account?
                  <Link to="/login">
                    <button className="btn btn-link  ">Go to login</button>
                  </Link>
                </p>
                <div className="divider">OR</div>
               <div className="flex items-center justify-center">
               <button className="btn  btn-circle btn-outline"><FcGoogle className="text-xl"></FcGoogle></button>
               </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
