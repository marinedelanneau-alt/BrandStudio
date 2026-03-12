import type { BrandData, Module } from "../../types/brand";
import { cleanText } from "../../lib/helpers";
import { AudioNote } from "../blocks/AudioNote";
import { ChecklistBlock } from "../blocks/ChecklistBlock";
import { CoachTip } from "../blocks/CoachTip";
import { ExampleBlock } from "../blocks/ExampleBlock";
import { InsightBlock } from "../blocks/InsightBlock";
import { SummaryBlock } from "../blocks/SummaryBlock";
import { FieldBlock } from "../forms/FieldBlock";
import { Card } from "../ui/Card";

type Props = {
  module: Module;
  data: BrandData;
  onChange: (key: string, value: unknown) => void;
};

export function ModuleView({ module, data, onChange }: Props) {
  return (
    <div className="space-y-8">
      {module.introNote ? (
        <CoachTip title="Introduction">{cleanText(module.introNote)}</CoachTip>
      ) : null}

      {module.example ? <ExampleBlock>{cleanText(module.example)}</ExampleBlock> : null}

      {(module.steps ?? []).map((step, index) => {
        const summary = Object.fromEntries(
          (step.summaryFields || []).map((fieldKey) => {
            const field = step.fields.find((item) => item.key === fieldKey);
            return [
              cleanText(field?.label || fieldKey),
              formatSummaryValue(data[fieldKey]),
            ];
          })
        );

        return (
          <Card key={step.id} className="space-y-6 px-6 py-6 lg:px-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#3F3F49] bg-[#F0D64A] text-sm font-black text-[#3F3F49]">
                {index + 1}
              </div>
              <div>
                <h3 className="font-display text-[1.8rem] leading-tight text-[#3F3F49]">
                  {cleanText(step.title)}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-[#6A635B]">
                  {cleanText(step.description)}
                </p>
              </div>
            </div>

            {step.note ? <CoachTip>{cleanText(step.note)}</CoachTip> : null}

            {step.audioTitle ? (
              <AudioNote
                title={cleanText(step.audioTitle)}
                description={step.audioDescription ? cleanText(step.audioDescription) : undefined}
              />
            ) : null}

            {step.insight ? (
              <InsightBlock title={step.insightTitle ? cleanText(step.insightTitle) : undefined}>
                {cleanText(step.insight)}
              </InsightBlock>
            ) : null}

            {step.exampleText ? <ExampleBlock>{cleanText(step.exampleText)}</ExampleBlock> : null}

            {step.checklist?.length ? (
              <ChecklistBlock>
                {step.checklist.map((item) => (
                  <label
                    key={item}
                    className="flex items-start gap-3 rounded-[18px] border border-[#E7DDD2] bg-white px-4 py-4"
                  >
                    <input type="checkbox" className="mt-1 h-4 w-4" />
                    <span>{cleanText(item)}</span>
                  </label>
                ))}
              </ChecklistBlock>
            ) : null}

            <div className="grid gap-5">
              {step.fields.map((field) => (
                <FieldBlock
                  key={field.key}
                  moduleId={module.id}
                  field={{
                    ...field,
                    label: cleanText(field.label),
                    placeholder: field.placeholder ? cleanText(field.placeholder) : undefined,
                  }}
                  value={data[field.key]}
                  onChange={onChange}
                />
              ))}
            </div>

            <SummaryBlock values={summary} />
          </Card>
        );
      })}
    </div>
  );
}

function formatSummaryValue(value: unknown) {
  if (typeof value === "string") {
    return cleanText(value);
  }

  if (Array.isArray(value)) {
    return value.filter(Boolean).map((item) => cleanText(String(item))).join(", ");
  }

  if (value && typeof value === "object") {
    return cleanText(JSON.stringify(value));
  }

  return "";
}
