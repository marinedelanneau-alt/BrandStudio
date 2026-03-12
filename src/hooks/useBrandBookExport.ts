import { useMemo } from "react";
import type { BrandBookSection } from "../types/brand";
import type { Module } from "../types/module";

export function useBrandBookExport(modules: Module[]) {
  return useMemo<BrandBookSection[]>(() => {
    return modules.map((module) => ({
      id: module.id,
      title: module.title,
      moduleId: module.id,
      summary:
        module.steps[0]?.description ||
        "Synthese du module prete a etre transformee en livrable Brand Book.",
    }));
  }, [modules]);
}
