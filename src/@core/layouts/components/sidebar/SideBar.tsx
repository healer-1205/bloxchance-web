import React from "react";
import cn from "classnames";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { SidebarProps, SideItem } from "../../../../types/sideBarType";
import { sidebar_A, sidebar_B } from "./defaultSidebar";

const Sidebar = ({
  collapsed,
  sideItems_A = sidebar_A,
  sideItems_B = sidebar_B,
  setCollapsed,
}: SidebarProps) => {
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  return (
    <>
      <div
        className={cn({
          "bg-sideBar rounded-tr-3xl text-zinc-50 z-20": true,
          "transition-all duration-300 ease-in-out": true,
        })}
      >
        <div>
          <div>
            <button
              className={cn({
                "grid place-content-center": true, // position
                "hover:bg-indigo-800 ": true, // colors
                "w-10 h-10 rounded-full": true, // shape
              })}
              // 👇 set the collapsed state on click
              onClick={() => setCollapsed(!collapsed)}
            >
              <Icon className="w-5 h-5 text-sideBar-hover" />
            </button>

            <nav>
              <ul role="list">
                <li>
                  <ul role="list" className="space-y-1 text-sideBar-500">
                    {sidebar_A.map((item) => (
                      <li
                        key={item.label}
                        className={classNames(
                          item.current
                            ? "bg-sideBar-hover before:bg-sideBar-hover text-white w-[105%]"
                            : "",
                          "hover:w-[105%] hover:text-white rounded-lg w-full ml-4 relative before:absolute before:-inset-x-3.5 before:inset-y-2 before:w-1 before:h-7 before:my-auto before:rounded-r-xl hover:bg-sideBar-hover hover:before:bg-sideBar-hover"
                        )}
                      >
                        <Link
                          to={item.href}
                          className="flex gap-x-3 rounded-md p-2 pl-6 text-base leading-6 font-body"
                        >
                          {item.icon}
                          {!collapsed && item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-sideBar-line mx-auto w-10/12 my-2">
                    <hr />
                  </div>
                  <ul role="list" className=" mt-2 space-y-1">
                    {sidebar_B.map((team) => (
                      <li
                        key={team.label}
                        className={classNames(
                          team.current
                            ? "bg-sideBar-hover before:bg-sideBar-hover text-white w-[105%]"
                            : "text-sideBar-500",
                          "hover:w-[105%] hover:text-white rounded-lg w-full ml-4 relative before:absolute before:-inset-x-3.5 before:inset-y-2 before:w-1 before:h-7 before:my-auto before:rounded-r-xl hover:bg-sideBar-hover hover:before:bg-sideBar-hover"
                        )}
                      >
                        <Link
                          to={team.href}
                          className="flex gap-x-3 rounded-md p-2 pl-6 text-base leading-6 font-body"
                        >
                          {team.icon}
                          {!collapsed && team.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                {!collapsed && (
                  <li className="mt-64 flex flex-col">
                    <h3 className="font-body text-[13px] text-[#3E458D] mx-auto mb-10">
                      Terms of Service - Privacy{" "}
                    </h3>
                    <p className="font-body text-[10px] mx-auto text-[#1F2565] mb-2">
                      ©️ 2022 BLOXCHANCE
                    </p>
                    <p className="font-body text-[10px] mx-auto text-[#1F2565] mb-2 text-center">
                      BLOXCHANCE IS NOT AFFILATED WITH ROBLOX CORPORATION
                    </p>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
