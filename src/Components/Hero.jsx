import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="lg:col-span-1 md:col-span-1 lg:block md:block hidden bgHero">
      <div className="absolute top-6 left-6 flex items-center space-x-5">
        <Link to='/'>
          <div className="flex items-center space-x-2  ">
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
            <p className="text-lg font-[700] text-white">Rarible Wallet</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
