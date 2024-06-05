"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { FaPlay } from "react-icons/fa";

export interface ListItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  image: string;
  name: string;
  href: string;
}

const ListItem: FC<ListItemProps> = ({
  image,
  name,
  href,
  className,
  ...props
}) => {
  const router = useRouter();

  const onClick = () => {
    // Add Auth before push
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex items-center gap-x-4 overflow-hidden rounded-md bg-neutral-100/10 pr-4 transition hover:bg-neutral-100/20",
        className,
      )}
      {...props}
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image
          className="object-cover"
          fill
          src={image}
          alt="Liked Post Image"
        />
      </div>
      <p className="truncate py-5 font-medium">{name}</p>
      <div className="absolute right-5 flex items-center justify-center rounded-full bg-green-500 p-4 text-black opacity-0 drop-shadow-md transition hover:scale-110 group-hover:opacity-100">
        <FaPlay />
      </div>
    </button>
  );
};

export default ListItem;
