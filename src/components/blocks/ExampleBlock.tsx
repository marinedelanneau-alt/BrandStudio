import type { PropsWithChildren } from "react";
import { Card } from "../ui/Card";

export function ExampleBlock({ children }: PropsWithChildren) {
  return (
    <Card className="border-[rgba(231,221,210,0.9)] bg-[linear-gradient(180deg,rgba(255,253,249,0.96),rgba(246,241,232,0.88))] px-6 py-6">
      <div className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#8A8379]">
        Exemple
      </div>
      <div className="font-display text-[1.28rem] leading-[1.9] text-[#3F3F49]">
        {children}
      </div>
    </Card>
  );
}
