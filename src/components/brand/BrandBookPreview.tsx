import type { BrandBookSection } from "../../types/brand";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

export function BrandBookPreview({ sections }: { sections: BrandBookSection[] }) {
  return (
    <Card className="px-5 py-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <Badge>Brand Book preview</Badge>
        <span className="text-xs font-medium text-[#8A8379]">{sections.length} sections</span>
      </div>
      <h3 className="font-display text-[1.6rem] leading-tight text-[#3F3F49]">
        Livrable en cours
      </h3>
      <div className="mt-4 grid gap-3">
        {sections.map((section) => (
          <div
            key={section.id}
            className="rounded-[18px] border border-[#E7DDD2] bg-white px-4 py-4"
          >
            <strong className="block text-sm text-[#3F3F49]">{section.title}</strong>
            <p className="mt-2 text-sm leading-6 text-[#756F67]">{section.summary}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
