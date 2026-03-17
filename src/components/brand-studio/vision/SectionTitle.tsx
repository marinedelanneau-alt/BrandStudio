type SectionTitleProps = {
  title: string;
};

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-[1.8rem]">
      {title}
    </h2>
  );
}
