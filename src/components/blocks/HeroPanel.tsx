import type { ReactNode } from "react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

type HeroPanelProps = {
  kicker: string;
  title: string;
  description?: string;
  visual?: ReactNode;
};

export function HeroPanel({ kicker, title, description, visual }: HeroPanelProps) {
  return (
    <Card className="grid gap-8 overflow-hidden border-[rgba(231,221,210,0.9)] bg-[linear-gradient(180deg,rgba(255,253,249,0.92),rgba(246,241,232,0.76))] px-6 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
      <div className="relative z-10">
        <div className="pointer-events-none absolute -left-10 top-0 h-32 w-32 rounded-full bg-[rgba(240,214,74,0.18)] blur-3xl" />
        <Badge className="mb-4">{kicker}</Badge>
        <h1 className="font-display max-w-3xl text-4xl leading-tight text-[#3F3F49] lg:text-[3.35rem]">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#756F67]">
            {description}
          </p>
        ) : null}
      </div>
      <div className="flex min-h-[220px] items-center justify-center rounded-[30px] border border-[#E7DDD2] bg-[linear-gradient(180deg,rgba(246,241,232,0.96),rgba(255,253,249,0.82))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
        {visual}
      </div>
    </Card>
  );
}
