import Link from "next/link";
import react from "react";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";

const Navbar = (props: any) => {
  return (
    <nav className="sticky z-[999] top-0 w-full h-20 bg-[#111] flex items-center justify-between px-8">
      <div className="flex items-center justify-center space-x-5 ">
        <Link className="flex items-center justify-center" href="/">
          <figure className="lg:hidden w-[70px] h-14 ">
            <img className="w-full h-full rounded-3xl"
              src="https://scontent.fsyd8-1.fna.fbcdn.net/v/t39.30808-6/300376092_613162083844217_4766963332407012283_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=61B5ok25iR0AX-FaJCx&_nc_ht=scontent.fsyd8-1.fna&oh=00_AfAbuC3YlUteqMjrZuW5Xz8jzjH8TPR3DQRU3_Vmya70mg&oe=642A2D35"
              alt=""
            />
          </figure>
          <h1 className="text-white hidden lg:block text-2xl mr-5 lg:mr-0 lg:text-4xl font-bold">
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
