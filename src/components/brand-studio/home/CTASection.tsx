"use client";

import { Button } from "../../ui/Button";

type CTASectionProps = {
  title: string;
  body: string;
  primaryLabel: string;
  secondaryLabel: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
};

export function CTASection({
  title,
  body,
  primaryLabel,
  secondaryLabel,
  onPrimaryClick,
  onSecondaryClick,
}: CTASectionProps) {
  return (
    <section className="rounded-[36px] border border-[#3F3F49] bg-[#FFF7EE] px-6 py-8 sm:px-8 sm:py-10">
      <div className="max-w-3xl space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight text-[#3F3F49] sm:text-[2rem]">
          {title}
        </h2>
        <p className="text-sm leading-7 text-[#5E584F] sm:text-base">{body}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button variant="primary" onClick={onPrimaryClick}>
            {primaryLabel}
          </Button>
          <Button variant="secondary" onClick={onSecondaryClick}>
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
