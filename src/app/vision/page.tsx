"use client";

import { Layout } from "@/components/brand-studio/Layout";
import { ModulePage } from "@/components/brand-studio/ModulePage";
import { visionModuleContent } from "@/content/vision";

export default function VisionPage() {
  return (
    <Layout
      title="Vision"
      description="Clarifie les fondations de marque qui guideront ensuite les choix de positionnement, de ton et de déploiement."
    >
      <ModulePage
        module={visionModuleContent}
        nextHref="/positioning"
        nextLabel="Continuer vers Positionnement"
      />
    </Layout>
  );
}
