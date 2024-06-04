import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";

export interface SidebarItemProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  Icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: FC<SidebarItemProps> = ({
  Icon,
  label,
  active,
  href,
  className,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn(
        `flex flex-row h-auto items-center w-full gap-x-4 text-lg font-medium cursor-pointer hover:text-white transition-all text-neutral-400 py-1`,
        active && "text-white",
        className
      )}
      {...props}
    >
      <Icon size={26} />
      <p className="w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;
