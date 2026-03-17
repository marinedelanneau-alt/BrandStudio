import type { ReactNode } from "react";

type ExerciseBlockProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function ExerciseBlock({
  title,
  description,
  children,
}: ExerciseBlockProps) {
  return (
    <section className="space-y-5 rounded-3xl border border-stone-200 bg-white p-6 sm:p-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-stone-900 sm:text-xl">
          {title}
        </h3>
        <p className="max-w-3xl text-sm leading-7 text-stone-600 sm:text-base">
          {description}
        </p>
      </div>
      <div className="space-y-5">{children}</div>
    </section>
  );
}
