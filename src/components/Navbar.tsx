import Link from "next/link";
import react from "react";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";

const Navbar = (props: any) => {
  return (
    <nav className="sticky z-[999] top-0 w-full h-24 bg-[#111] flex items-center justify-between px-8">
      <div className="flex items-center justify-center space-x-5 ">
        <Link href="/">
          <h1 className="text-white text-2xl mr-5 lg:mr-0 lg:text-4xl font-bold">
            Sneaker Vault
          </h1>
        </Link>
      </div>
      <div className="flex ] items-center space-x-14 pt-2 lg:mr-10 transition-all duration-300 ease-in">
        <Link href="/sellers">
          <h1 className="navBar__headers">Top Sellers</h1>
        </Link>
        <Link href="/arrivals">
          <h1 className="navBar__headers">New Arrivals</h1>
        </Link>
        <Link href="/sales">
          <h1 className="navBar__headers">On Sale</h1>
        </Link>
        <Link href="/about">
          <h1 className="navBar__headers hidden lg:inline">About</h1>
        </Link>
      </div>
      <div>
        <ul className="flex space-x-6">
          <li className="hidden md:inline">
            <button>
              <AiOutlineSearch className="h-8 w-8 text-white" />
            </button>
          </li>
          <li>
            <Link href="/cart">
              <BiShoppingBag className="h-8 w-8 text-white" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
