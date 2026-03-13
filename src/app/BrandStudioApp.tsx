import { useMemo, useState } from "react";
import { modules } from "../data/modules";
import { BrandBookPreview } from "../components/brand/BrandBookPreview";
import { QuickPreview } from "../components/brand/QuickPreview";
import { HeroPanel } from "../components/blocks/HeroPanel";
import { AppShell } from "../components/layout/AppShell";
import { Sidebar } from "../components/layout/Sidebar";
import { StepNavigation } from "../components/layout/StepNavigation";
import { Topbar } from "../components/layout/Topbar";
import { DashboardView } from "../components/views/DashboardView";
import { ExportView } from "../components/views/ExportView";
import { ModuleView } from "../components/views/ModuleView";
import { useBrandBookSections } from "../hooks/useBrandBookSections";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useModuleProgress } from "../hooks/useModuleProgress";
import { brandAssets } from "../lib/brand-assets";
import type { BrandData, Module } from "../types/brand";

export function BrandStudioApp() {
  const [activeId, setActiveId] = useState(modules[0]?.id ?? "");
  const [data, setData] = useLocalStorage<BrandData>("brand-studio-data", {});

  const activeModule = useMemo(
    () => modules.find((module) => module.id === activeId) ?? modules[0],
    [activeId]
  );

  const moduleIndex = useMemo(
    () => modules.findIndex((module) => module.id === activeModule.id),
    [activeModule.id]
  );

  const previousModule = moduleIndex > 0 ? modules[moduleIndex - 1] : undefined;
  const nextModule =
    moduleIndex >= 0 && moduleIndex < modules.length - 1
      ? modules[moduleIndex + 1]
      : undefined;

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

  const quickPreviewItems = useMemo(
    () => [
      { id: "kind", label: "Type", value: activeModule.kind },
      { id: "progress", label: "Progression", value: `${progress.percent}%` },
      {
        id: "structure",
        label: "Structure",
        value: `${activeModule.steps?.length ?? activeModule.sections?.length ?? 0} blocs`,
      },
    ],
    [activeModule, progress.percent]
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
      <main className="min-w-0 px-4 py-4 lg:px-8 lg:py-6">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6">
          <Topbar title={activeModule.title} progress={progress} />

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
            <div className="grid gap-6">
              <HeroPanel
                kicker={activeModule.eyebrow}
                title={activeModule.title}
                description={activeModule.subtitle}
                visual={
                  <img
                    src={activeModule.banner || brandAssets.heroCollageSrc}
                    alt={activeModule.title}
                    className="max-h-[280px] w-full object-contain"
                  />
                }
              />

              {activeModule.kind === "dashboard" ? (
                <DashboardView
                  modules={contentModules}
                  activeId={activeModule.id}
                  onSelect={setActiveId}
                />
              ) : null}

              {activeModule.kind === "module" ? (
                <ModuleView module={activeModule} data={data} onChange={handleChange} />
              ) : null}

              {activeModule.kind === "export" ? (
                <ExportView sections={brandBookSections} />
              ) : null}

              <StepNavigation
                previousLabel={previousModule ? previousModule.title : undefined}
                nextLabel={nextModule ? nextModule.title : undefined}
                onPrevious={
                  previousModule ? () => setActiveId(previousModule.id) : undefined
                }
                onNext={nextModule ? () => setActiveId(nextModule.id) : undefined}
              />
            </div>

            <aside className="grid gap-6 xl:sticky xl:top-6 xl:self-start">
              <QuickPreview
                title={activeModule.title}
                coverSrc={activeModule.banner || brandAssets.sideCollageSrc}
                items={quickPreviewItems}
              />
              <BrandBookPreview sections={brandBookSections.slice(0, 6)} />
            </aside>
          </div>
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

    if (Array.isArray(value)) {
      return value.length > 0;
    }

    if (value && typeof value === "object") {
      return Object.keys(value).length > 0;
    }

    return typeof value === "string" ? value.trim().length > 0 : Boolean(value);
  });
}
