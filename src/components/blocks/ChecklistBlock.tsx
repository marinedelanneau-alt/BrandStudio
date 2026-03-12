import type { ReactNode } from "react";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

export function ChecklistBlock({ children }: { children: ReactNode }) {
  return (
    <Card className="bg-[#FFFDF9] px-6 py-6">
      <Badge className="mb-4">Checklist</Badge>
      <div className="grid gap-3 text-sm leading-7 text-[#5E584F]">{children}</div>
    </Card>
  );
}
