import type { ReactNode } from "react";
import type { ProgressSnapshot } from "../../types/brand";
import { tokens } from "../../lib/design-tokens";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

type AppShellProps = {
  title: string;
  progress: ProgressSnapshot;
  currentModuleId?: string;
  aside?: ReactNode;
  children: ReactNode;
};

export function AppShell({ title, progress, currentModuleId, aside, children }: AppShellProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "288px minmax(0, 1fr) 312px",
        gap: tokens.spacing[8],
        width: "min(1460px, calc(100vw - 48px))",
        margin: "28px auto 124px",
      }}
    >
      <Sidebar currentModuleId={currentModuleId} />
      <main style={{ display: "grid", gap: tokens.spacing[4] }}>
        <Topbar title={title} progress={progress} />
        {children}
      </main>
      <aside>{aside}</aside>
    </div>
  );
}
