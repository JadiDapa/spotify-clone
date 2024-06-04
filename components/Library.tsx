"use client";

import { cn } from "@/lib/utils";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

export interface LibraryProps extends React.HTMLAttributes<HTMLDivElement> {}

function Library({ className, ...props }: LibraryProps) {
  const onClick = () => {
    // handle upload
  };
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-base">Your Library</p>
        </div>
        <AiOutlinePlus
          size={26}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          onClick={onClick}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List Of Songs</div>
    </div>
  );
}

export default Library;
