import type { PropsWithChildren } from "react";
import { Card } from "../ui/Card";

export function ExampleBlock({ children }: PropsWithChildren) {
  return (
    <Card className="bg-white">
      <div className="mb-3 text-[11px] font-black uppercase tracking-[0.16em] text-[#8A8379]">
        Exemple
      </div>
      <div className="font-display text-[1.2rem] leading-8 text-[#3F3F49]">
        {children}
      </div>
    </Card>
  );
}
