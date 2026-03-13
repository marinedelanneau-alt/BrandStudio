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
    <Card style={{ padding: 40, display: "grid", gridTemplateColumns: "1.08fr 0.92fr", gap: 36 }}>
      <div>
        <Badge>{kicker}</Badge>
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
      <div>{visual}</div>
    </Card>
  );
}
