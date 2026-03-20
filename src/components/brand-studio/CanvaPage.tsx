"use client";

import type { BrandData } from "../../types/brand";
import { ExampleBox } from "./ExampleBox";
import { ExerciseBlock } from "./ExerciseBlock";
import { FinalAnswerBlock } from "./FinalAnswerBlock";
import { SectionIntro } from "./SectionIntro";
import { SectionTitle } from "./SectionTitle";

type CanvaPageProps = {
  data: BrandData;
  onChange: (key: string, value: unknown) => void;
};

export function CanvaPage({ data, onChange }: CanvaPageProps) {
  const value =
    typeof data.canvaTemplateLink === "string" ? data.canvaTemplateLink : "";

  return (
    <div className="space-y-8 text-stone-900">
      <section className="space-y-6 rounded-[32px] border border-stone-200 bg-[#fffdf9] p-6 sm:p-8">
        <SectionTitle title="Création du document final" />
        <SectionIntro>
          Tu passes ici à la mise en forme. L'objectif est de transformer tout
          ce que tu as clarifié dans Brand Studio en document de marque prêt à
          être utilisé.
        </SectionIntro>
        <ExerciseBlock
          title="Réponds aux questions suivantes :"
          description="Ouvre le document, duplique-le avant de le modifier, puis centralise ici le lien de travail."
        >
          <ExampleBox title="Point de repère">
            Duplique toujours le fichier d'origine avant de le modifier pour
            garder une base propre et réutilisable.
          </ExampleBox>
          <FinalAnswerBlock
            title="Lien Canva du template de Brand Book"
            value={value}
            onChange={(nextValue) => onChange("canvaTemplateLink", nextValue)}
            placeholder="https://..."
          />
        </ExerciseBlock>
        <p className="rounded-2xl bg-[#f7f2ea] px-5 py-4 text-sm leading-7 text-stone-700 sm:text-base">
          Une base stratégique claire rend la mise en forme beaucoup plus simple
          et beaucoup plus cohérente.
        </p>
      </section>
    </div>
  );
}
