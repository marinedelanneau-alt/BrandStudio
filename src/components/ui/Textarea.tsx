import type { TextareaHTMLAttributes } from "react";

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="min-h-[150px] w-full rounded-[22px] border-2 border-[#E7DDD2] bg-white px-5 py-4 text-base leading-7 text-[#3F3F49] outline-none placeholder:text-[#B5ADA3] focus:border-[#C96F2B] focus:ring-4 focus:ring-[#F6E2D4]"
    />
  );
}
