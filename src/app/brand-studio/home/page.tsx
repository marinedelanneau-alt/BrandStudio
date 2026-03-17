"use client";

import { useState } from "react";
import { DashboardView } from "../../../components/views/DashboardView";
import { modules } from "../../../data/modules";

export default function BrandStudioHomeRoute() {
  const [, setActiveId] = useState("dashboard");
  const contentModules = modules.filter((module) => module.kind === "module");

  return (
    <main className="min-h-screen bg-[#F6F1E8] px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <DashboardView
          modules={contentModules}
          onOpenModule={(id) => setActiveId(id)}
        />
      </div>
    </main>
  );
}
