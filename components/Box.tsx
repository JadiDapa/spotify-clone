import { cn } from "@/lib/utils";
import { FC } from "react";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {}

const Box: FC<BoxProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn("h-fit w-full rounded-lg bg-neutral-900", className)}
      {...props}
    />
  );
};

export default Box;
