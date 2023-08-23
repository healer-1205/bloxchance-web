export type SideItem = {
    label: string;
    href: string;
    icon: React.ReactNode;
    current: boolean;
}
export type SidebarProps = {
    collapsed: boolean;
    sideItems_A?: SideItem[];
    sideItems_B?: SideItem[];
    setCollapsed(collapsed: boolean): void;
    shown: boolean;
  };