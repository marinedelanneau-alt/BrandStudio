import { brandAssets } from "../../lib/brand-assets";
import { cleanText } from "../../lib/helpers";
import type { Module } from "../../types/brand";

type Props = {
  modules: Module[];
  activeId: string;
  setActiveId: (id: string) => void;
  completion: number;
  completedModules: number;
  totalModules: number;
};

export function Sidebar({
  modules,
  activeId,
  setActiveId,
  completion,
  completedModules,
  totalModules,
}: Props) {
  return (
    <aside className="sticky top-0 hidden h-screen overflow-y-auto border-r border-[rgba(231,221,210,0.8)] bg-[rgba(255,253,249,0.72)] backdrop-blur xl:block">
      <div className="p-6">
        <div className="rounded-[30px] border border-[#E7DDD2] bg-[linear-gradient(180deg,rgba(246,241,232,0.95),rgba(255,253,249,0.9))] p-5 shadow-[0_14px_32px_rgba(36,31,25,0.05)]">
          <img
            src={brandAssets.logoSrc}
            alt={brandAssets.name}
            className="h-16 w-auto drop-shadow-[0_8px_18px_rgba(25,25,25,0.08)]"
          />
          <div className="mt-4 text-[11px] font-black uppercase tracking-[0.16em] text-[#8A8379]">
            Brand Studio
          </div>
          <h1 className="font-display mt-4 text-3xl leading-tight text-[#3F3F49]">
            Ton studio de marque
          </h1>
          <p className="mt-3 text-sm leading-6 text-[#756F67]">
            Un workspace editorial pour construire une marque claire, desirable
            et activable.
          </p>
        </div>

        <div className="mt-6 rounded-[26px] border border-[#E7DDD2] bg-[rgba(255,255,255,0.84)] p-5 shadow-[0_10px_24px_rgba(25,25,25,0.04)]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-[#8A8379]">
              Progression
            </span>
            <span className="text-sm font-bold text-[#C96F2B]">{completion}%</span>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#EFE5D9]">
            <div
              className="h-full rounded-full bg-[#C96F2B]"
              style={{ width: `${completion}%` }}
            />
          </div>
          <p className="mt-3 text-sm text-[#6F695F]">
            {completedModules}/{totalModules} sections completees
          </p>
        </div>

        <nav className="mt-6 space-y-2">
          {modules.map((module) => {
            const isActive = module.id === activeId;
            return (
              <button
                key={module.id}
                onClick={() => setActiveId(module.id)}
                className={`w-full rounded-[24px] border px-4 py-4 text-left transition duration-200 ${
                  isActive
                    ? "border-[#d2c3b4] bg-[linear-gradient(180deg,rgba(255,247,238,0.98),rgba(255,253,249,0.96))] shadow-[0_10px_22px_rgba(25,25,25,0.05)]"
                    : "border-transparent bg-transparent hover:border-[#E7DDD2] hover:bg-[rgba(255,255,255,0.82)]"
                }`}
              >
                <div className="text-[11px] font-black uppercase tracking-[0.18em] text-[#8A8379]">
                  {cleanText(module.eyebrow)}
                </div>
                <div className="font-display mt-2 text-[1.15rem] leading-tight text-[#3F3F49]">
                  {cleanText(module.title)}
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
