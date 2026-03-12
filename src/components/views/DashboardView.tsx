import type { Module } from "../../types/brand";
import { cleanText } from "../../lib/helpers";
import { CoachTip } from "../blocks/CoachTip";
import { ExampleBlock } from "../blocks/ExampleBlock";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

type DashboardViewProps = {
  modules: Module[];
  activeId?: string;
  onSelect?: (id: string) => void;
  introSections?: Array<{ title: string; body: string }>;
  quote?: string;
};

export function DashboardView({
  modules,
  activeId,
  onSelect,
  introSections,
  quote,
}: DashboardViewProps) {
  return (
    <div className="grid gap-6">
      {quote ? <ExampleBlock>{cleanText(quote)}</ExampleBlock> : null}

      {introSections?.length ? (
        <div className="grid gap-5 lg:grid-cols-2">
          {introSections.map((section) => (
            <CoachTip key={section.title} title={cleanText(section.title)}>
              {cleanText(section.body)}
            </CoachTip>
          ))}
        </div>
      ) : null}

      <div className="grid gap-5 lg:grid-cols-2">
        {modules.map((module) => (
          <Card
            key={module.id}
            className="group flex h-full flex-col gap-5 border-[rgba(231,221,210,0.88)] bg-[rgba(255,253,249,0.86)] px-6 py-6"
            style={
              module.id === activeId
                ? {
                    borderColor: "#d8cbc0",
                    background: "linear-gradient(180deg, rgba(255,247,238,0.98), rgba(255,253,249,0.94))",
                  }
                : undefined
            }
          >
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8A8379]">
              {cleanText(module.eyebrow)}
            </div>
            <div>
              <h3 className="font-display text-[1.68rem] leading-tight text-[#3F3F49]">
                {cleanText(module.title)}
              </h3>
              <p className="mt-3 text-[0.96rem] leading-8 text-[#756F67]">
                {cleanText(module.subtitle)}
              </p>
            </div>
            <div className="mt-auto flex items-center justify-between gap-3">
              <span className="text-xs font-medium text-[#8A8379]">
                {module.steps?.length ?? module.sections?.length ?? 0} blocs
              </span>
              <Button
                variant={module.id === activeId ? "primary" : "secondary"}
                onClick={() => onSelect?.(module.id)}
              >
                Ouvrir
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
