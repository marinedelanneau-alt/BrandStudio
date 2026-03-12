import type { PropsWithChildren } from "react";
import { Card } from "../ui/Card";

export function InsightBlock({
  title,
  children,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <Card className="bg-white">
      <div className="mb-3 text-[11px] font-black uppercase tracking-[0.16em] text-[#8A8379]">
        {title || "Pourquoi c’est important"}
      </div>
      <div className="text-sm leading-7 text-[#5E584F]">{children}</div>
    </Card>
  );
}
