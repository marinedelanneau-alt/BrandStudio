import { useMemo, useState } from "react";
import { modules } from "../data/modules";
import { AppShell } from "../components/layout/AppShell";
import { Sidebar } from "../components/layout/Sidebar";
import { DashboardView } from "../components/views/DashboardView";
import { ExportView } from "../components/views/ExportView";
import { ModuleView } from "../components/views/ModuleView";
import { useBrandBookSections } from "../hooks/useBrandBookSections";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useModuleProgress } from "../hooks/useModuleProgress";
import type { BrandData, Module } from "../types/brand";

export function BrandStudioApp() {
  const [activeId, setActiveId] = useState(modules[0]?.id ?? "");
  const [data, setData] = useLocalStorage<BrandData>("brand-studio-data", {});

  const activeModule = useMemo(
    () => modules.find((module) => module.id === activeId) ?? modules[0],
    [activeId]
  );

  const activeFields = useMemo(
    () => activeModule?.steps?.flatMap((step) => step.fields) ?? [],
    [activeModule]
  );

  const progress = useModuleProgress({ fields: activeFields, values: data });

  const contentModules = useMemo(
    () => modules.filter((module) => module.kind === "module"),
    []
  );

  const completedModules = useMemo(
    () =>
      contentModules.filter((module) => isModuleComplete(module, data)).length,
    [contentModules, data]
  );

  const brandBookPairs = useBrandBookSections(data);
  const brandBookSections = useMemo(
    () =>
      brandBookPairs.map(([title, summary], index) => ({
        id: `brand-book-${index + 1}`,
        title,
        summary,
        moduleId: "brandbook",
      })),
    [brandBookPairs]
  );

  const handleChange = (key: string, value: unknown) => {
    setData((current) => ({
      ...current,
      [key]: value,
    }));
  };

  return (
    <AppShell
      sidebar={
        <Sidebar
          modules={modules}
          activeId={activeModule.id}
          setActiveId={setActiveId}
          completion={progress.percent}
          completedModules={completedModules}
          totalModules={contentModules.length}
        />
      }
    >
      <main className="min-w-0 px-6 py-8 lg:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          <section className="rounded-[32px] border border-[#E7DDD2] bg-[#FFFDF9] px-6 py-8 shadow-[0_10px_24px_rgba(25,25,25,0.04)] lg:px-8">
            <div className="mb-3 text-[11px] font-black uppercase tracking-[0.16em] text-[#8A8379]">
              {activeModule.eyebrow}
            </div>
            <h1 className="font-display max-w-4xl text-4xl leading-tight text-[#3F3F49]">
              {activeModule.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#6A635B]">
              {activeModule.subtitle}
            </p>
            {activeModule.quote ? (
              <p className="mt-5 max-w-3xl text-sm leading-7 text-[#756F67]">
                {activeModule.quote}
              </p>
            ) : null}
          </section>

          {activeModule.kind === "dashboard" ? (
            <DashboardView modules={contentModules} />
          ) : null}

          {activeModule.kind === "module" ? (
            <ModuleView module={activeModule} data={data} onChange={handleChange} />
          ) : null}

          {activeModule.kind === "export" ? (
            <ExportView sections={brandBookSections} />
          ) : null}
        </div>
      </main>
    </AppShell>
  );
}

function isModuleComplete(module: Module, data: BrandData) {
  const fields = module.steps?.flatMap((step) => step.fields) ?? [];

  if (!fields.length) {
    return false;
  }

  return fields.every((field) => {
    const value = data[field.key];

    if (field.type === "checkbox") {
      return Boolean(value);
    }

    return typeof value === "string" ? value.trim().length > 0 : Boolean(value);
  });
}
