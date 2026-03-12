import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../lib/helpers";

type Props = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost";
  }
>;

export function Button({
  children,
  className,
  variant = "secondary",
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "rounded-full border-2 px-5 py-3 text-sm font-black transition",
        variant === "primary" && "border-[#3F3F49] bg-[#F0D64A] text-[#3F3F49]",
        variant === "secondary" && "border-[#3F3F49] bg-white text-[#3F3F49]",
        variant === "ghost" && "border-transparent bg-transparent text-[#3F3F49]",
        "hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
