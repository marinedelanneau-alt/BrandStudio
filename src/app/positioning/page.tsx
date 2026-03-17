"use client";

import { Layout } from "@/components/brand-studio/Layout";
import { ModulePage } from "@/components/brand-studio/ModulePage";
import { positioningModuleContent } from "@/content/positioning";

export default function PositioningPage() {
  return (
    <Layout
      title="Positionnement"
      description="Rends ta marque plus lisible avec une cible claire, une différence nette et un angle qui se défend facilement."
    >
      <ModulePage
        module={positioningModuleContent}
        nextHref="/tone"
        nextLabel="Continuer vers Personnalité & ton"
      />
    </Layout>
  );
}
