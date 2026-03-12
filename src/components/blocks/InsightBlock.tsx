import type { PropsWithChildren } from "react";
import { cleanText } from "../../lib/helpers";
import { Card } from "../ui/Card";

export function InsightBlock({
  title,
  children,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <Card className="border-[rgba(231,221,210,0.9)] bg-[linear-gradient(180deg,rgba(255,253,249,0.96),rgba(246,241,232,0.78))] px-6 py-6">
      <div className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#8A8379]">
        {cleanText(title || "Pourquoi c'est important")}
      </div>
      <div className="text-[0.97rem] leading-8 text-[#5E584F]">{children}</div>
    </Card>
  );
}
