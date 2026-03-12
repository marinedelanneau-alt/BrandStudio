import type { Module } from "../../types/module";
import { Card } from "../ui/Card";

export function ModuleView({ module }: { module: Module }) {
  return (
    <Card style={{ padding: 32 }}>
      <h2>{module.title}</h2>
      <p>Vue modulaire React/TypeScript prete a recevoir les contenus du module.</p>
    </Card>
  );
}
