import type { ProgressSnapshot } from "../../types/brand";
import { brandConfig } from "../../lib/brand-config";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
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
          <Badge>{brandConfig.name}</Badge>
          <Badge>{progress.percent}% complete</Badge>
        </div>
      </div>
      <Button variant="secondary">Enregistrement auto</Button>
    </Card>
  );
}
