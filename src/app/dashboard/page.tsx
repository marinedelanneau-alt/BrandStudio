"use client";

import Link from "next/link";
import { Layout } from "@/components/brand-studio/Layout";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { studioNavigation } from "@/content/modules";
import { useBrandStore } from "@/store/useBrandStore";

function completion(fields: Record<string, string | boolean>, ids: string[]) {
  const done = ids.filter((id) => {
    const value = fields[id];
    return typeof value === "boolean" ? value : typeof value === "string" && value.trim().length > 0;
  }).length;
  return Math.round((done / ids.length) * 100);
}

export default function DashboardPage() {
  const fields = useBrandStore((state) => state.fields);

  const modules = [
    {
      href: "/vision",
      title: "Vision",
      body: "Pose les fondations de ta marque avec la mission, la vision, les valeurs et la promesse.",
      progress: completion(fields, ["mission", "vision", "promise", "value-0", "value-1", "value-2"]),
    },
    {
      href: "/positioning",
      title: "Positionnement",
      body: "Clarifie ta cible, ta différence et la façon dont tu veux être choisie.",
      progress: completion(fields, ["positioningTarget", "positioningProblem", "positioningDifference", "positioningFinal"]),
    },
    {
      href: "/tone",
      title: "Personnalité & ton",
      body: "Cadre le style relationnel, le ton éditorial et la baseline finale de la marque.",
      progress: completion(fields, ["tonePersona", "toneVoice", "toneDo", "toneDont", "baselineFinal"]),
    },
  ];

  const global = Math.round(modules.reduce((sum, module) => sum + module.progress, 0) / modules.length);

  return (
    <Layout
      title="Dashboard Brand Studio"
      description="Retrouve ton parcours, reprends là où tu t’es arrêté et garde une vue claire sur l’avancement global."
    >
      <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="bs-surface p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Parcours guidé
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-stone-900">
            Une app de travail claire, sauvegardée automatiquement et prête à structurer une marque vendable.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">
            Tu avances module par module, tu gardes une progression visible et tu retrouves à la fin une synthèse exploitable.
          </p>
          <div className="mt-6 max-w-md">
            <ProgressBar value={global} label="Avancement du parcours" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/vision"
              className="rounded-xl bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Continuer sur Vision
            </Link>
            <Link
              href="/summary"
              className="rounded-xl border border-[#e7e3dc] bg-[#f7f2ea] px-5 py-3 text-sm font-medium text-stone-900 transition hover:border-[#8b5e34]"
            >
              Voir la synthèse
            </Link>
          </div>
        </div>

        <div className="bs-surface p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Navigation
          </p>
          <div className="mt-4 space-y-3">
            {studioNavigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="block rounded-2xl border border-[#e7e3dc] bg-[#faf7f2] px-4 py-4 transition hover:border-[#8b5e34]"
              >
                <p className="text-sm font-semibold text-stone-900">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-stone-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {modules.map((module) => (
          <article key={module.href} className="bs-surface p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold text-stone-900">{module.title}</h3>
              <span className="rounded-full bg-[#f7f2ea] px-3 py-1 text-xs font-semibold text-stone-600">
                {module.progress}%
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-stone-600">{module.body}</p>
            <div className="mt-5">
              <ProgressBar value={module.progress} />
            </div>
            <Link
              href={module.href}
              className="mt-5 inline-flex rounded-xl border border-[#e7e3dc] px-4 py-2 text-sm font-medium text-stone-900 transition hover:border-[#8b5e34]"
            >
              Ouvrir le module
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}
