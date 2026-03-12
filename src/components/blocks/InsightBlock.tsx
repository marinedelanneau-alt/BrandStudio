import type { ReactNode } from "react";
import { Card } from "../ui/Card";

export function InsightBlock({ children }: { children: ReactNode }) {
  return <Card style={{ padding: 32 }}>{children}</Card>;
}
