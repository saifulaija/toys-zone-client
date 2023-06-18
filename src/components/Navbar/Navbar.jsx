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
        <NavLink to="/allToys">AllToys</NavLink>
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
            <NavLink to="/myToys">Mytoys</NavLink>
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
    <div className="w-full h-[80px] sticky top-0 z-30 border-[1px] bg-[#669bbc]">
      <div className=" my_container flex justify-between items-center p-2 ">
        <div className="flex items-center font-mono">
          <MdOutlineToys className="text-[#e15f5f] text-[40px] "></MdOutlineToys>
          <h1 className="text-[#e15f5f] font-mono  font-bold uppercase md:text-4xl">
            Toys Zone
          </h1>
        </div>

        <ul className="  p-2 border-[1px] border-[#e15f5f] rounded-2xl hidden md:flex space-x-4">{navItem}</ul>

        <div onClick={handleNav} className="block md:hidden">
          {navOpen ? (
            <AiOutlineClose size={20} className="text-white" />
          ) : (
            <AiOutlineMenu size={20} className="text-white" />
          )}
        </div>

        <ul
          className={
            navOpen
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="text-yellow-700  font-bold uppercase tracking-wider text-xl">
            Toys Zone
          </h1>
          {navItem}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
