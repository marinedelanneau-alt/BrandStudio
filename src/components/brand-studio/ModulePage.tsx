"use client";

import Link from "next/link";
import { useMemo, useRef } from "react";
import type { BrandField, BrandModuleContent, BrandSection } from "@/content/brandStudioSchema";
import { SectionTitle } from "@/components/brand-studio/SectionTitle";
import { CheckboxField } from "@/components/ui/CheckboxField";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { TextareaField } from "@/components/ui/TextareaField";
import { useBrandStore } from "@/store/useBrandStore";

type ModulePageProps = {
  module: BrandModuleContent;
  nextHref: string;
  nextLabel: string;
};

function isFieldComplete(field: BrandField, value: string | boolean | undefined) {
  if (!field.required) return true;
  if (field.type === "checkbox") return Boolean(value);
  return typeof value === "string" && value.trim().length > 0;
}

function isSectionComplete(section: BrandSection, fields: Record<string, string | boolean>) {
  return section.fields.every((field) => isFieldComplete(field, fields[field.id]));
}

function moduleProgress(requiredFields: string[], fields: Record<string, string | boolean>) {
  const complete = requiredFields.filter((id) => {
    const value = fields[id];
    return typeof value === "boolean" ? value : typeof value === "string" && value.trim().length > 0;
  }).length;
  return Math.round((complete / requiredFields.length) * 100);
}

export function ModulePage({ module, nextHref, nextLabel }: ModulePageProps) {
  const fields = useBrandStore((state) => state.fields);
  const currentStep = useBrandStore((state) => state.currentStep[module.id] ?? 0);
  const updateField = useBrandStore((state) => state.updateField);
  const setCurrentStep = useBrandStore((state) => state.setCurrentStep);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const progress = useMemo(
    () => moduleProgress(module.requiredFields, fields),
    [fields, module.requiredFields]
  );

  const handleContinue = (index: number) => {
    const nextStep = Math.min(index + 1, module.sections.length - 1);
    setCurrentStep(module.id, nextStep);
    const nextSection = module.sections[nextStep];
    sectionRefs.current[nextSection.id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="space-y-6">
      <section className="bs-surface p-6 md:p-8">
        <SectionTitle
          eyebrow={module.eyebrow}
          title={module.title}
          description={module.description}
        />
        <div className="mt-6 rounded-2xl bg-[#f7f2ea] p-4">
          <ProgressBar value={progress} label="Progression du module" />
        </div>
      </section>

      {module.sections.map((section, index) => {
        const complete = isSectionComplete(section, fields);
        const active = index <= currentStep;

        return (
          <section
            key={section.id}
            id={section.id}
            ref={(node) => {
              sectionRefs.current[section.id] = node;
            }}
            className={`bs-surface p-6 md:p-8 ${active ? "" : "opacity-70"}`}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                  Section {index + 1}
                </p>
                <h2 className="text-2xl font-semibold text-stone-900">{section.title}</h2>
                <p className="max-w-3xl text-base leading-7 text-stone-600">{section.intro}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  complete
                    ? "bg-emerald-100 text-emerald-700"
                    : active
                      ? "bg-amber-100 text-amber-700"
                      : "bg-stone-100 text-stone-500"
                }`}
              >
                {complete ? "Complété" : active ? "En cours" : "À venir"}
              </span>
            </div>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-[#e7e3dc] bg-[#faf7f2] p-4">
                <p className="text-sm font-medium text-stone-900">{section.exercise}</p>
              </div>

              <div className="space-y-4">
                {section.fields.map((field) => {
                  const value = fields[field.id];

                  if (field.type === "checkbox") {
                    return (
                      <CheckboxField
                        key={field.id}
                        label={field.label}
                        helper={field.helper}
                        checked={Boolean(value)}
                        onCheckedChange={(checked) => updateField(field.id, checked)}
                      />
                    );
                  }

                  if (field.type === "text") {
                    return (
                      <label key={field.id} className="block space-y-2">
                        <span className="bs-label">{field.label}</span>
                        <input
                          className="bs-input"
                          value={typeof value === "string" ? value : ""}
                          placeholder={field.placeholder}
                          onChange={(event) => updateField(field.id, event.target.value)}
                        />
                        {field.helper ? (
                          <span className="text-xs text-stone-500">{field.helper}</span>
                        ) : null}
                      </label>
                    );
                  }

                  return (
                    <TextareaField
                      key={field.id}
                      label={field.label}
                      value={typeof value === "string" ? value : ""}
                      placeholder={field.placeholder}
                      helper={field.helper}
                      onChange={(nextValue) => updateField(field.id, nextValue)}
                    />
                  );
                })}
              </div>

              <div className="rounded-2xl border border-[#e7e3dc] bg-white p-4 text-sm leading-6 text-stone-600">
                {section.finalNote}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={() => handleContinue(index)}
                  disabled={!complete || index === module.sections.length - 1}
                  className="rounded-xl bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:bg-stone-300"
                >
                  Continuer
                </button>

                {index === module.sections.length - 1 ? (
                  <Link
                    href={nextHref}
                    className="rounded-xl border border-[#e7e3dc] bg-[#f7f2ea] px-5 py-3 text-sm font-medium text-stone-900 transition hover:border-[#8b5e34]"
                  >
                    {nextLabel}
                  </Link>
                ) : null}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
