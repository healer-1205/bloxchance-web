import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import {
  Icon_Conflips,
  Icon_Cases,
  Icon_Withdraw,
  Icon_Battle,
  Icon_Crash,
  Icon_Slots,
  Icon_Wheel,
  Icon_HowToPlay,
  Icon_Leaderboard,
  Icon_Referrals,
  Icon_Arrow_Close,
} from "../icons";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import { classNames } from "../../../@utils/utils";
import { SideItem } from "../../../types/sideBarType";
const sidebar_A: SideItem[] = [
  { label: "Coinflips", href: "#", icon: <Icon_Conflips />, current: true },
  { label: "Cases", href: "#", icon: <Icon_Cases />, current: false },
  { label: "Case Battles", href: "#", icon: <Icon_Battle />, current: false },
  { label: "Crash", href: "#", icon: <Icon_Crash />, current: false },
  { label: "Slots", href: "#", icon: <Icon_Slots />, current: false },
  { label: "Wheel", href: "#", icon: <Icon_Wheel />, current: false },
];
const sidebar_B: SideItem[] = [
  {
    label: "How to Play",
    href: "#",
    icon: <Icon_HowToPlay />,
    current: false,
  },
  {
    label: "Withdraw",
    href: "#",
    icon: <Icon_Withdraw />,
    current: false,
  },
  {
    label: "Leaderboard",
    href: "#",
    icon: <Icon_Leaderboard />,
    current: false,
  },
  {
    label: "Referrals",
    href: "#",
    icon: <Icon_Referrals />,
    current: false,
  },
];
const userNavigation = [
  { label: "Your profile", href: "#" },
  { label: "Sign out", href: "#" },
];

const FirstSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebar, setSider] = useState(true);
  return (
    <>
      <div>
        <>
          {/* <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1 overflow-auto">

                  <div className="absolute bottom-0 top-[88px] z-50 flex flex-col">
                    <div className="flex grow flex-col gap-y-5 bg-sideBar pr-6 pb-4 rounded-tr-3xl">
                      <nav className="flex flex-1 flex-col">
                        <ul
                          role="list"
                          className="flex flex-1 flex-col gap-y-7"
                        >
                          <li
                            className="ml-4 mt-2.5"
                            onClick={() => setSidebarOpen(false)}
                          >
                            <Icon_Arrow_Close />
                          </li>
                          <li>
                            <ul
                              role="list"
                              className="-mx-2 space-y-1 text-sideBar-500"
                            >
                              {sidebar_A.map((item) => (
                                <li
                                  key={item.label}
                                  className={classNames(
                                    item.current
                                      ? "bg-sideBar-hover before:bg-sideBar-hover text-white w-[105%]"
                                      : "",
                                    "hover:w-[105%] hover:text-white rounded-lg w-full ml-4 relative before:absolute before:-inset-x-2.5 before:w-1 before:h-10 before:rounded-r-xl hover:bg-sideBar-hover hover:before:bg-sideBar-hover pl-5"
                                  )}
                                >
                                  <Link
                                    to={item.href}
                                    className="flex gap-x-3 rounded-md p-2 text-base leading-6 font-body"
                                  >
                                    {item.icon}
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li>
                            <div className="text-sideBar-line ml-9">
                              <hr />
                            </div>
                            <ul role="list" className="-mx-2 mt-2 space-y-1">
                              {sidebar_B.map((team) => (
                                <li
                                  key={team.label}
                                  className={classNames(
                                    team.current
                                      ? "bg-sideBar-hover before:bg-sideBar-hover text-white w-[105%]"
                                      : "text-sideBar-500",
                                    "hover:w-[105%] hover:text-white rounded-lg w-full ml-4 relative before:absolute before:-inset-x-2.5 before:w-1 before:h-10 before:rounded-r-xl hover:bg-sideBar-hover hover:before:bg-sideBar-hover pl-5"
                                  )}
                                >
                                  <Link
                                    to={team.href}
                                    className="flex gap-x-3 rounded-md p-2 text-base leading-6 font-body"
                                  >
                                    {team.icon}
                                    <span className="truncate">
                                      {team.label}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li className="mt-auto">
                            <Link
                              to="#"
                              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                            >
                              <Cog6ToothIcon
                                className="h-6 w-6 shrink-0"
                                aria-hidden="true"
                              />
                              Settings
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root> */}
        </>
        {/* Static sidebar for desktop */}

        <div className="hidden lg:absolute lg:bottom-0 lg:top-[88px] lg:z-50 lg:flex lg:flex-col w-[288px]">
          <div className="flex grow flex-col gap-y-5 bg-sideBar pr-6 pb-4 rounded-tr-3xl">
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li className="ml-4 mt-2.5" onClick={() => setSider(false)}>
                  <Icon_Arrow_Close />
                </li>
                <li>
                  <ul role="list" className="space-y-1 text-sideBar-500">
                    {sidebar_A.map((item) => (
                      <li
                        key={item.label}
                        className={classNames(
                          item.current
                            ? "bg-sideBar-hover before:bg-sideBar-hover text-white w-[105%]"
                            : "",
                          "hover:w-[105%] hover:text-white rounded-lg w-full ml-4 relative before:absolute before:-inset-x-3.5 before:w-1 before:h-10 before:rounded-r-xl hover:bg-sideBar-hover hover:before:bg-sideBar-hover"
                        )}
                      >
                        <Link
                          to={item.href}
                          className="flex gap-x-3 rounded-md p-2 pl-6 text-base leading-6 font-body"
                        >
                          {item.icon}
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-sideBar-line mx-auto w-10/12">
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
                          "hover:w-[105%] hover:text-white rounded-lg w-full ml-4 relative before:absolute before:-inset-x-3.5 before:w-1 before:h-10 before:rounded-r-xl hover:bg-sideBar-hover hover:before:bg-sideBar-hover"
                        )}
                      >
                        <Link
                          to={team.href}
                          className="flex gap-x-3 rounded-md p-2 pl-6 text-base leading-6 font-body"
                        >
                          {team.icon}
                          <span className="truncate">{team.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                      >
                        Tom Cook
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.label}>
                          {({ active }) => (
                            <Link
                              to={item.href}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                            >
                              {item.label}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FirstSidebar;
