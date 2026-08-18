import React, { useState } from "react";
import { type InputProps, inputVariants } from "./Input";
import { cn } from "@/libs/utils";
import { Eye, EyeOff } from "lucide-react";

export interface PasswordInputProps extends Omit<InputProps, "type"> {}

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(
  (
    {
      label,
      hint,
      error,
      id,
      className,
      size = "md",
      tone,
      disabled,
      ...props
    },
    ref
  ) => {
    const [show, setShow] = useState(false);
    const inputId =
      id ||
      React.useId?.() ||
      `input-${Math.random().toString(36).slice(2, 9)}`;

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
          <input
            id={inputId}
            ref={ref}
            type={show ? "text" : "password"}
            disabled={disabled ?? undefined}
            className={cn(
              inputVariants({ size, tone, disabled }),
              "pr-10",
              className
            )}
            {...props}
          />
          <button
            type="button"
            aria-label={show ? "Hide password" : "Show password"}
            onClick={() => setShow((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded text-gray-400 hover:text-gray-700 transition-colors z-10 flex items-center justify-center"
          >
            {show ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
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

PasswordInput.displayName = "PasswordInput";
