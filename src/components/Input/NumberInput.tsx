import React, { useRef } from "react";
import { Input, type InputProps } from "./Input";
import { ChevronUp, ChevronDown } from "lucide-react";

export interface NumberInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "disabled" | "onChange">,
    Omit<InputProps, "type" | "onChange"> {
  onChange?: (value: number) => void;
  step?: number;
  min?: number;
  max?: number;
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  ({ onChange, step = 1, min, max, value, defaultValue, ...props }, ref) => {
    const internalRef = useRef<HTMLInputElement | null>(null);

    const getVal = () => {
      const el = internalRef.current;
      if (value !== undefined) return Number(value);
      if (el) return Number(el.value || 0);
      return Number(defaultValue ?? 0);
    };

    const updateVal = (next: number) => {
      if (min !== undefined && next < min) return;
      if (max !== undefined && next > max) return;
      if (internalRef.current) {
        internalRef.current.value = String(next);
      }
      onChange?.(next);
    };

    const handleInc = () => {
      const cur = getVal();
      updateVal(cur + step);
    };

    const handleDec = () => {
      const cur = getVal();
      updateVal(cur - step);
    };

    return (
      <div className="flex items-end gap-1.5 w-full">
        <div className="flex-1">
          <Input
            {...props}
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            defaultValue={defaultValue}
            onChange={(e) => onChange?.(Number(e.target.value))}
            ref={(node) => {
              internalRef.current = node;
              if (typeof ref === "function") ref(node);
              else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
            }}
          />
        </div>
        <div className="flex flex-col gap-0.5 pb-0.5">
          <button
            type="button"
            onClick={handleInc}
            className="p-1 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded text-gray-700 transition"
            aria-label="Increment"
          >
            <ChevronUp size={14} />
          </button>
          <button
            type="button"
            onClick={handleDec}
            className="p-1 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded text-gray-700 transition"
            aria-label="Decrement"
          >
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
    );
  }
);

NumberInput.displayName = "NumberInput";
