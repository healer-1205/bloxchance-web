import { SideItem } from "../../../../types/sideBarType";
import React from "react";
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
} from "../../icons";
export const sidebar_A: SideItem[] = [
  { label: "Coinflips", href: "#", icon: <Icon_Conflips />, current: true },
  { label: "Cases", href: "#", icon: <Icon_Cases />, current: false },
  { label: "Case Battles", href: "#", icon: <Icon_Battle />, current: false },
  { label: "Crash", href: "#", icon: <Icon_Crash />, current: false },
  { label: "Slots", href: "#", icon: <Icon_Slots />, current: false },
  { label: "Wheel", href: "#", icon: <Icon_Wheel />, current: false },
];
export const sidebar_B: SideItem[] = [
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
