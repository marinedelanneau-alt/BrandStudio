import { modules } from "../../data/modules";
import { brandConfig } from "../../lib/brand-config";
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
        <Badge>{brandConfig.workspaceTagline}</Badge>
        <img src={brandConfig.logoSrc} alt={brandConfig.name} style={{ width: 112, margin: "18px 0" }} />
        <h2 style={{ margin: 0 }}>{brandConfig.name}</h2>
        <p style={{ color: tokens.colors.textSecondary }}>{brandConfig.productTagline}</p>
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
