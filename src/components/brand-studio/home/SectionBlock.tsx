import type { ReactNode } from "react";

type SectionBlockProps = {
  title: string;
  intro: string;
  children: ReactNode;
};

export function SectionBlock({ title, intro, children }: SectionBlockProps) {
  return (
    <section className="space-y-6 rounded-[32px] border border-[#E7DDD2] bg-[#FFFDF9] p-6 sm:p-8">
      <div className="max-w-3xl space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-[#3F3F49] sm:text-[1.9rem]">
          {title}
        </h2>
        <p className="text-sm leading-7 text-[#6A635B] sm:text-base">{intro}</p>
      </div>
      {children}
    </section>
  );
}
