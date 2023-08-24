import React, { Fragment, useState, ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import { Dialog, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { icons } from "../Assets"

const navigation = [
  { name: "Coinflips", href: "/", icon: icons.CoinFlip, current: true },
  { name: "Cases", href: "/", icon: icons.CaseIcon, current: false },
  { name: "Case Battles", href: "/", icon: icons.BattleIcon, current: false },
  { name: "Crash", href: "/", icon: icons.CrashIcon, current: false },
  { name: "Slots", href: "/", icon: icons.SlotIcon, current: false },
  { name: "Wheel", href: "/", icon: icons.WheelIcon, current: false },
]
const teams = [
  {
    id: 1,
    name: "How to Play",
    href: "/",
    initial: "H",
    current: false,
    icon: icons.HowToIcon,
  },
  {
    id: 2,
    name: "WIthdraw",
    href: "/",
    initial: "T",
    current: false,
    icon: icons.WithdrawIcon,
  },
  {
    id: 3,
    name: "Leaderboard",
    href: "/",
    initial: "W",
    current: false,
    icon: icons.LeaderboardIcon,
  },
  {
    id: 4,
    name: "Referrals",
    href: "/",
    initial: "W",
    current: false,
    icon: icons.ReferralIcon,
  },
]
const userNavigation = [
  { name: "Your profile", href: "/" },
  { name: "Sign out", href: "/" },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

type LayoutProps = {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate()

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMiniBar, setIsMiniBar] = useState(false)

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
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
                leaveTo="-translate-x-full">
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1 mt-12">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#13152F] px-6 pb-4 ring-1 ring-white/10 mt-4 rounded-r-lg">
                    <nav className="flex flex-1 flex-col pt-2">
                      <div className="pb-6">
                        <icons.LeftDoubleArrowIcon />
                      </div>
                      <ul className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-[#00BE4C] text-white"
                                      : "text-gray-400 hover:text-white hover:bg-[#00BE4C]",
                                    "group flex gap-x-3 rounded-md p-2 text-base leading-6 font-normal items-center font-body"
                                  )}>
                                  <item.icon aria-hidden="true" />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="border-t border-[#B2B2B2] ">
                          <ul className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-[#00BE4C] text-white"
                                      : "text-gray-400 hover:text-white hover:bg-[#00BE4C]",
                                    "group flex gap-x-3 rounded-md p-2 text-base leading-6 items-center font-body font-normal"
                                  )}>
                                  <team.icon aria-hidden="true" />
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <p className="font-normal text-sm font-body text-[#3E458D] text-center">
                            Terms of Service - Privacy
                          </p>
                          <p className="font-normal text-[10px] font-body text-[#3E458D] text-center">
                            ©️ 2022 BLOXCHANCE
                          </p>
                          <p className="font-normal text-[10px] font-body text-[#3E458D] text-center">
                            BLOXCHANCE IS NOT AFFILATED WITH
                          </p>
                          <p className="font-normal text-[10px] font-body text-[#3E458D] text-center">
                            ROBLOX CORPORATION
                          </p>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div
          className={classNames(
            isMiniBar ? "lg:w-20" : "lg:w-72",
            "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col mt-16 transition-all duration-300"
          )}>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-hidden bg-[#13152F] px-6 pb-4 rounded-r-lg">
            <nav className="flex flex-1 flex-col pt-2">
              <div
                className="pb-6 hover:cursor-pointer w-fit"
                onClick={() => {
                  setIsMiniBar((prev) => !prev)
                }}>
                <icons.LeftDoubleArrowIcon />
              </div>
              <ul className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-[#00BE4C] text-white svg-current"
                              : "text-gray-400 hover:text-white hover:bg-[#00BE4C]",
                            isMiniBar ? "justify-center" : "",
                            "group flex gap-x-3 rounded-md p-2 text-base leading-6 items-center font-body font-normal svg-hover h-10"
                          )}>
                          <item.icon aria-hidden="true" />
                          {isMiniBar ? (
                            <Fragment></Fragment>
                          ) : (
                            <span>{item.name}</span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="border-t border-[#B2B2B2]">
                  <ul className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? "bg-[#00BE4C] text-white"
                              : "text-gray-400 hover:text-white hover:bg-[#00BE4C]",
                            isMiniBar ? "justify-center" : "",
                            "group flex gap-x-3 rounded-md p-2 text-base leading-6 font-normal items-center font-body svg-hover h-10"
                          )}>
                          <team.icon aria-hidden="true" />
                          {isMiniBar ? (
                            <Fragment></Fragment>
                          ) : (
                            <span className="truncate">{team.name}</span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {isMiniBar ? (
                  <></>
                ) : (
                  <li className="mt-auto">
                    <p className="font-normal text-sm font-body text-[#3E458D] text-center">
                      Terms of Service - Privacy
                    </p>
                    <p className="font-normal text-[10px] font-body text-[#3E458D] text-center">
                      ©️ 2022 BLOXCHANCE
                    </p>
                    <p className="font-normal text-[10px] font-body text-[#3E458D] text-center">
                      BLOXCHANCE IS NOT AFFILATED WITH
                    </p>
                    <p className="font-normal text-[10px] font-body text-[#3E458D] text-center">
                      ROBLOX CORPORATION
                    </p>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>

        <div>
          <div className="sticky top-0 z-40 flex justify-between h-16 shrink-0 items-center gap-x-4 bg-[#07091D] px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
            </button>

            <div
              className="flex h-16 shrink-0 items-center cursor-pointer"
              onClick={() => {
                navigate("/mini")
              }}>
              <icons.LogoIcon />
              <p className="text-[#00FF66] text-2xl font-bold font-display">
                bloxchance
              </p>
            </div>

            <div className="flex items-center gap-x-4 lg:gap-x-6">
              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="-m-1.5 flex items-center p-1.5">
                  <span className="sr-only">Open user menu</span>
                  <span className="hidden lg:flex lg:items-center">
                    <span
                      className="mr-4 text-sm font-semibold leading-6 text-white"
                      aria-hidden="true">
                      Tom Cook
                    </span>
                  </span>
                  <icons.AvatarIcon />
                  <ChevronDownIcon
                    className="ml-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-[#13152F] py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? "text-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-400 font-body font-normal"
                            )}>
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>

          <main className="py-10 bg-[#07091D] min-h-screen">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  )
}
