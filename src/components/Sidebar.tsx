import React from "react";

const Sidebar = (props: any) => {
  return (
    <div className="hidden lg:flex relative h-[calc(80vh)] w-1/4 lg:w-1/5 bg-slate-200 ml-7 my-10 rounded-md">
      <div className="absolute w-full h-6 bg-black rounded-t-md"></div>
    </div>
  );
};

export default Sidebar;
