"use client";

import Link from "next/link";
import { Layout } from "@/components/brand-studio/Layout";
import { useBrandStore } from "@/store/useBrandStore";

function SummaryCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="bs-surface p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">{title}</p>
      <p className="mt-4 text-base leading-7 text-stone-700">
        {body.trim().length ? body : "À compléter dans les modules correspondants."}
      </p>
    </article>
  );
}

export default function SummaryPage() {
  const mission = useBrandStore((state) => state.mission);
  const vision = useBrandStore((state) => state.vision);
  const values = useBrandStore((state) => state.values);
  const promise = useBrandStore((state) => state.promise);

  return (
    <Layout
      title="Synthèse"
      description="Retrouve ici les formulations finales les plus importantes pour relire, ajuster et préparer une restitution propre."
    >
      <section className="grid gap-6 md:grid-cols-2">
        <SummaryCard title="Mission" body={mission} />
        <SummaryCard title="Vision" body={vision} />
        <SummaryCard title="Promesse" body={promise} />
        <article className="bs-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Valeurs</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {values.filter(Boolean).length ? (
              values.filter(Boolean).map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-[#e7e3dc] bg-[#f7f2ea] px-4 py-2 text-sm font-medium text-stone-800"
                >
                  {value}
                </span>
              ))
            ) : (
              <p className="text-base leading-7 text-stone-700">
                À compléter dans la section Valeurs du module Vision.
              </p>
            )}
          </div>
        </article>
      </section>

      <section className="bs-surface p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-stone-900">Prochaine action</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-stone-600">
          Utilise cette synthèse comme base de travail pour ton identité visuelle, ton discours commercial et tes futurs supports.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/vision"
            className="rounded-xl border border-[#e7e3dc] px-5 py-3 text-sm font-medium text-stone-900 transition hover:border-[#8b5e34]"
          >
            Revenir à Vision
          </Link>
          <Link
            href="/dashboard"
            className="rounded-xl bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
          >
            Retour au dashboard
          </Link>
        </div>
      </section>
    </Layout>
  );
}
