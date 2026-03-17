import type { ReactNode } from "react";
import type { BrandData } from "../../../types/brand";
import {
  visionPageContent,
  type VisionPrompt,
  type VisionValueBlock,
} from "../../../content/vision";
import { ExampleBox } from "../ExampleBox";
import { ExerciseBlock } from "../ExerciseBlock";
import { FinalAnswerBlock } from "../FinalAnswerBlock";
import { InlineInput } from "../InlineInput";
import { PromptList } from "../PromptList";
import { SectionIntro } from "../SectionIntro";
import { SectionTitle } from "../SectionTitle";
import { TextareaBlock } from "../TextareaBlock";
import { ConsistencyCheck } from "./ConsistencyCheck";

type VisionPageProps = {
  data: BrandData;
  onChange: (key: string, value: unknown) => void;
};

function SectionBlock({ children }: { children: ReactNode }) {
  return (
    <section className="space-y-6 rounded-[32px] border border-stone-200 bg-[#fffdf9] p-6 sm:p-8">
      {children}
    </section>
  );
}

function FinalTakeaway({ children }: { children: string }) {
  return (
    <p className="rounded-2xl bg-[#f7f2ea] px-5 py-4 text-sm leading-7 text-stone-700 sm:text-base">
      {children}
    </p>
  );
}

function useValueHelpers(data: BrandData, onChange: VisionPageProps["onChange"]) {
  const getValue = (key: string) =>
    typeof data[key] === "string" ? String(data[key]) : "";

  const updateValue = (key: string, value: string) => onChange(key, value);

  const updateMissionFormula = (
    part: "audience" | "outcome" | "method",
    value: string
  ) => {
    const nextAudience = part === "audience" ? value : getValue("missionAudience");
    const nextOutcome = part === "outcome" ? value : getValue("missionOutcome");
    const nextMethod = part === "method" ? value : getValue("missionMethod");

    updateValue(
      "missionFormula",
      `Ma marque existe pour aider ${nextAudience} à ${nextOutcome} grâce à ${nextMethod}.`
    );

    updateValue(
      part === "audience"
        ? "missionAudience"
        : part === "outcome"
          ? "missionOutcome"
          : "missionMethod",
      value
    );
  };

  const updateSentence = (fieldKey: string, prefix: string, value: string) => {
    updateValue(fieldKey, `${prefix}${value}.`);
  };

  return { getValue, updateValue, updateMissionFormula, updateSentence };
}

function PromptFields({
  prompts,
  getValue,
  updateValue,
}: {
  prompts: ReadonlyArray<VisionPrompt>;
  getValue: (key: string) => string;
  updateValue: (key: string, value: string) => void;
}) {
  return (
    <div className="grid gap-5">
      {prompts.map((prompt) => (
        <TextareaBlock
          key={prompt.key}
          label={prompt.label}
          value={getValue(prompt.key)}
          onChange={(value) => updateValue(prompt.key, value)}
          placeholder={prompt.placeholder}
        />
      ))}
    </div>
  );
}

function ValueCard({
  index,
  block,
  getValue,
  updateValue,
}: {
  index: number;
  block: VisionValueBlock;
  getValue: (key: string) => string;
  updateValue: (key: string, value: string) => void;
}) {
  return (
    <div className="space-y-4 rounded-2xl border border-stone-200 bg-[#f7f2ea] p-5">
      <label className="block space-y-3">
        <span className="text-sm font-medium text-stone-700">{`Valeur ${index}`}</span>
        <InlineInput
          ariaLabel={`Valeur ${index}`}
          value={getValue(block.valueKey)}
          onChange={(value) => updateValue(block.valueKey, value)}
          placeholder="Nom de la valeur"
          className="block w-full"
        />
      </label>
      <TextareaBlock
        label="Cela signifie que je..."
        value={getValue(block.meaningKey)}
        onChange={(value) => updateValue(block.meaningKey, value)}
        placeholder="Décris ce que cette valeur implique pour toi."
      />
      <TextareaBlock
        label="Concrètement, cela se traduit par..."
        value={getValue(block.concreteKey)}
        onChange={(value) => updateValue(block.concreteKey, value)}
        placeholder="Donne une traduction concrète dans ton activité."
      />
      <TextareaBlock
        label="Dans ma communication, cela donne..."
        value={getValue(block.communicationKey)}
        onChange={(value) => updateValue(block.communicationKey, value)}
        placeholder="Explique comment cette valeur se voit dans ta communication."
      />
      <FinalAnswerBlock
        title={`Formulation finale de la valeur ${index}`}
        value={getValue(block.finalKey)}
        onChange={(value) => updateValue(block.finalKey, value)}
        placeholder="Formule une explication claire, concrète et exploitable."
      />
    </div>
  );
}

export function VisionPage({ data, onChange }: VisionPageProps) {
  const { getValue, updateValue, updateMissionFormula, updateSentence } =
    useValueHelpers(data, onChange);

  return (
    <div className="space-y-8 text-stone-900">
      <SectionBlock>
        <SectionTitle title={visionPageContent.intro.title} />
        <SectionIntro>{visionPageContent.intro.intro}</SectionIntro>
        <ExerciseBlock
          title="Comprendre ce que l'ADN rend possible"
          description="Lis ces repères pour poser le bon niveau d'exigence dès le départ."
        >
          <PromptList items={visionPageContent.intro.highlights} />
        </ExerciseBlock>
        <ExampleBox title="Point de repère">
          Un ADN clair évite les choix décoratifs et renforce chaque décision de
          marque.
        </ExampleBox>
        <FinalTakeaway>{visionPageContent.intro.takeaway}</FinalTakeaway>
      </SectionBlock>

      <SectionBlock>
        <SectionTitle title={visionPageContent.basics.title} />
        <SectionIntro>{visionPageContent.basics.intro}</SectionIntro>
        <ExerciseBlock
          title="Poser les bases"
          description="Réponds aux questions suivantes pour clarifier ton point de départ."
        >
          <label className="block space-y-3">
            <span className="text-sm font-medium text-stone-700">
              {visionPageContent.basics.finalPrompt.label}
            </span>
            <InlineInput
              ariaLabel={visionPageContent.basics.finalPrompt.label}
              value={getValue("brandName")}
              onChange={(value) => updateValue("brandName", value)}
              placeholder={visionPageContent.basics.finalPrompt.placeholder}
              className="block w-full"
            />
          </label>
          {visionPageContent.basics.exercises.map((exercise) => (
            <TextareaBlock
              key={exercise.fieldKey}
              label={exercise.title}
              value={getValue(exercise.fieldKey)}
              onChange={(value) => updateValue(exercise.fieldKey, value)}
              placeholder={exercise.placeholder}
            />
          ))}
        </ExerciseBlock>
        <ExampleBox title="Intention">
          Plus tes bases sont claires, plus la suite du parcours devient
          fluide, cohérente et exploitable.
        </ExampleBox>
        <FinalTakeaway>{visionPageContent.basics.takeaway}</FinalTakeaway>
      </SectionBlock>

      <SectionBlock>
        <SectionTitle title={visionPageContent.mission.title} />
        <SectionIntro>{visionPageContent.mission.intro}</SectionIntro>
        <ExerciseBlock
          title="Formuler la mission"
          description="Réponds aux questions suivantes puis complète la phrase essentielle."
        >
          <PromptList
            title="Réponds aux questions suivantes :"
            items={visionPageContent.mission.prompts}
          />
          <div className="space-y-3 rounded-2xl border border-stone-200 bg-[#f7f2ea] p-5">
            <p className="text-sm font-medium text-stone-700">
              Complète la phrase suivante :
            </p>
            <p className="flex flex-wrap items-center gap-3 text-sm leading-7 text-stone-900 sm:text-base">
              <span>Ma marque existe pour aider</span>
              <InlineInput
                ariaLabel="Mission - cible"
                value={getValue("missionAudience")}
                onChange={(value) => updateMissionFormula("audience", value)}
                placeholder="qui ?"
              />
              <span>à</span>
              <InlineInput
                ariaLabel="Mission - résultat"
                value={getValue("missionOutcome")}
                onChange={(value) => updateMissionFormula("outcome", value)}
                placeholder="faire quoi ?"
              />
              <span>grâce à</span>
              <InlineInput
                ariaLabel="Mission - levier"
                value={getValue("missionMethod")}
                onChange={(value) => updateMissionFormula("method", value)}
                placeholder="quoi ?"
              />
            </p>
          </div>
          <TextareaBlock
            label="Pourquoi as-tu créé cette activité ?"
            value={getValue("missionWhy")}
            onChange={(value) => updateValue("missionWhy", value)}
            placeholder="Explique ce qui t'a poussé à créer cette activité."
          />
          <TextareaBlock
            label="Quel problème cherches-tu à résoudre pour tes clients ?"
            value={getValue("clientProblem")}
            onChange={(value) => updateValue("clientProblem", value)}
            placeholder="Décris le problème concret que ta marque aide à résoudre."
          />
        </ExerciseBlock>
        <ExampleBox>{visionPageContent.mission.example}</ExampleBox>
        <ExerciseBlock
          title="Travailler maintenant ta version finale"
          description="Travaille ta mission dans plusieurs formats pour la rendre facile à réutiliser."
        >
          {visionPageContent.mission.versions.map((version) => (
            <TextareaBlock
              key={version.key}
              label={version.label}
              value={getValue(version.key)}
              onChange={(value) => updateValue(version.key, value)}
              placeholder={version.placeholder}
            />
          ))}
          <ConsistencyCheck {...visionPageContent.mission.consistencyCheck} />
          <FinalAnswerBlock
            title={visionPageContent.mission.finalLabel}
            value={getValue(visionPageContent.mission.finalKey)}
            onChange={(value) =>
              updateValue(visionPageContent.mission.finalKey, value)
            }
            placeholder={visionPageContent.mission.finalPlaceholder}
          />
        </ExerciseBlock>
        <FinalTakeaway>{visionPageContent.mission.takeaway}</FinalTakeaway>
      </SectionBlock>

      <SectionBlock>
        <SectionTitle title={visionPageContent.vision.title} />
        <SectionIntro>{visionPageContent.vision.intro}</SectionIntro>
        <ExerciseBlock
          title="Projeter la marque"
          description="Réponds aux questions suivantes pour faire émerger une ambition nette et assumée."
        >
          <PromptFields
            prompts={visionPageContent.vision.prompts}
            getValue={getValue}
            updateValue={updateValue}
          />
        </ExerciseBlock>
        <ExampleBox title="Point de repère">
          {visionPageContent.vision.example}
        </ExampleBox>
        <ExerciseBlock
          title="Clarifier la transformation"
          description="Complète la phrase suivante, puis formule ta vision finale."
        >
          <div className="space-y-3 rounded-2xl border border-stone-200 bg-[#f7f2ea] p-5">
            <p className="text-sm font-medium text-stone-700">
              Complète la phrase suivante :
            </p>
            <p className="flex flex-wrap items-center gap-3 text-sm leading-7 text-stone-900 sm:text-base">
              <span>Grâce à ma marque, mes clients pourront</span>
              <InlineInput
                ariaLabel="Transformation client"
                value={getValue("transformationClientsValue")}
                onChange={(value) => {
                  updateValue("transformationClientsValue", value);
                  updateSentence(
                    "transformationClients",
                    "Grâce à ma marque, mes clients pourront ",
                    value
                  );
                }}
                placeholder="obtenir quoi ?"
                className="min-w-[220px]"
              />
            </p>
            <p className="flex flex-wrap items-center gap-3 text-sm leading-7 text-stone-900 sm:text-base">
              <span>Si ma marque réussit pleinement, cela changera</span>
              <InlineInput
                ariaLabel="Transformation globale"
                value={getValue("transformationImpactValue")}
                onChange={(value) => {
                  updateValue("transformationImpactValue", value);
                  updateSentence(
                    "transformationImpact",
                    "Si ma marque réussit pleinement, cela changera ",
                    value
                  );
                }}
                placeholder="quoi ?"
                className="min-w-[220px]"
              />
            </p>
          </div>
          {visionPageContent.vision.versions.map((version) => (
            <TextareaBlock
              key={version.key}
              label={version.label}
              value={getValue(version.key)}
              onChange={(value) => updateValue(version.key, value)}
              placeholder={version.placeholder}
            />
          ))}
          <FinalAnswerBlock
            title={visionPageContent.vision.finalLabel}
            value={getValue(visionPageContent.vision.finalKey)}
            onChange={(value) =>
              updateValue(visionPageContent.vision.finalKey, value)
            }
            placeholder={visionPageContent.vision.finalPlaceholder}
          />
        </ExerciseBlock>
        <FinalTakeaway>{visionPageContent.vision.takeaway}</FinalTakeaway>
      </SectionBlock>

      <SectionBlock>
        <SectionTitle title={visionPageContent.values.title} />
        <SectionIntro>{visionPageContent.values.intro}</SectionIntro>
        <ExerciseBlock
          title="Faire émerger les valeurs"
          description="Réponds aux questions suivantes puis liste les mots qui résonnent le plus avec ta marque."
        >
          <PromptList
            title="Réponds aux questions suivantes :"
            items={visionPageContent.values.prompts}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {Array.from({ length: 10 }, (_, index) => {
              const key = `valuesBrainstorm${index + 1}`;

              return (
                <label
                  key={key}
                  className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-[#f7f2ea] px-4 py-3"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-semibold text-stone-600">
                    {index + 1}
                  </span>
                  <InlineInput
                    ariaLabel={`Mot-clé ${index + 1}`}
                    value={getValue(key)}
                    onChange={(value) => updateValue(key, value)}
                    placeholder={visionPageContent.values.brainstormPlaceholder}
                    className="w-full min-w-0 flex-1 border-0 bg-transparent px-0 py-0 focus:bg-transparent"
                  />
                </label>
              );
            })}
          </div>
        </ExerciseBlock>
        <ExampleBox title="Point de repère">
          Une valeur utile ne reste pas abstraite : elle influence tes choix,
          ton cadre et ta communication.
        </ExampleBox>
        <ExerciseBlock
          title="Pour chaque valeur retenue, complète :"
          description="Travaille maintenant tes trois valeurs clés pour les rendre concrètes, lisibles et activables."
        >
          <div className="grid gap-5">
            {visionPageContent.values.valueBlocks.map((block, index) => (
              <ValueCard
                key={block.valueKey}
                index={index + 1}
                block={block}
                getValue={getValue}
                updateValue={updateValue}
              />
            ))}
          </div>
        </ExerciseBlock>
        <FinalTakeaway>{visionPageContent.values.takeaway}</FinalTakeaway>
      </SectionBlock>

      <SectionBlock>
        <SectionTitle title={visionPageContent.promise.title} />
        <SectionIntro>{visionPageContent.promise.intro}</SectionIntro>
        <ExerciseBlock
          title="Rendre la transformation tangible"
          description="Complète la phrase suivante pour rendre le changement plus concret."
        >
          <div className="space-y-3 rounded-2xl border border-stone-200 bg-[#f7f2ea] p-5">
            <p className="flex flex-wrap items-center gap-3 text-sm leading-7 text-stone-900 sm:text-base">
              <span>Avant moi, mes clients sont</span>
              <InlineInput
                ariaLabel="État avant"
                value={getValue("beforeStateValue")}
                onChange={(value) => {
                  updateValue("beforeStateValue", value);
                  updateSentence("beforeState", "Avant moi, mes clients sont ", value);
                }}
                placeholder="dans quel état ?"
                className="min-w-[220px]"
              />
            </p>
            <p className="flex flex-wrap items-center gap-3 text-sm leading-7 text-stone-900 sm:text-base">
              <span>Après moi, mes clients sont</span>
              <InlineInput
                ariaLabel="État après"
                value={getValue("afterStateValue")}
                onChange={(value) => {
                  updateValue("afterStateValue", value);
                  updateSentence("afterState", "Après moi, mes clients sont ", value);
                }}
                placeholder="dans quel état ?"
                className="min-w-[220px]"
              />
            </p>
          </div>
        </ExerciseBlock>
        <ExampleBox title="Exemples">
          {visionPageContent.promise.examples.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </ExampleBox>
        <ExerciseBlock
          title="Préciser ce que tu promets"
          description="Réponds aux questions suivantes pour rendre ta promesse crédible et lisible."
        >
          <PromptFields
            prompts={visionPageContent.promise.prompts}
            getValue={getValue}
            updateValue={updateValue}
          />
        </ExerciseBlock>
        <ExerciseBlock
          title="Travailler maintenant ta version finale"
          description="Travaille ta promesse dans deux formats avant de formuler la version finale."
        >
          <PromptFields
            prompts={visionPageContent.promise.versions}
            getValue={getValue}
            updateValue={updateValue}
          />
          <FinalAnswerBlock
            title={visionPageContent.promise.finalLabel}
            value={getValue(visionPageContent.promise.finalKey)}
            onChange={(value) =>
              updateValue(visionPageContent.promise.finalKey, value)
            }
            placeholder={visionPageContent.promise.finalPlaceholder}
          />
        </ExerciseBlock>
        <FinalTakeaway>{visionPageContent.promise.takeaway}</FinalTakeaway>
      </SectionBlock>
    </div>
  );
}
