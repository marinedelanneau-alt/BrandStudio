import type { ReactNode } from "react";

type ExampleBoxProps = {
  children: ReactNode;
  title?: string;
};

export function ExampleBox({
  children,
  title = "Exemple",
}: ExampleBoxProps) {
  return (
    <div className="space-y-3 rounded-2xl border border-stone-200 bg-[#f7f2ea] p-5">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
        {title}
      </div>
      <div className="max-w-3xl text-sm leading-7 text-stone-700 sm:text-base">
        {children}
      </div>
    </div>
  );
}
