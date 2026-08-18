import React, { useEffect, useRef } from "react";
import { type InputProps, inputVariants } from "./Input";
import { cn } from "@/libs/utils";
import gsap from "gsap";

export interface InputWithIconProps extends InputProps {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconColor?: string;
  animated?: boolean;
}

export const InputWithIcon = React.forwardRef<
  HTMLInputElement,
  InputWithIconProps
>(
  (
    {
      icon,
      iconPosition = "left",
      className,
      iconColor = "#9ca3af",
      animated = true,
      label,
      hint,
      error,
      id,
      size = "md",
      tone,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const iconRef = useRef<HTMLDivElement | null>(null);
    const inputId =
      id ||
      React.useId?.() ||
      `input-${Math.random().toString(36).slice(2, 9)}`;

    useEffect(() => {
      if (!animated || !iconRef.current || !inputRef.current) return;
      const input = inputRef.current;

      const handleFocus = () => {
        gsap.to(iconRef.current, {
          scale: 1.15,
          color: "#4f46e5",
          duration: 0.15,
          ease: "power2.out",
        });
      };
      const handleBlur = () => {
        gsap.to(iconRef.current, {
          scale: 1,
          color: iconColor,
          duration: 0.25,
          ease: "power2.out",
        });
      };

      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);

      return () => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      };
    }, [animated, iconColor]);

    const paddingClass = icon
      ? iconPosition === "left"
        ? "pl-10"
        : "pr-10"
      : "";

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        <div className="relative w-full flex items-center">
          {icon && iconPosition === "left" && (
            <div
              ref={iconRef}
              className={cn(
                "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-200 pointer-events-none flex items-center justify-center z-10 [&>svg]:w-4 [&>svg]:h-4",
                animated && "will-change-transform will-change-color"
              )}
              style={{ color: iconColor }}
            >
              {icon}
            </div>
          )}

          <input
            id={inputId}
            ref={(node) => {
              inputRef.current = node;
              if (typeof ref === "function") ref(node);
              else if (ref)
                (
                  ref as React.MutableRefObject<HTMLInputElement | null>
                ).current = node;
            }}
            disabled={disabled ?? undefined}
            className={cn(
              inputVariants({ size, tone, disabled }),
              paddingClass,
              className
            )}
            {...props}
          />

          {icon && iconPosition === "right" && (
            <div
              ref={iconRef}
              className={cn(
                "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-200 pointer-events-none flex items-center justify-center z-10 [&>svg]:w-4 [&>svg]:h-4",
                animated && "will-change-transform will-change-color"
              )}
              style={{ color: iconColor }}
            >
              {icon}
            </div>
          )}
        </div>

        {error ? (
          <p className="text-sm text-red-500">{error}</p>
        ) : hint ? (
          <p className="text-sm text-gray-500">{hint}</p>
        ) : null}
      </div>
    );
  }
);

InputWithIcon.displayName = "InputWithIcon";
