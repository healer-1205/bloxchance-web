// components/Layout.tsx
import classNames from "classnames";
import cn from "classnames";
import React, { PropsWithChildren, ReactNode, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Sidebar from "./components/sidebar/SideBar";
import { Outlet } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
const Layout = (props: PropsWithChildren<ReactNode>) => {
  const [collapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [showSideber, setShowSidebar] = useState<boolean>(false);
  return (
    <>
    <TopBar onSidebarClick={() => setShowSidebar((prev) => !prev)}/>
      <div
        className={classNames({
          // 👇 use grid layout
          "grid min-h-screen": true,
          // 👇 toggle the width of the sidebar depending on the state
          "grid-cols-sidebar": !collapsed,
          "grid-cols-sidebar-collapsed": collapsed,
          // 👇 transition animation classes
          "transition-[grid-template-columns] duration-300 ease-in-out": true,
          "bg-bloxchanceBG" :true,
        })}
      >
        {/* sidebar */}
        <Sidebar
          collapsed={collapsed}
          setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
          shown = {showSideber}
        />
        {/* content */}
        <div className="bg-bloxchanceBG w-full h-full"></div>
        {/* <div className="">{props.children}</div> */}
      </div>
    </>
  );
};
export default Layout;
