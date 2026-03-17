type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  subtitle?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  subtitle,
}: SectionTitleProps) {
  const supportingText = description ?? subtitle;

  return (
    <div className="space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
        {title}
      </h1>
      {supportingText ? (
        <p className="max-w-3xl text-base leading-7 text-stone-600">{supportingText}</p>
      ) : null}
    </div>
  );
}
