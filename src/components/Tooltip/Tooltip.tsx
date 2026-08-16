import React, { useState, useRef, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import gsap from "gsap";

const tooltipVariants = cva(
  "absolute z-50 whitespace-nowrap rounded-md border font-medium pointer-events-none transition-opacity",
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white border-slate-800 shadow-md",
        light: "bg-white text-gray-900 border-gray-200 shadow-lg",
        primary: "bg-indigo-600 text-white border-indigo-500 shadow-md",
      },
      size: {
        sm: "px-2 py-0.5 text-[11px]",
        default: "px-3 py-1.5 text-xs",
        lg: "px-4 py-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "dark",
      size: "default",
    },
  }
);

export interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "content">,
    VariantProps<typeof tooltipVariants> {
  content: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  delay?: number;
  arrow?: boolean;
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      content,
      placement = "top",
      delay = 100,
      arrow = true,
      variant,
      size,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    const showTooltip = () => {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    };

    const hideTooltip = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsVisible(false);
    };

    useEffect(() => {
      if (isVisible && tooltipRef.current) {
        const offsetAxis = placement === "top" || placement === "bottom" ? "y" : "x";
        const offsetVal = placement === "top" ? 4 : placement === "bottom" ? -4 : placement === "left" ? 4 : -4;

        gsap.fromTo(
          tooltipRef.current,
          { opacity: 0, scale: 0.94, [offsetAxis]: offsetVal },
          { opacity: 1, scale: 1, [offsetAxis]: 0, duration: 0.18, ease: "power2.out" }
        );
      }
    }, [isVisible, placement]);

    const placementStyles = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2",
    };

    return (
      <div
        ref={ref}
        className="relative inline-flex items-center justify-center"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        {...props}
      >
        {children}

        {isVisible && content && (
          <div
            ref={tooltipRef}
            role="tooltip"
            className={cn(
              tooltipVariants({ variant, size }),
              placementStyles[placement],
              className
            )}
          >
            {content}
            {arrow && (
              <span
                className={cn(
                  "absolute w-2 h-2 rotate-45 border pointer-events-none",
                  variant === "light"
                    ? "bg-white border-gray-200"
                    : variant === "primary"
                    ? "bg-indigo-600 border-indigo-500"
                    : "bg-slate-900 border-slate-800",
                  placement === "top" && "top-full left-1/2 -translate-x-1/2 -mt-1 border-t-0 border-l-0",
                  placement === "bottom" && "bottom-full left-1/2 -translate-x-1/2 -mb-1 border-b-0 border-r-0",
                  placement === "left" && "left-full top-1/2 -translate-y-1/2 -ml-1 border-b-0 border-l-0",
                  placement === "right" && "right-full top-1/2 -translate-y-1/2 -mr-1 border-t-0 border-r-0"
                )}
              />
            )}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";

export { Tooltip, tooltipVariants };
