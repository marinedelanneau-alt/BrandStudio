import { useRef } from "react";
import { CTASection } from "../brand-studio/home/CTASection";
import { FeatureCard } from "../brand-studio/home/FeatureCard";
import { HeroSection } from "../brand-studio/home/HeroSection";
import { ProblemList } from "../brand-studio/home/ProblemList";
import { SectionBlock } from "../brand-studio/home/SectionBlock";
import { homeContent } from "../../content/home";
import type { Module } from "../../types/brand";

type DashboardViewProps = {
  modules: Module[];
  onOpenModule: (id: string) => void;
};

export function DashboardView({ modules, onOpenModule }: DashboardViewProps) {
  const parcoursRef = useRef<HTMLElement | null>(null);
  const availableModuleIds = new Set(modules.map((module) => module.id));

  const goToVision = () => onOpenModule("vision-marque");
  const goToAbout = () => onOpenModule("about");
  const scrollToParcours = () =>
    parcoursRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="space-y-8">
      <HeroSection
        pretitle={homeContent.hero.pretitle}
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        primaryLabel={homeContent.hero.primaryCta}
        secondaryLabel={homeContent.hero.secondaryCta}
        onPrimaryClick={goToVision}
        onSecondaryClick={scrollToParcours}
      />

      <SectionBlock
        title={homeContent.problem.title}
        intro={homeContent.problem.intro}
      >
        <ProblemList items={homeContent.problem.items} />
      </SectionBlock>

      <SectionBlock
        title={homeContent.promise.title}
        intro={homeContent.promise.intro}
      >
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <FeatureCard
            eyebrow={homeContent.promise.beforeTitle}
            title="Ce qui freine aujourd'hui"
            description={homeContent.promise.beforeBody}
          />
          <FeatureCard
            eyebrow={homeContent.promise.afterTitle}
            title="Ce que tu construis ensuite"
            description={homeContent.promise.afterBody}
          />
        </div>
        <ProblemList items={homeContent.promise.benefits} />
      </SectionBlock>

      <SectionBlock
        title={homeContent.about.title}
        intro={homeContent.about.intro}
      >
        <FeatureCard
          title={homeContent.about.cardTitle}
          description={homeContent.about.cardBody}
          onClick={goToAbout}
        />
      </SectionBlock>

      <section ref={parcoursRef}>
        <SectionBlock
          title={homeContent.modules.title}
          intro={homeContent.modules.intro}
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {homeContent.modules.cards
              .filter((card) => availableModuleIds.has(card.id))
              .map((card) => (
              <FeatureCard
                key={card.id}
                eyebrow={card.eyebrow}
                title={card.title}
                description={card.description}
                onClick={() => onOpenModule(card.id)}
              />
            ))}
          </div>
        </SectionBlock>
      </section>

      <SectionBlock title={homeContent.method.title} intro={homeContent.method.intro}>
        <div className="grid gap-4 lg:grid-cols-3">
          {homeContent.method.items.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.body}
            />
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        title={homeContent.experience.title}
        intro={homeContent.experience.intro}
      >
        <ProblemList items={homeContent.experience.items} />
      </SectionBlock>

      <CTASection
        title={homeContent.cta.title}
        body={homeContent.cta.body}
        primaryLabel={homeContent.cta.primaryCta}
        secondaryLabel={homeContent.cta.secondaryCta}
        onPrimaryClick={goToVision}
        onSecondaryClick={goToAbout}
      />
    </div>
  );
}
