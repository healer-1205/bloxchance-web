// components/Layout.tsx
import classNames from "classnames";
import cn from "classnames";
import React, { PropsWithChildren, ReactNode, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Sidebar from "./components/sidebar/SideBar";
import { Outlet } from "react-router-dom";
const Layout = (props: PropsWithChildren<ReactNode>) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  return (
    <>
    asfsdf
      <div
        className={classNames({
          // 👇 use grid layout
          "grid min-h-screen": true,
          // 👇 toggle the width of the sidebar depending on the state
          "grid-cols-sidebar": !collapsed,
          "grid-cols-sidebar-collapsed": collapsed,
          // 👇 transition animation classes
          "transition-[grid-template-columns] duration-300 ease-in-out": true,
        })}
      >
        {/* sidebar */}
        <Sidebar
          collapsed={collapsed}
          setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
        />
        {/* content */}
        asdfasdfasdf
        {/* <div className="">{props.children}</div> */}
      </div>
    </>
  );
};
export default Layout;
