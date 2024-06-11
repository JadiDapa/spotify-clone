"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";
import { cn } from "@/lib/utils";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  songs: Song[];
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
  className,
  songs,
  children,
  ...props
}) => {
  const pathname = usePathname();
  const player = usePlayer();

  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname !== "/search",
        href: "/",
        Icon: HiHome,
      },
      {
        label: "Search",
        active: pathname === "/search",
        href: "/search",
        Icon: BiSearch,
      },
    ],
    [pathname],
  );

  return (
    <aside
      className={cn(
        "flex h-full",
        player.activeId && "h-[calc(100%-80px)]",
        className,
      )}
      {...props}
    >
      <div className="hidden h-full w-[300px] flex-col gap-y-3 bg-black p-2 md:flex">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto">
          <Library songs={songs} />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </aside>
  );
};

export default Sidebar;
