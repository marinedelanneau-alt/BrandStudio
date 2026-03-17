"use client";

import { Layout } from "@/components/brand-studio/Layout";
import { ModulePage } from "@/components/brand-studio/ModulePage";
import { toneModuleContent } from "@/content/tone";

export default function TonePage() {
  return (
    <Layout
      title="Personnalité & ton"
      description="Cadre l’expression de la marque pour que la personnalité, le ton éditorial et la baseline soient alignés."
    >
      <ModulePage
        module={toneModuleContent}
        nextHref="/summary"
        nextLabel="Continuer vers la synthèse"
      />
    </Layout>
  );
}
