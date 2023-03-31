import Sidebar from "@/components/Sidebar";
import React from "react";

const TopSellers = () => {
  return (
    <>
      <Sidebar>
        <div className="h-[calc(100vh-80px)]">
          <div className="text-center mt-10 text-4xl font-bold">
            <h1>Top Sellers</h1>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default TopSellers;
