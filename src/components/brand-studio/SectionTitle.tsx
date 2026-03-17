type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-[1.75rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-3xl text-sm leading-7 text-stone-600 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
