import type { PropsWithChildren, ReactNode } from "react";

export function AppShell({
  sidebar,
  children,
}: PropsWithChildren<{ sidebar: ReactNode }>) {
  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#3F3F49]">
      <div className="grid min-h-screen lg:grid-cols-[320px_1fr]">
        {sidebar}
        {children}
      </div>
    </div>
  );
}
