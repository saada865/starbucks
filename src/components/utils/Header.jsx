import React from "react";
import Logo from "../assets/logo.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="  w-full">
      <div className=" px-10 py-5 flex flex-row justify-between items-center ">
        <div className="flex flex-row gap-x-7 items-center">
          <img src={Logo} alt="" className="h-14 w-14 rounded-full" />
          <ul className="flex flex-row space-x-7">
            <a href="">
              <li className=" font-bold text-sm tracking-widest">
                <Link to="/menu">MENU</Link>
              </li>
            </a>
            <a href="">
              <li className="font-bold text-sm tracking-widest">
                <Link to="/">REWARDS</Link>
              </li>
            </a>
            <a href="">
              <li className="font-bold text-sm tracking-widest">
                <Link to="/gift">GIFT CARDS</Link>
              </li>
            </a>
          </ul>
        </div>
        <div className="flex flex-row justify-between space-x-14 ">
          <div className="flex flex-row space-x-2 items-center">
            <FaLocationDot />
            <p className=" text-sm font-semibold">Find a store</p>
          </div>
          <div className="space-x-4">
            <a
              href=""
              className="border-[1px] border-black rounded-2xl py-2 px-4 text-sm font-semibold"
            >
              Sign in
            </a>
            <a
              href=""
              className="bg-black py-2 px-4 rounded-2xl text-white text-sm font-semibold"
            >
              Join now
            </a>
          </div>
        </div>
      </div>
      <hr className=" shadow-gray-200 shadow-sm" />
    </div>
  );
};

export default Header;
