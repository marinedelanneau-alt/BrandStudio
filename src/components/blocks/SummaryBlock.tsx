import type { ReactNode } from "react";
import { Card } from "../ui/Card";

export function SummaryBlock({ children }: { children: ReactNode }) {
  return <Card style={{ padding: 24 }}>{children}</Card>;
}
