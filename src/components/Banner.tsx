import { Button } from "@mui/material";
import Image from "next/image";

const Banner = (props: any) => {
  return (
    <div className="h-80 bg-slate-200 w-full relative flex flex-col items-center justify-center">
      <figure className="w-full h-80 absolute -z-1">
        <img
          className="h-full w-full object-cover opacity-60"
          alt="Background Shoe"
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
      </figure>
      <h1 className="font-bold text-center text-4xl lg:text-6xl z-10 tracking-wider">
        Welcome to Sneaker Vault
      </h1>
      <h2 className=" text-center z-10 mt-10 font-semibold text-xl lg:text-2xl">
        One stop shop for all Collectors and Sneakerheads
      </h2>
      <button className=" z-10 bg-blue-600 text-bold text-white text-lg py-1.5 px-4 rounded-md mt-5 hover:opacity-80 active:opacity-100">
        Browse Collection
      </button>
    </div>
  );
};

export default Banner;
