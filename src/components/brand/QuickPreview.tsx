import type { QuickPreviewItem } from "../../types/brand";
import { Card } from "../ui/Card";

type QuickPreviewProps = {
  title: string;
  coverSrc?: string;
  items: QuickPreviewItem[];
};

export function QuickPreview({ title, coverSrc, items }: QuickPreviewProps) {
  return (
    <Card style={{ padding: 18 }}>
      {coverSrc ? <img src={coverSrc} alt={title} style={{ width: "100%", borderRadius: 20 }} /> : null}
      <h3>{title}</h3>
      <div style={{ display: "grid", gap: 10 }}>
        {items.map((item) => (
          <div key={item.id}>
            <strong>{item.label}</strong>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
