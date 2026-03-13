import type { PropsWithChildren } from "react";
import { Card } from "../ui/Card";

export function CoachTip({
  title,
  children,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <Card className="bg-[#FFF8EF]">
      {title ? (
        <div className="mb-3 text-[11px] font-black uppercase tracking-[0.16em] text-[#8A8379]">
          {title}
        </div>
      ) : null}
      <div className="text-sm leading-7 text-[#5E584F]">{children}</div>
    </Card>
  );
}
