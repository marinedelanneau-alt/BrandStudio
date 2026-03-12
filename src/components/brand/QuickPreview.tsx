import type { QuickPreviewItem } from "../../types/brand";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

type QuickPreviewProps = {
  title: string;
  coverSrc?: string;
  items: QuickPreviewItem[];
};

export function QuickPreview({ title, coverSrc, items }: QuickPreviewProps) {
  return (
    <Card className="overflow-hidden border-[rgba(231,221,210,0.88)] bg-[rgba(255,253,249,0.8)] px-5 py-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <Badge>Quick preview</Badge>
        <span className="text-xs font-medium text-[#8A8379]">Lecture guidee</span>
      </div>
      {coverSrc ? (
        <img
          src={coverSrc}
          alt={title}
          className="mb-4 aspect-[16/10] w-full rounded-[20px] border border-[#E7DDD2] object-cover"
        />
      ) : null}
      <h3 className="font-display text-[1.45rem] leading-tight text-[#3F3F49]">
        {title}
      </h3>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-[18px] border border-[#E7DDD2] bg-[linear-gradient(180deg,rgba(246,241,232,0.92),rgba(255,255,255,0.9))] px-4 py-3"
          >
            <div className="text-[11px] font-black uppercase tracking-[0.16em] text-[#8A8379]">
              {item.label}
            </div>
            <div className="mt-1 text-sm leading-6 text-[#3F3F49]">{item.value}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
