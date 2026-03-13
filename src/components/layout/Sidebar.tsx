import { brandAssets } from "../../lib/brand-assets";
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
    <aside className="sticky top-0 hidden h-screen overflow-y-auto border-r border-[#E6DDD2] bg-[#FFFDF9] lg:block">
      <div className="p-6">
        <div className="rounded-[28px] border border-[#E7DDD2] bg-[#F6F1E8] p-5">
          <img
            src={brandAssets.logoSrc}
            alt={brandAssets.name}
            className="h-16 w-auto"
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

        <div className="mt-6 rounded-[24px] border border-[#E7DDD2] bg-white p-5">
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
                className={`w-full rounded-[22px] border p-4 text-left transition ${
                  isActive
                    ? "border-[#3F3F49] bg-[#FFF7EE]"
                    : "border-transparent bg-transparent hover:border-[#E7DDD2] hover:bg-white"
                }`}
              >
                <div className="text-[11px] font-black uppercase tracking-[0.18em] text-[#8A8379]">
                  {module.eyebrow}
                </div>
                <div className="font-display mt-2 text-[1.15rem] leading-tight text-[#3F3F49]">
                  {module.title}
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
