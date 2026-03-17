import { Button } from "../../ui/Button";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  primaryLabel: string;
  secondaryLabel: string;
  support: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
};

export function HeroSection({
  title,
  subtitle,
  primaryLabel,
  secondaryLabel,
  support,
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) {
  return (
    <section className="rounded-[36px] border border-[#E7DDD2] bg-[#FFFDF9] px-6 py-8 shadow-[0_10px_24px_rgba(25,25,25,0.04)] sm:px-8 sm:py-10">
      <div className="max-w-3xl space-y-5">
        <div className="text-[11px] font-black uppercase tracking-[0.16em] text-[#8A8379]">
          Brand Studio
        </div>
        <h1 className="font-display text-4xl leading-tight text-[#3F3F49] sm:text-[3.3rem]">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-8 text-[#6A635B]">
          {subtitle}
        </p>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button variant="primary" onClick={onPrimaryClick}>
            {primaryLabel}
          </Button>
          <Button variant="secondary" onClick={onSecondaryClick}>
            {secondaryLabel}
          </Button>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-[#756F67]">{support}</p>
      </div>
    </section>
  );
}
