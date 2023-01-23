import React, { useState } from "react";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [counter, setCounter] = useState(0);

  const slides = [slide1, slide2, slide3, slide4];

  const handleClick1 = () => {
    // Counter state is incremented
    if (counter > 2) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    if (counter === 0) {
      setCounter(2);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="px-6">
      <div className="bg-[#EDEBEE]  rounded-3xl flex ">
        <div className="w-full  flex lg:flex-row md:flex-row flex-col items-center justify-around ">
          <div className="flex flex-col lg:items-start md:items-start items-center space-y-6  lg:w-[30rem] md:w-[25rem] p-5">
            <p className="lg:text-[3rem] text-[2rem] font-[700] text-black">
              0% Fees
            </p>
            <p className="text-gray-400 font-[600] lg:text-xl text-md lg:text-start md:text-start text-center">
              Buy aggregated NFTs from 5 blockchains. Lock your $RARI — unlock
              0% fees.
            </p>
            <div className="flex w-full items-center space-x-8 ">
              <button className="bg-white lg:w-40 md:w-40  rounded-xl lg:px-8 lg:py-3 px-5 py-2 lg:text-xl md:text-xl w-full">
                Explore
              </button>
              <button className="bg-[#27272f] lg:w-40 md:w-40  text-white rounded-xl lg:px-8 lg:py-3 px-5 py-2 lg:text-xl md:text-xl w-full">
                Sell
              </button>
            </div>
          </div>
          <div className="relative parent p-5 flex flex-col space-y-5  items-center">
            <div className="flex child items-center absolute top-64 justify-between w-full left-0">
              <button
                onClick={handleClick2}
                className="text-white bg-[#191c1f] border-[#191c1f] drop-shadow-xl p-2 text-2xl rounded-xl"
              >
                <MdKeyboardArrowLeft />
              </button>
              <button
                onClick={handleClick1}
                className="text-white bg-[#191c1f] border-[#191c1f] drop-shadow-xl p-2 text-2xl rounded-xl"
              >
                <MdKeyboardArrowRight />
              </button>
            </div>
            <img
              src={slides[counter]}
              alt="slide1"
              className="w-[32rem] rounded-xl "
            />
            <div className="bg-gray-300 w-80 h-1 rounded-xl relative">
              {counter === 0 ? (
                <div className="w-20 h-1 rounded-xl bg-gray-700 absolute left-0"></div>
              ) : counter === 1 ? (
                <div className="w-20 h-1 rounded-xl bg-gray-700 absolute left-[5rem]"></div>
              ) : counter === 2 ? (
                <div className="w-20 h-1 rounded-xl bg-gray-700 absolute left-[10rem]"></div>
              ) : counter === 3 ? (
                <div className="w-20 h-1 rounded-xl bg-gray-700 absolute left-[15rem]"></div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
