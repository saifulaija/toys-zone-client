import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineToys } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleLogOut = () => {
    logOut();
  };

  const navItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/blog">AllToys</NavLink>
      </li>
      <li>
            <NavLink to="/addToy">AddaToy</NavLink>
          </li>

      {user ? (
        <>
          {" "}
          
          <li>
            {" "}
            <NavLink onClick={handleLogOut} to="/login">
              Logout
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/login">Mytoys</NavLink>
          </li>
          <img
            className="w-[40px] rounded-full"
            src={user.photoURL}
            alt=""
            title={user?.displayName}
          />{" "}
        </>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="w-full  bg-[#74d2e7]">
      <div className=" my_container flex justify-between items-center p-8  ">
        <div className="flex items-center">
          <MdOutlineToys className="text-yellow-700 text-[40px] "></MdOutlineToys>
          <h1 className="text-yellow-700 font-serif  font-bold uppercase tracking-wider md:text-4xl">
            Toys Zone
          </h1>
        </div>

        <ul className=" hidden md:flex space-x-4">{navItem}</ul>

        <div onClick={handleNav} className="block md:hidden">
          {navOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <ul
          className={
            navOpen
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="text-white  font-bold uppercase tracking-wider text-xl">
            Toys Zone
          </h1>
          {navItem}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
