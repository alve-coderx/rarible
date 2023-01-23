import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  AiOutlineClose,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { BsTelegram, BsTwitter } from "react-icons/bs";
import { AppleIcon, PlayIcon } from "./CartIcon";

const MenuItem = ({ title, icon }) => {
  return (
    <div className="flex items-center text-black">
      <p className="text-3xl font-[700]">{title}</p>
      {icon && (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          width="25"
          height="25"
          xlmns="http://www.w3.org/2000/svg"
          class="sc-bdvvtL sc-iCfMLu coxBnO sc-bzPmhk lBtOA"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.46967 9.46967C7.76256 9.17678 8.23744 9.17678 8.53033 9.46967L12 12.9393L15.4697 9.46967C15.7626 9.17678 16.2374 9.17678 16.5303 9.46967C16.8232 9.76256 16.8232 10.2374 16.5303 10.5303L12.5303 14.5303C12.2374 14.8232 11.7626 14.8232 11.4697 14.5303L7.46967 10.5303C7.17678 10.2374 7.17678 9.76256 7.46967 9.46967Z"
            fill="currentColor"
          ></path>
        </svg>
      )}
    </div>
  );
};

export default function Menu({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex justify-end">
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-black hover:text-gray-500 outline-0"
                            onClick={() => setOpen(false)}
                          >
                            <AiOutlineClose />
                            {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
                          </button>
                        </div>
                      </div>
                      <div className="absolute top-5 flex flex-col items-start space-y-2">
                        <MenuItem title="Explore" icon={true} />
                        <MenuItem title="Create" icon={true} />
                        <MenuItem title="Blog" icon={false} />
                        <MenuItem title="How it works" icon={false} />
                        <MenuItem title="Jobs" icon={false} />
                        <MenuItem title="Help Center" icon={false} />
                      </div>
                      <div className="mt-96">
                        <button className="bg-[#27272f] text-white w-full rounded-xl p-3 font-[600] text-sm">
                          Connect Wallet
                        </button>
                        <div className="flex items-center space-x-4 mt-6">
                          <button className="bg-[#EDEBEE] flex items-center justify-around w-full text-md rounded-xl p-2 text-black">
                            <AppleIcon/>  Apple Store
                          </button>
                          <button className="bg-[#EDEBEE] flex items-center justify-around w-full text-md rounded-xl p-2 text-black">
                           <PlayIcon/> Google Play
                          </button>
                        </div>
                      </div>
                      <div className="border-t mt-10 text-xl text-black flex items-center justify-between space-x-10 px-5 pt-5">
                        <FaDiscord/>
                        <AiFillYoutube/>
                        <AiOutlineInstagram/>
                        <BsTelegram/>
                        <BsTwitter/>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
