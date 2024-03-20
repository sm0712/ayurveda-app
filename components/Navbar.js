"use client";
import Link from "next/link";
import Image from "next/image";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const toggleNavbar = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="bg-[#86A789]">
      <nav className=" flex justify-between items-center mx-auto">
        <div>
          <Link href={"/"}>
            <Image
              className="py-3"
              src="/avlogo.png"
              width={500}
              height={90}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="nav-links md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex">
          <ul class="flex md:flex-row flex-col md:items-center md:gap-[6vw] gap-5">
            <li>
              <Link
                href={"/about"}
                className=" text-2xl text-[#F8FAE5] font-bold hover:text-gray-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/Services"}
                className=" text-2xl text-[#F8FAE5] font-bold hover:text-gray-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={"/products"}
                className=" text-2xl text-[#F8FAE5] font-bold hover:text-gray-200"
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
        <Link href={"/login"} className=" text-xl text-[#F8FAE5] font-bold">
          <button className="bg-[#F8FAE5] mr-20 px-10 py-6 text-center text-gray-600 rounded-full hover:bg-slate-300">
            Sign In
          </button>
        </Link>

        {isClicked ? (
          <FiX
            className="text-gray-100 text-3xl mr-6 cursor-pointer md:hidden"
            onClick={toggleNavbar}
          />
        ) : (
          <FiAlignJustify
            className="text-gray-100 text-3xl cursor-pointer mr-6 md:hidden"
            onClick={toggleNavbar}
          />
        )}

        {isClicked && (
          <div className="md:hidden px-2 pb-3 space-y-1 sm:px-3">
            <ul>
              <li>
                <Link
                  href={"/about"}
                  className=" text-2xl block text-[#F8FAE5] font-bold hover:text-gray-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/Services"}
                  className=" text-2xl block text-[#F8FAE5] font-bold hover:text-gray-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={"/products"}
                  className=" block text-2xl text-[#F8FAE5] font-bold hover:text-gray-200"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
