import { useMemo } from "react";
import type { ProgressSnapshot } from "../types/brand";
import type { Field } from "../types/fields";

type ProgressInput = {
  fields: Field[];
  values: Record<string, unknown>;
};

export function useModuleProgress({ fields, values }: ProgressInput): ProgressSnapshot {
  return useMemo(() => {
    const totalFields = fields.filter((field) => field.type !== "checkbox").length;
    const totalChecks = fields
      .filter((field) => field.type === "checkbox")
      .reduce((count, field) => count + ("options" in field ? field.options.length : 0), 0);

    const completedFields = fields.filter((field) => {
      if (field.type === "checkbox") return false;
      const value = values[field.key];
      return typeof value === "string" ? value.trim().length > 0 : Boolean(value);
    }).length;

    const completedChecks = fields
      .filter((field) => field.type === "checkbox")
      .reduce((count, field) => {
        const current = values[field.key];
        return count + (Array.isArray(current) ? current.length : 0);
      }, 0);

    const total = totalFields + totalChecks;
    const done = completedFields + completedChecks;

    return {
      completedFields,
      totalFields,
      completedChecks,
      totalChecks,
      percent: total ? Math.round((done / total) * 100) : 0,
    };
  }, [fields, values]);
}
