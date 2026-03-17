type SectionIntroProps = {
  children: string;
};

export function SectionIntro({ children }: SectionIntroProps) {
  return (
    <p className="max-w-3xl text-sm leading-7 text-stone-600 sm:text-base">
      {children}
    </p>
  );
}
