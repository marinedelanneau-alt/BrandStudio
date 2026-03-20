import type { BrandData, Field } from "../../types/brand";
import { toneContent } from "../../content/tone";
import { ExampleBox } from "./ExampleBox";
import { ExerciseBlock } from "./ExerciseBlock";
import { FinalAnswerBlock } from "./FinalAnswerBlock";
import { PromptList } from "./PromptList";
import { SectionIntro } from "./SectionIntro";
import { SectionTitle } from "./SectionTitle";
import { TextareaBlock } from "./TextareaBlock";
import { FieldBlock } from "../forms/FieldBlock";

type TonePageProps = {
  data: BrandData;
  onChange: (key: string, value: unknown) => void;
};

function isSimpleField(field: { type?: string }) {
  return field.type === "text" || field.type === "textarea";
}

export function TonePage({ data, onChange }: TonePageProps) {
  const getValue = (key: string) =>
    typeof data[key] === "string" ? String(data[key]) : "";

  return (
    <div className="space-y-8 text-stone-900">
      {toneContent.sections.map((section) => (
        <section
          key={section.id}
          className="space-y-6 rounded-[32px] border border-stone-200 bg-[#fffdf9] p-6 sm:p-8"
        >
          <SectionTitle title={section.title} />
          <SectionIntro>{section.intro}</SectionIntro>
          <ExerciseBlock
            title={section.exerciseTitle}
            description="Travaille ce bloc avec précision pour construire une identité plus cohérente."
          >
            <PromptList
              items={[
                "Prends le temps de répondre avec des exemples concrets.",
                "Cherche la cohérence plus que l'effet.",
                "Garde ce qui pourra vraiment guider tes choix ensuite.",
              ]}
            />
          </ExerciseBlock>
          <ExampleBox title="Point de repère">{section.example}</ExampleBox>
          <div className="space-y-5 rounded-3xl border border-stone-200 bg-white p-6 sm:p-8">
            {section.answers.map((field) =>
              isSimpleField(field) ? (
                field.type === "text" ? (
                  <FieldBlock
                    key={field.key}
                    moduleId="personnalite-ton"
                    field={field as Field}
                    value={data[field.key]}
                    onChange={onChange}
                  />
                ) : (
                  <TextareaBlock
                    key={field.key}
                    label={field.label}
                    value={getValue(field.key)}
                    onChange={(value) => onChange(field.key, value)}
                    placeholder={field.placeholder || ""}
                  />
                )
              ) : (
                <FieldBlock
                  key={field.key}
                  moduleId="personnalite-ton"
                  field={field as Field}
                  value={data[field.key]}
                  onChange={onChange}
                />
              )
            )}
            {"finalField" in section ? (
              <FinalAnswerBlock
                title={section.finalField.label}
                value={getValue(section.finalField.key)}
                onChange={(value) => onChange(section.finalField.key, value)}
                placeholder={section.finalField.placeholder}
              />
            ) : null}
          </div>
          <p className="rounded-2xl bg-[#f7f2ea] px-5 py-4 text-sm leading-7 text-stone-700 sm:text-base">
            {section.final}
          </p>
        </section>
      ))}
    </div>
  );
}
