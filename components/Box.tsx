import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

function Box({ className, ...props }: BadgeProps) {
  return (
    <div
      className={cn("bg-neutral-900 rounded-lg h-fit w-full", className)}
      {...props}
    />
  );
}

export default Box;
