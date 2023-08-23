import React from "react";

const ButtonOutline = ({ children } : any) => {
  return (
    <button className="h-[48px] text-[#0F6] font-semibold tracking-wide px-[51px] py-3.5 text-base font-Monts sm:px-8 hover:text-[#07091D] bg-white-500 outline-none rounded-2xl capitalize hover:bg-[#0F6] hover:text-white-500 transition-all hover:shadow-orange my-auto ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
