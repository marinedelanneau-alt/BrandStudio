"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { studioNavigation } from "@/content/modules";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useBrandStore } from "@/store/useBrandStore";
import { visionModuleContent } from "@/content/vision";
import { positioningModuleContent } from "@/content/positioning";
import { toneModuleContent } from "@/content/tone";

function completion(fields: Record<string, string | boolean>, ids: string[]) {
  if (!ids.length) return 0;
  const done = ids.filter((id) => {
    const value = fields[id];
    return typeof value === "boolean" ? value : typeof value === "string" && value.trim().length > 0;
  }).length;
  return Math.round((done / ids.length) * 100);
}

export function Sidebar() {
  const pathname = usePathname();
  const fields = useBrandStore((state) => state.fields);

  const scores = {
    vision: completion(fields, visionModuleContent.requiredFields),
    positioning: completion(fields, positioningModuleContent.requiredFields),
    tone: completion(fields, toneModuleContent.requiredFields),
  };
  const global = Math.round((scores.vision + scores.positioning + scores.tone) / 3);

  return (
    <aside className="sticky top-0 hidden h-screen w-[320px] shrink-0 border-r border-[#e7e3dc] bg-white/80 px-6 py-8 backdrop-blur xl:block">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Brand Studio
          </p>
          <h2 className="text-2xl font-semibold text-stone-900">
            Une base de marque claire, structurée et réutilisable.
          </h2>
          <ProgressBar value={global} label="Progression globale" />
        </div>

        <nav className="space-y-2">
          {studioNavigation.map((item) => {
            const active = pathname === item.href;
            const progress =
              item.id === "vision"
                ? scores.vision
                : item.id === "positioning"
                  ? scores.positioning
                  : item.id === "tone"
                    ? scores.tone
                    : global;

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`block rounded-2xl border px-4 py-4 transition ${
                  active
                    ? "border-[#8b5e34] bg-[#f7f2ea] text-stone-900"
                    : "border-transparent bg-[#faf7f2] text-stone-600 hover:border-[#e7e3dc] hover:text-stone-900"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs leading-5">{item.description}</p>
                  </div>
                  <span className="text-xs font-semibold text-stone-500">{progress}%</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
