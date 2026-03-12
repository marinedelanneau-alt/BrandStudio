import { AppShell } from "../components/layout/AppShell";
import { QuickPreview } from "../components/brand/QuickPreview";
import { modules } from "../data/modules";
import { modules as allModules } from "../data/modules";

export default function Page() {
  const currentModule = modules[1];
  const progress = {
    completedFields: 0,
    totalFields: 0,
    completedChecks: 0,
    totalChecks: 0,
    percent: 0,
  };
  const sections = allModules.map((module) => ({
    id: module.id,
    title: module.title,
    moduleId: module.id,
    summary: "Synthese du module prete a etre transformee en livrable Brand Book.",
  }));

  return (
    <AppShell
      title={currentModule.title}
      progress={progress}
      currentModuleId={currentModule.id}
      aside={
        <QuickPreview
          title={currentModule.title}
          coverSrc={currentModule.coverSrc}
          items={[
            { id: "1", label: "Module", value: currentModule.title },
            { id: "2", label: "Progression", value: `${progress.percent}%` },
            { id: "3", label: "Brand Book", value: `${sections.length} sections` },
          ]}
        />
      }
    >
      <div />
    </AppShell>
  );
}
