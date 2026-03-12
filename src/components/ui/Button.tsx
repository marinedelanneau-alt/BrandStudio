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
        "rounded-full border px-5 py-3 text-sm font-semibold tracking-[0.01em] transition duration-200",
        variant === "primary" &&
          "border-[#d7b64c] bg-[#F0D64A] text-[#3F3F49] shadow-[0_10px_22px_rgba(240,214,74,0.28)]",
        variant === "secondary" &&
          "border-[#d8cdc1] bg-[rgba(255,255,255,0.78)] text-[#3F3F49] shadow-[0_8px_20px_rgba(25,25,25,0.05)]",
        variant === "ghost" && "border-transparent bg-transparent text-[#756F67]",
        "hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(25,25,25,0.08)] disabled:cursor-not-allowed disabled:opacity-40",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
