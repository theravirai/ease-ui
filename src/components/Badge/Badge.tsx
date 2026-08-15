import React, { useEffect, useRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-indigo-600 text-white hover:bg-indigo-700",
        secondary: "border-transparent bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
        destructive: "border-transparent bg-red-600 text-white hover:bg-red-700",
        outline: "border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200",
        success: "border-transparent bg-emerald-600 text-white hover:bg-emerald-700",
        warning: "border-transparent bg-amber-500 text-white hover:bg-amber-600",
      },
      size: {
        sm: "px-2 py-0.5 text-[11px]",
        default: "px-2.5 py-0.5 text-xs",
        lg: "px-3.5 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "size">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  animation?: keyof typeof entranceAnimations;
  hoverAnimation?: keyof typeof hoverAnimations;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      animation,
      hoverAnimation,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "span";
    const internalRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
      const el = internalRef.current;
      if (!el || !animation || animation === "none") return;
      entranceAnimations[animation]?.(el);
    }, [animation]);

    const handleMouseEnter = () => {
      const el = internalRef.current;
      if (!el || !hoverAnimation || hoverAnimation === "none") return;
      hoverAnimations[hoverAnimation]?.(el);
    };

    return (
      <Comp
        ref={(node) => {
          internalRef.current = node as HTMLSpanElement;
          if (typeof ref === "function") ref(node as HTMLSpanElement);
          else if (ref)
            (ref as React.MutableRefObject<HTMLSpanElement | null>).current =
              node;
        }}
        className={cn(badgeVariants({ variant, size, className }))}
        onMouseEnter={handleMouseEnter}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
