import { modules } from "../data/modules";
import { QuickPreview } from "../components/brand/QuickPreview";
import { AppShell } from "../components/layout/AppShell";

export function BrandStudioApp() {
  const currentModule = modules[1];

  return (
    <AppShell
      title={currentModule.title}
      progress={{
        completedFields: 0,
        totalFields: 0,
        completedChecks: 0,
        totalChecks: 0,
        percent: 0,
      }}
      currentModuleId={currentModule.id}
      aside={
        <QuickPreview
          title={currentModule.title}
          coverSrc={currentModule.banner}
          items={[
            { id: "1", label: "Module", value: currentModule.title },
            { id: "2", label: "Progression", value: "0%" },
            { id: "3", label: "Etat", value: "Architecture prete a migrer" },
          ]}
        />
      }
    >
      <div />
    </AppShell>
  );
}
