import { brandAssets } from "../../../lib/brand-assets";
import { Button } from "../../ui/Button";

type HeroSectionProps = {
  pretitle: string;
  title: string;
  subtitle: string;
  primaryLabel: string;
  secondaryLabel: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
};

export function HeroSection({
  pretitle,
  title,
  subtitle,
  primaryLabel,
  secondaryLabel,
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) {
  return (
    <section className="overflow-hidden rounded-[36px] border border-[#E7DDD2] bg-[#FFFDF9] px-6 py-8 shadow-[0_10px_24px_rgba(25,25,25,0.04)] sm:px-8 sm:py-10">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="max-w-3xl space-y-5">
          <div className="text-[11px] font-black uppercase tracking-[0.16em] text-[#8A8379]">
            {pretitle}
          </div>
          <h1 className="font-display text-4xl leading-tight text-[#3F3F49] sm:text-[3.3rem]">
            {title}
          </h1>
          <div className="max-w-2xl space-y-4 text-base leading-8 text-[#6A635B]">
            {subtitle.split("\n\n").map((paragraph) => (
              <p key={paragraph} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button variant="primary" onClick={onPrimaryClick}>
              {primaryLabel}
            </Button>
            <Button variant="secondary" onClick={onSecondaryClick}>
              {secondaryLabel}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-[360px] lg:block">
          <img
            src={brandAssets.heroCollageSrc}
            alt="Éléments de la nouvelle communication Brand Studio"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
