import { useMemo } from "react";
import type { BrandBookSection, Module } from "../types/brand";

export function useBrandBookSections(modules: Module[]) {
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
