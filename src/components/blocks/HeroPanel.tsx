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
    <Card className="grid gap-8 overflow-hidden px-6 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
      <div className="relative z-10">
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
      <div className="flex min-h-[220px] items-center justify-center rounded-[28px] border border-[#E7DDD2] bg-[#F6F1E8] p-6">
        {visual}
      </div>
    </Card>
  );
}
