import type { BrandBookSection } from "../../types/brand";
import { Card } from "../ui/Card";

export function BrandBookPreview({ sections }: { sections: BrandBookSection[] }) {
  return (
    <Card style={{ padding: 18 }}>
      <h3>Livrable en cours</h3>
      <div style={{ display: "grid", gap: 12 }}>
        {sections.map((section) => (
          <div key={section.id}>
            <strong>{section.title}</strong>
            <p>{section.summary}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
