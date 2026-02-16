"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<typeof Button>;

export function CtaButton({ className, children, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "cursor-pointer bg-[#005A9E] hover:bg-[#004A84] text-white rounded-full h-[57px] w-full font-medium text-lg transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
