import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../public/login.jpg'
import { AiOutlineLogin, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../provider/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/config';
import useTitle from '../../hooks/useTitle';

const Login = () => {

      const {userLogin} = useContext(AuthContext)
      const [error, setError] = useState('')
      const navigate = useNavigate();
      const googleProvider = new GoogleAuthProvider();
       const location = useLocation();
      const from = location.state?.from?.pathname || '/'
      const auth = getAuth(app);
      useTitle('Login')

      const handleLogin=event=>{
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);
      
            userLogin(email, password)
            .then(result=>{
                  const loggedUser= result.user;
                  console.log(loggedUser);
                  // navigate('/')
                  navigate(from, {replace:true})
      
            })
            .catch(error=>{
                  setError(error.message)
            })
      
      
      
         }


         const handleGoogleSignIn = ()=>{
            signInWithPopup(auth, googleProvider)
            .then(result=>{
                  const user= result.user;
                  console.log(user);
                  navigate('/')
                  navigate(from, {replace:true})
            })
            .then(error=>{
                  setError(error.message)
            })


         }
      




      return (
          <>
          
          <div className="text-center">
        <h1 className=" heading mt-24">Login now!!</h1>
      </div>

      <div className="md:flex justify-between my-container items-center">
        <div className='md:max-w-[550px]'>
          <img src={login} alt="" />
        </div>

        <div className="hero min-h-screen md:max-w-[550px]  mx-auto p-20">
          <div className="hero-content flex-col ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body my-container">
               
               
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
                <p className='text-yellow-600'>{error}</p>
                <div className="form-control mt-6">
                  <button className="btn btn-success tracking-widest text-white">
                    Login now{" "}
                    <AiOutlineLogin className="ml-8 text-xl font-bold"></AiOutlineLogin>
                  </button>
                </div>
                <p>
                  Are you new?
                  <Link to="/register">
                    <button className="btn btn-link inline-block  ">Go to Register</button>
                  </Link>
                </p>
                <div className="divider">OR</div>
               <div className="flex items-center justify-center">
               <button onClick={handleGoogleSignIn} className="btn  btn-circle btn-outline"><FcGoogle className="text-xl"></FcGoogle></button>
               </div>
              </form>
            </div>
          </div>
        </div>
      </div>
          
          </>
      );
};

export default Login;