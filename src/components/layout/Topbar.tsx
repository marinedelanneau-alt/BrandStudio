import type { ProgressSnapshot } from "../../types/brand";
import { brandAssets } from "../../lib/brand-assets";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

type TopbarProps = {
  title: string;
  progress: ProgressSnapshot;
};

export function Topbar({ title, progress }: TopbarProps) {
  return (
    <Card style={{ padding: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ display: "grid", gap: 8 }}>
        <strong>{title}</strong>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Badge>{brandAssets.name}</Badge>
          <Badge>{progress.percent}% complete</Badge>
        </div>
      </div>
    </Card>
  );
}
