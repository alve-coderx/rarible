import React, { useState } from "react";
import ImportWallet from "./ImportWallet";
import metamask from "../assets/metamask.png";
import walletCn from "../assets/walletCn.svg";
import coinbase from "../assets/coinbase.svg";
import torus from "../assets/torus.svg";
import portis from "../assets/portis.svg";
import ether from "../assets/ether.svg";
import Logo from "./Logo";
import { Link } from "react-router-dom";


const Main = () => {
  const [showMore, setShowMore] = useState(false);
  const [modal, setModal] = useState(false);

  const wallets = [
    { name: "MetaMask", id: 2, img: metamask },
    { name: "WalletConnect", id: 3, img: walletCn },
    { name: "Coinbase Wallet", id: 4, img: coinbase },
  ];

  const moreWallets = [
    { name: "Torus", id: 1, img: torus },
    { name: "Portis", id: 2, img: portis },
    { name: "MyEther Wallet", id: 3, img: ether },
  ];

  return (
    <div className="lg:px-24 lg:col-span-4 md:col-span-4  md:px-24 px-3 pt-3 pb-10 lg:py-36 md:py-36 h-[105vh] overflow-auto bg-white">
      <Link to="/">
        <div className="lg:hidden md:hidden pt-5 pb-12">
          <Logo />
        </div>
      </Link>
      <div>
        <p className="text-[2.5rem] font-[700] text-black">Connect wallet </p>
        <p className="text-[1rem] text-[#9697a1] font-[600]">
          Choose how you want to connect. There are several wallet providers.
        </p>
      </div>
      <div className=" lg:w-[30rem] md:w-[30rem] mt-5">
        <p className="text-[.9rem] text-[#9697a1] font-[600] mb-4">Popular</p>
        <div>
          {wallets.map((wallet) => (
            <button
              onClick={() => setModal((prev) => !prev)}
              key={wallet.id}
              className="border w-full border-gray-200 rounded-2xl px-5 py-3 mb-4 flex items-center space-x-5"
            >
              <img src={wallet.img} className="w-8 " alt="wallet" />
              <p className="text-[1rem] text-black font-[600]">{wallet.name}</p>
            </button>
          ))}
          {modal && <ImportWallet setModal={setModal} />}
        </div>
        {showMore && (
          <div className="mt-5">
            <p className="text-[.9rem] text-[#9697a1] font-[600] mb-4">More</p>

            <div>
              {moreWallets.map((wallet) => (
                <div
                  key={wallet.id}
                  className="border border-gray-200 rounded-2xl px-5 py-3 mb-4 flex items-center space-x-5"
                >
                  <img src={wallet.img} className="w-8 " alt="wallet" />
                  <p className="text-[1rem] text-black font-[600]">
                    {wallet.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div
          onClick={() => setShowMore((prev) => !prev)}
          className="border  border-gray-200 rounded-2xl px-5 py-3 mb-4 cursor-pointer  text-center"
        >
          <p className="text-[1rem] text-black font-[600]">
            {showMore ? "Show Less" : "Show More"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
