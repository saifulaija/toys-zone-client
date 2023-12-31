import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../../public/login.jpg";
import { AiOutlineLogin, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/config";
import useTitle from "../../hooks/useTitle";

const auth = getAuth(app);

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [state, setState] = useState();

  useTitle("Register");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        logOut();
        setError("");
        form.reset();

        navigate("/login");
        updateProfile(auth.currentUser, {
          displayName,
          photoURL,
        })
          .then(() => {
            toast.success("Create Account successful");
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
    console.log(error);
  };

  const handleHideShow = () => {
    setState((prevState) => !prevState);
  };

  return (
    <>
      <div className="text-center">
        <h1 className=" heading mt-24">Register now!</h1>
      </div>

      <div className="md:flex justify-between items-center">
        <div className="md:max-w-xl min-h-screen md:container mx-auto p-2 md:p-8">
          <div className=" flex-col ">
            <div className="card flex-shrink-0 w-full md:max-w-4xl border p-2  ">
              <form onSubmit={handleRegister} className=" md:w-full">
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
                    type={state ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    required
                    className="input input-bordered"
                  />
                  <AiFillEyeInvisible
                    onClick={handleHideShow}
                    className="absolute ml-72 md:ml-[400px] top-14"
                  ></AiFillEyeInvisible>
                </div>
                <p className="text-yellow-800">{error}</p>
                <div className="form-control mt-6">
                  <button className="text-white bg-gray-500 px-3 py-1 rounded-md hover:bg-gray-800 mr-2">
                    Register now{" "}
                    <AiOutlineLogin className="ml-8 inline-block text-xl font-bold"></AiOutlineLogin>
                  </button>
                </div>
                <p className="text-gray-100">
                  Already have you account?
                  <Link to="/login">
                    <button className="btn btn-link text-gray-300  ">Go to login</button>
                  </Link>
                </p>
                <div className="divider text-gray-200">OR</div>
                <div className="flex items-center justify-center">
                  <button className="btn  btn-circle btn-outline">
                    <FcGoogle className="text-xl text-white"></FcGoogle>
                  </button>
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
