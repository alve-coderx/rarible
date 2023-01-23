import React from "react";
import { AddIcon, CartIcon } from "../Components/CartIcon";
import Header from "../Components/Header";
import Logo from "../Components/Logo";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="lg:px-8 md:px-8 pr-4 py-5 bg-white flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <div className="lg:flex md:flex hidden">
          <Logo />
        </div>
        <div className="lg:hidden md:hidden block ">
          <div className="bg-[#FEDA03] rounded-lg p-3">
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.7927 3.74115C18.7927 5.56401 17.7277 6.47067 16.5308 6.78561C17.9633 7.21508 19 8.38897 19 10.25V13.6667H13.5337V10.4218C13.5337 9.42924 12.9494 9.0284 11.9504 9.0284H5.46627V13.6667H0V0H12.9871C16.248 0 18.7927 0.706239 18.7927 3.74115ZM5.46871 3.81832H12.8585V3.81891C12.8695 3.81852 12.8806 3.81832 12.8917 3.81832C13.3998 3.81832 13.8118 4.23545 13.8118 4.75C13.8118 5.26455 13.3998 5.68168 12.8917 5.68168C12.8806 5.68168 12.8695 5.68148 12.8585 5.68109V5.68168H5.46871V3.81832Z"
                fill="black"
              ></path>
            </svg>
          </div>
        </div>
        <BsSearch className="text-black text-2xl lg:hidden md:hidden block " />
        <div className="lg:flex md:flex hidden relative">
          <input
            placeholder="Search"
            className="rounded-xl md:w-40 lg:w-96 px-5 py-3 w-96 bg-[#EDEBEE]"
          />
          <p className="px-2 py-1 rounded-lg text-xs absolute right-2 bg-white top-3">
            /
          </p>
        </div>
        <div className="lg:flex md:flex hidden items-center space-x-4 primaryText font-[600]">
          <p>Explore</p>
          <p>Create</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <p className="flex items-center space-x-2 hidden ">
          <AddIcon />
          <span className="gradeTxt text-lg font-[600]">Rewards</span>
        </p>
        <Link to="/contact">
          <button className="bg-[#27272f] text-white w-40 rounded-xl p-3 font-[600] text-sm">
            Connect Wallet
          </button>
        </Link>
        <div className="hidden">
          <CartIcon />
        </div>
        {/* <GiHamburgerMenu
          onClick={() => setOpen((prev) => !prev)}
          className="text-black text-2xl lg:hidden md:hidden block cursor-pointer"
        />
        {open && <Menu open={open} setOpen={setOpen} />} */}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
};

export default Home;
