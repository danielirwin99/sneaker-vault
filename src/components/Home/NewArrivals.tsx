import { Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { data } from "../../request/data";

const NewArrivals = () => {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <section className="relative flex justify-center items-center flex-col mt-5 max-w-5xl mx-auto mb-5 ">
      <div className="absolute border-b border-gray-400 w-[90vw] lg:w-full -bottom-5 " />
      <h1 className="text-3xl lg:text-4xl font-bold tracking-wider underline">
        Our Top Picks
      </h1>
      <div className="mt-10 flex flex-col items-center">
        <ul className="grid grid-cols-2 lg:grid-cols-4 mx-8 gap-5">
          {data.map((sneaker) => (
            <li className="flex flex-col text-center mx-5" key={sneaker.id}>
              <Link href={`/sneaker/${sneaker.id}`}>
                <h1 className="my-5 font-bold text-lg text-start lg:text-center h-10">
                  {sneaker.name}
                </h1>
                <figure className="flex items-end mt-10 transition-all duration-150 hover:scale-110 ease-in">
                  <img
                    className="lg:h-36 h-40  object-contain"
                    src={sneaker.image}
                    alt="Sneaker Items"
                  />
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewArrivals;
