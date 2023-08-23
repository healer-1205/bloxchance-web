import React from "react";
import classNames from "classnames";
import { Icon_Blox } from "../../icons/index";
import ButtonOutline from "../../../../misc/ButtonOutline";
const TopBar = () => {
  const textShadows = {
    textShadow: "0px 0px 13px rgba(0, 255, 102, 0.50)",
  };
  return (
    <div
      className={classNames({
        "flex justify-between w-full px-8": true,
        "bg-bloxchanceBG": true,
        "h-28 font-display": true,
      })}
    >
      <div className="flex space-x-3 my-auto">
        <Icon_Blox />
        <h1 className="text-[#0F6] text-3xl my-auto" style={textShadows}>
          bloxchance
        </h1>
      </div>
      <div className="flex">
        <button className="text-[#0F6] text-base font-Monts font-semibold">Sign up</button>
        <ButtonOutline>Log in</ButtonOutline>
      </div>
    </div>
  );
};

export default TopBar;
