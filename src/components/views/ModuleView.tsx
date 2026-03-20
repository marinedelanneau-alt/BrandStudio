"use client";

import type { BrandData, Module } from "../../types/brand";
import { CoachTip } from "../blocks/CoachTip";
import { ExampleBlock } from "../blocks/ExampleBlock";
import { InsightBlock } from "../blocks/InsightBlock";
import { SummaryBlock } from "../blocks/SummaryBlock";
import { CanvaPage } from "../brand-studio/CanvaPage";
import { PositioningPage } from "../brand-studio/PositioningPage";
import { TonePage } from "../brand-studio/TonePage";
import { VisionPage } from "../brand-studio/vision/VisionPage";
import { FieldBlock } from "../forms/FieldBlock";
import { Card } from "../ui/Card";

type Props = {
  module: Module;
  data: BrandData;
  onChange: (key: string, value: unknown) => void;
};

export function ModuleView({ module, data, onChange }: Props) {
  if (module.id === "vision-marque") {
    return <VisionPage data={data} onChange={onChange} />;
  }

  if (module.id === "positionnement") {
    return <PositioningPage data={data} onChange={onChange} />;
  }

  if (module.id === "personnalite-ton") {
    return <TonePage data={data} onChange={onChange} />;
  }

  if (module.id === "creation-document") {
    return <CanvaPage data={data} onChange={onChange} />;
  }

  return (
    <div className="space-y-8">
      {module.introNote ? (
        <CoachTip title="Introduction">{module.introNote}</CoachTip>
      ) : null}

      {module.example ? <ExampleBlock>{module.example}</ExampleBlock> : null}

      {(module.steps ?? []).map((step, index) => {
        const summary = Object.fromEntries(
          (step.summaryFields || []).map((fieldKey) => {
            const field = step.fields.find((f) => f.key === fieldKey);
            return [field?.label || fieldKey, String(data[fieldKey] ?? "")];
          })
        );

        return (
          <Card key={step.id} className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#3F3F49] bg-[#F0D64A] text-sm font-black text-[#3F3F49]">
                {index + 1}
              </div>
              <div>
                <h3 className="font-display text-[1.8rem] leading-tight text-[#3F3F49]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-[#6A635B]">
                  {step.description}
                </p>
              </div>
            </div>

            {step.note ? <CoachTip>{step.note}</CoachTip> : null}
            {step.insight ? (
              <InsightBlock title={step.insightTitle}>{step.insight}</InsightBlock>
            ) : null}
            {step.exampleText ? <ExampleBlock>{step.exampleText}</ExampleBlock> : null}

            <div className="space-y-5">
              {step.fields.map((field) => (
                <FieldBlock
                  key={field.key}
                  moduleId={module.id}
                  field={field}
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
