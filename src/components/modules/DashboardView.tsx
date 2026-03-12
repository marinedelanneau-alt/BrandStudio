import type { Module } from "../../types/module";
import { Card } from "../ui/Card";

export function DashboardView({ modules }: { modules: Module[] }) {
  return (
    <div style={{ display: "grid", gap: 24 }}>
      {modules.map((module) => (
        <Card key={module.id} style={{ padding: 24 }}>
          <h3>{module.title}</h3>
        </Card>
      ))}
    </div>
  );
}
