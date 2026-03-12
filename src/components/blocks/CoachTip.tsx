import type { PropsWithChildren } from "react";
import { Card } from "../ui/Card";

export function CoachTip({
  title,
  children,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <Card className="border-[rgba(231,221,210,0.88)] bg-[linear-gradient(180deg,rgba(255,248,239,0.94),rgba(255,253,249,0.92))] px-6 py-6">
      {title ? (
        <div className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#8A8379]">
          {title}
        </div>
      ) : null}
      <div className="text-[0.97rem] leading-8 text-[#5E584F]">{children}</div>
    </Card>
  );
}
