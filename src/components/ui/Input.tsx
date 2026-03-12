import type { InputHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-[22px] border-2 border-[#E7DDD2] bg-white px-5 py-4 text-base text-[#3F3F49] outline-none placeholder:text-[#B5ADA3] focus:border-[#C96F2B] focus:ring-4 focus:ring-[#F6E2D4]"
    />
  );
}
