import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React, { useEffect, useRef } from "react";
import { cn } from "@/libs/utils";
import gsap from "gsap";

const modalVariants = cva(
  "relative z-50 rounded-xl transition-all duration-200 focus:outline-none",
  {
    variants: {
      variant: {
        light:
          "bg-white text-gray-900 shadow-2xl border border-gray-200",
        dark: "bg-slate-900 text-white shadow-2xl border border-slate-800",
        outline:
          "bg-white/90 dark:bg-slate-900/90 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 backdrop-blur-md shadow-xl",
      },
      size: {
        sm: "w-full max-w-sm p-5",
        md: "w-full max-w-md p-6",
        lg: "w-full max-w-lg p-8",
        xl: "w-full max-w-2xl p-8",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "md",
    },
  }
);

export interface ModalProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof modalVariants> {
  asChild?: boolean;
  isOpen?: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  onClose?: () => void;
  onDone?: () => void;
  doneText?: string;
  closeText?: string;
  children?: React.ReactNode;
  showFooter?: boolean;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      asChild = false,
      title,
      description,
      children,
      className,
      isOpen = false,
      onClose,
      onDone,
      doneText = "Done",
      closeText = "Close",
      showFooter = true,
      variant,
      size,
      ...props
    },
    ref
  ) => {
    const cardRef = useRef<HTMLDivElement | null>(null);

    // Lock body scroll and listen for Escape key
    useEffect(() => {
      if (!isOpen) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose?.();
        }
      };

      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);

      // GSAP Entrance animation
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, scale: 0.95, y: 10 },
          { opacity: 1, scale: 1, y: 0, duration: 0.22, ease: "power2.out" }
        );
      }

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [isOpen, onClose]);

    if (!isOpen) return null;
    const Comp = asChild ? Slot : "div";

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-200 animate-fadeIn"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Card */}
        <Comp
          ref={(node) => {
            cardRef.current = node as HTMLDivElement;
            if (typeof ref === "function") ref(node as HTMLDivElement);
            else if (ref)
              (ref as React.MutableRefObject<HTMLDivElement | null>).current =
                node;
          }}
          className={cn(modalVariants({ variant, size }), className)}
          {...props}
        >
          {title && (
            <h3 className="text-xl font-bold mb-2 tracking-tight text-[inherit]">
              {title}
            </h3>
          )}

          {description && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-[inherit]">
              {description}
            </p>
          )}

          <div className="mb-4">{children}</div>

          {showFooter && (
            <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
              <button
                type="button"
                onClick={onClose}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer",
                  variant === "dark"
                    ? "border border-slate-700 text-gray-300 hover:bg-slate-800"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                )}
              >
                {closeText}
              </button>

              <button
                type="button"
                onClick={onDone || onClose}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium text-white transition cursor-pointer",
                  variant === "dark"
                    ? "bg-indigo-500 hover:bg-indigo-600"
                    : "bg-indigo-600 hover:bg-indigo-700"
                )}
              >
                {doneText}
              </button>
            </div>
          )}
        </Comp>
      </div>
    );
  }
);

Modal.displayName = "Modal";
export { Modal, modalVariants };
