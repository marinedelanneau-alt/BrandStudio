import type { BrandBookSection } from "../../types/brand";
import { BrandBookPreview } from "../brand/BrandBookPreview";

export function ExportView({ sections }: { sections: BrandBookSection[] }) {
  return <BrandBookPreview sections={sections} />;
}
