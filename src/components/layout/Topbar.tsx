import type { ProgressSnapshot } from "../../types/brand";
import { brandAssets } from "../../lib/brand-assets";
import { cleanText } from "../../lib/helpers";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

type TopbarProps = {
  title: string;
  progress: ProgressSnapshot;
};

export function Topbar({ title, progress }: TopbarProps) {
  return (
    <Card className="flex flex-col gap-4 border-[rgba(231,221,210,0.85)] bg-[rgba(255,253,249,0.78)] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="grid gap-3">
        <div className="text-[11px] font-black uppercase tracking-[0.16em] text-[#8A8379]">
          {brandAssets.workspaceTagline}
        </div>
        <div>
          <strong className="font-display text-[1.55rem] leading-tight text-[#3F3F49]">
            {cleanText(title)}
          </strong>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge>{brandAssets.name}</Badge>
            <Badge>{progress.percent}% complete</Badge>
            <Badge>{progress.completedFields + progress.completedChecks} reperes remplis</Badge>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="secondary">Enregistrement auto</Button>
        <Button variant="ghost">Studio prive</Button>
      </div>
    </Card>
  );
}
