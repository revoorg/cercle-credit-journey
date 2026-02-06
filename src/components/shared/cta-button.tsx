"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<typeof Button>;

export function CtaButton({ className, children, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "bg-[#00466B] hover:bg-[#003552] text-white rounded-xl h-12 w-full font-medium text-base",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
