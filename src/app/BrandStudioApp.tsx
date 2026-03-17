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
import type { BrandData, Field, Module } from "../types/brand";

const visionMarqueFields: Field[] = [
  { key: "brandName", label: "Nom de ta marque", type: "text" },
  { key: "activity", label: "Décris ton activité", type: "textarea" },
  { key: "goal", label: "Objectif principal", type: "textarea" },
  { key: "missionAudience", label: "Mission - qui", type: "text" },
  { key: "missionOutcome", label: "Mission - action", type: "text" },
  { key: "missionMethod", label: "Mission - moyen", type: "text" },
  { key: "missionWhy", label: "Pourquoi cette activité", type: "textarea" },
  { key: "clientProblem", label: "Problème client", type: "textarea" },
  { key: "missionLong", label: "Mission longue", type: "textarea" },
  { key: "missionShort", label: "Mission courte", type: "textarea" },
  { key: "missionInternal", label: "Mission interne", type: "textarea" },
  { key: "missionFinal", label: "Mission finale", type: "textarea" },
  { key: "visionWhere", label: "Vision à 3-5 ans", type: "textarea" },
  { key: "visionImpact", label: "Impact visé", type: "textarea" },
  { key: "visionMarket", label: "Place sur le marché", type: "textarea" },
  { key: "visionClients", label: "Clients visés", type: "textarea" },
  {
    key: "transformationClientsValue",
    label: "Transformation client",
    type: "text",
  },
  {
    key: "transformationImpactValue",
    label: "Transformation globale",
    type: "text",
  },
  { key: "visionLong", label: "Vision longue", type: "textarea" },
  { key: "visionShort", label: "Vision courte", type: "textarea" },
  { key: "visionInternal", label: "Vision interne", type: "textarea" },
  { key: "visionFinal", label: "Vision finale", type: "textarea" },
  ...Array.from({ length: 10 }, (_, index) => ({
    key: `valuesBrainstorm${index + 1}`,
    label: `Mot-clé ${index + 1}`,
    type: "text" as const,
  })),
  { key: "value1", label: "Valeur 1", type: "text" },
  { key: "value1Meaning", label: "Valeur 1 - sens", type: "textarea" },
  { key: "value1Concrete", label: "Valeur 1 - concret", type: "textarea" },
  {
    key: "value1Communication",
    label: "Valeur 1 - communication",
    type: "textarea",
  },
  { key: "value1Action", label: "Valeur 1 - finale", type: "textarea" },
  { key: "value2", label: "Valeur 2", type: "text" },
  { key: "value2Meaning", label: "Valeur 2 - sens", type: "textarea" },
  { key: "value2Concrete", label: "Valeur 2 - concret", type: "textarea" },
  {
    key: "value2Communication",
    label: "Valeur 2 - communication",
    type: "textarea",
  },
  { key: "value2Action", label: "Valeur 2 - finale", type: "textarea" },
  { key: "value3", label: "Valeur 3", type: "text" },
  { key: "value3Meaning", label: "Valeur 3 - sens", type: "textarea" },
  { key: "value3Concrete", label: "Valeur 3 - concret", type: "textarea" },
  {
    key: "value3Communication",
    label: "Valeur 3 - communication",
    type: "textarea",
  },
  { key: "value3Action", label: "Valeur 3 - finale", type: "textarea" },
  { key: "beforeStateValue", label: "Avant", type: "text" },
  { key: "afterStateValue", label: "Après", type: "text" },
  { key: "promisedResult", label: "Résultat promis", type: "textarea" },
  {
    key: "promisedExperience",
    label: "Expérience promise",
    type: "textarea",
  },
  { key: "promisedPosture", label: "Posture promise", type: "textarea" },
  { key: "promiseExplicit", label: "Promesse explicite", type: "textarea" },
  { key: "promiseIntegrated", label: "Promesse intégrée", type: "textarea" },
  { key: "promiseFinal", label: "Promesse finale", type: "textarea" },
];

export function BrandStudioApp() {
  const [activeId, setActiveId] = useState(modules[0]?.id ?? "");
  const [data, setData] = useLocalStorage<BrandData>("brand-studio-data", {});

  const activeModule = useMemo(
    () => modules.find((module) => module.id === activeId) ?? modules[0],
    [activeId]
  );

  const activeFields = useMemo(
    () => getTrackedFields(activeModule),
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

  const activeSubtitle =
    activeModule.id === "vision-marque"
      ? "Dans cette section, on va travailler sur l'ADN de ta marque. L'ADN, c'est le socle de tout : pourquoi ta marque existe, ce qu'elle défend et ce qui la rend unique."
      : activeModule.subtitle;

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
              {activeSubtitle}
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
  const fields = getTrackedFields(module);

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

function getTrackedFields(module: Module) {
  if (module.id === "vision-marque") {
    return visionMarqueFields;
  }

  return module.steps?.flatMap((step) => step.fields) ?? [];
}
