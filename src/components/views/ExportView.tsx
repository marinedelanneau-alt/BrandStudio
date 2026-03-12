import type { BrandBookSection } from "../../types/brand";
import { BrandBookPreview } from "../brand/BrandBookPreview";
import { ExampleBlock } from "../blocks/ExampleBlock";
import { SummaryBlock } from "../blocks/SummaryBlock";

export function ExportView({ sections }: { sections: BrandBookSection[] }) {
  return (
    <div className="grid gap-6">
      <ExampleBlock>
        Tous les reperes saisis dans les modules precedents sont rassembles ici
        pour former un livrable de studio plus clair, plus presentable et plus
        facile a reutiliser.
      </ExampleBlock>
      <BrandBookPreview sections={sections} />
      <SummaryBlock
        values={{
          "Sections pretes": String(sections.length),
          "Etat du livrable":
            sections.length > 0
              ? "Le Brand Book commence a prendre forme."
              : "",
        }}
      />
    </div>
  );
}
