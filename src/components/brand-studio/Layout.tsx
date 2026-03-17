"use client";

import type { ReactNode } from "react";
import { Sidebar } from "@/components/brand-studio/Sidebar";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useBrandStore } from "@/store/useBrandStore";

type LayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

function completion(fields: Record<string, string | boolean>) {
  const keys = ["mission", "vision", "promise", "value-0", "value-1", "value-2", "positioningFinal", "baselineFinal"];
  const done = keys.filter((key) => {
    const value = fields[key];
    return typeof value === "boolean" ? value : typeof value === "string" && value.trim().length > 0;
  }).length;
  return Math.round((done / keys.length) * 100);
}

export function Layout({ title, description, children }: LayoutProps) {
  const fields = useBrandStore((state) => state.fields);
  const hydrated = useBrandStore((state) => state.hydrated);
  const global = completion(fields);

  return (
    <div className="min-h-screen bg-[#f7f2ea] text-stone-900">
      <div className="mx-auto flex max-w-[1600px]">
        <Sidebar />
        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-5xl space-y-6">
            <header className="bs-surface p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                    Application SaaS
                  </p>
                  <h1 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
                    {title}
                  </h1>
                  <p className="max-w-3xl text-base leading-7 text-stone-600">{description}</p>
                </div>
                <div className="min-w-[220px] space-y-3">
                  <div className="rounded-2xl bg-[#f7f2ea] px-4 py-3 text-sm text-stone-600">
                    {hydrated ? "Sauvegarde automatique active" : "Initialisation de la sauvegarde..."}
                  </div>
                  <ProgressBar value={global} label="Progression globale" />
                </div>
              </div>
            </header>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
