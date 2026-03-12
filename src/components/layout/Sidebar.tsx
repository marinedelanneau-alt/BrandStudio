import { modules } from "../../data/modules";
import { brandAssets } from "../../lib/brand-assets";
import { tokens } from "../../lib/design-tokens";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

type SidebarProps = {
  currentModuleId?: string;
};

export function Sidebar({ currentModuleId }: SidebarProps) {
  return (
    <aside style={{ display: "grid", gap: tokens.spacing[4] }}>
      <Card style={{ padding: 24 }}>
        <Badge>{brandAssets.workspaceTagline}</Badge>
        <img src={brandAssets.logoSrc} alt={brandAssets.name} style={{ width: 112, margin: "18px 0" }} />
        <h2 style={{ margin: 0 }}>{brandAssets.name}</h2>
        <p style={{ color: tokens.colors.textSecondary }}>{brandAssets.productTagline}</p>
      </Card>
      <Card style={{ padding: 18 }}>
        {modules.map((module) => (
          <a
            key={module.id}
            href={module.href}
            style={{
              display: "grid",
              gridTemplateColumns: "32px 1fr",
              gap: 12,
              padding: "14px 0",
              color: tokens.colors.textPrimary,
              textDecoration: "none",
              fontWeight: module.id === currentModuleId ? 700 : 500,
            }}
          >
            <span>{module.index + 1}</span>
            <span>{module.title}</span>
          </a>
        ))}
      </Card>
    </aside>
  );
}
