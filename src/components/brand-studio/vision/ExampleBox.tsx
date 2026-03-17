import type { ReactNode } from "react";

type ExampleBoxProps = {
  title?: string;
  children: ReactNode;
};

export function ExampleBox({
  title = "Exemple",
  children,
}: ExampleBoxProps) {
  return (
    <div className="space-y-3 rounded-2xl border border-stone-200 bg-[#f7f2ea] p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
        {title}
      </p>
      <div className="space-y-2 text-sm leading-7 text-stone-700 sm:text-base">
        {children}
      </div>
    </div>
  );
}
