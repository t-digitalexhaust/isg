import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "glass";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    // Base styles
    let variantStyles = "";
    let sizeStyles = "";

    // Variant styles
    switch (variant) {
      case "default":
        variantStyles = "bg-[#211f60] text-white hover:bg-[#211f60]/90";
        break;
      case "destructive":
        variantStyles = "bg-red-500 text-white hover:bg-red-600";
        break;
      case "outline":
        variantStyles = "border border-gray-300 bg-white hover:bg-gray-100";
        break;
      case "secondary":
        variantStyles = "bg-[#ffc602] text-[#211f60] hover:bg-[#ffc602]/80";
        break;
      case "ghost":
        variantStyles = "hover:bg-gray-100";
        break;
      case "link":
        variantStyles = "text-[#211f60] underline-offset-4 hover:underline";
        break;
      case "glass":
        variantStyles = "glass-button";
        break;
    }

    // Size styles
    switch (size) {
      case "default":
        sizeStyles = "h-10 px-4 py-2";
        break;
      case "sm":
        sizeStyles = "h-9 rounded-md px-3";
        break;
      case "lg":
        sizeStyles = "h-11 rounded-md px-8";
        break;
      case "icon":
        sizeStyles = "h-10 w-10";
        break;
    }

    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    return (
      <button
        className={cn(baseStyles, variantStyles, sizeStyles, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
