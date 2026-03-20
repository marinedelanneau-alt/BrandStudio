"use client";

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

function CheckboxMarker() {
  return (
    <span
      aria-hidden="true"
      className="mt-1 h-5 w-5 shrink-0 rounded-md border border-stone-300 bg-white shadow-sm"
    />
  );
}

function InlineField({
  label,
  ariaLabel,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  ariaLabel: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block space-y-3">
      <span className="flex items-center gap-3 text-sm font-medium text-stone-700">
        <CheckboxMarker />
        <span>{label}</span>
      </span>
      <InlineInput
        ariaLabel={ariaLabel}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="block w-full min-w-0"
      />
    </label>
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
    updateValue(fieldKey, value ? `${prefix}${value}.` : "");
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
          withCheckbox
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
    <div className="space-y-5 rounded-3xl border border-stone-200 bg-white p-6">
      <InlineField
        label={`Valeur ${index}`}
        ariaLabel={`Valeur ${index}`}
        value={getValue(block.valueKey)}
        onChange={(value) => updateValue(block.valueKey, value)}
        placeholder="Nom de la valeur"
      />
      <TextareaBlock
        label="Cela signifie que je..."
        value={getValue(block.meaningKey)}
        onChange={(value) => updateValue(block.meaningKey, value)}
        placeholder="Décris ce que cette valeur implique pour toi."
        withCheckbox
      />
      <TextareaBlock
        label="Concrètement, cela se traduit par..."
        value={getValue(block.concreteKey)}
        onChange={(value) => updateValue(block.concreteKey, value)}
        placeholder="Donne une traduction concrète dans ton activité."
        withCheckbox
      />
      <TextareaBlock
        label="Dans ma communication, cela donne..."
        value={getValue(block.communicationKey)}
        onChange={(value) => updateValue(block.communicationKey, value)}
        placeholder="Explique comment cette valeur se voit dans ta communication."
        withCheckbox
      />
      <FinalAnswerBlock
        title={`Valeur ${index} finale`}
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
          title={visionPageContent.intro.exerciseTitle}
          description={visionPageContent.intro.exerciseDescription}
        >
          <PromptList items={visionPageContent.intro.highlights} />
        </ExerciseBlock>
        <FinalTakeaway>{visionPageContent.intro.takeaway}</FinalTakeaway>
      </SectionBlock>

      <SectionBlock>
        <SectionTitle title={visionPageContent.basics.title} />
        <SectionIntro>{visionPageContent.basics.intro}</SectionIntro>
        <ExerciseBlock
          title="Réponds aux questions suivantes :"
          description="Complète ces premiers champs pour poser une base claire avant de travailler ta mission, ta vision et ta promesse."
        >
          <InlineField
            label={visionPageContent.basics.finalPrompt.label}
            ariaLabel={visionPageContent.basics.finalPrompt.label}
            value={getValue("brandName")}
            onChange={(value) => updateValue("brandName", value)}
            placeholder={visionPageContent.basics.finalPrompt.placeholder}
          />
          {visionPageContent.basics.exercises.map((exercise) => (
            <TextareaBlock
              key={exercise.fieldKey}
              label={exercise.title}
              value={getValue(exercise.fieldKey)}
              onChange={(value) => updateValue(exercise.fieldKey, value)}
              placeholder={exercise.placeholder}
              withCheckbox
            />
          ))}
          <p className="rounded-2xl bg-[#f7f2ea] px-5 py-4 text-sm leading-7 text-stone-700 sm:text-base">
            {visionPageContent.basics.supportText}
          </p>
        </ExerciseBlock>
        <FinalTakeaway>{visionPageContent.basics.takeaway}</FinalTakeaway>
      </SectionBlock>

      <SectionBlock>
        <SectionTitle title={visionPageContent.mission.title} />
        <SectionIntro>{visionPageContent.mission.intro}</SectionIntro>
        <ExerciseBlock
          title="Réponds aux questions suivantes :"
          description="Travaille le sens profond de ta marque avant de passer à la formulation."
        >
          <PromptList items={visionPageContent.mission.prompts} />
          <TextareaBlock
            label="Pourquoi as-tu créé cette activité ?"
            value={getValue("missionWhy")}
            onChange={(value) => updateValue("missionWhy", value)}
            placeholder="Explique ce qui t’a poussée ou poussé à créer cette activité."
            withCheckbox
          />
          <TextareaBlock
            label="Quel problème cherches-tu à résoudre pour tes clients ?"
            value={getValue("clientProblem")}
            onChange={(value) => updateValue("clientProblem", value)}
            placeholder="Décris le problème concret que ta marque aide à résoudre."
            withCheckbox
          />
        </ExerciseBlock>
        <ExampleBox>{visionPageContent.mission.example}</ExampleBox>
        <ExerciseBlock
          title="Complète la phrase suivante :"
          description="Renseigne chaque élément pour formuler la phrase essentielle de ta mission."
        >
          <InlineField
            label="Ma marque existe pour aider..."
            ariaLabel="Mission - cible"
            value={getValue("missionAudience")}
            onChange={(value) => updateMissionFormula("audience", value)}
            placeholder="Qui ?"
          />
          <InlineField
            label="...à..."
            ariaLabel="Mission - résultat"
            value={getValue("missionOutcome")}
            onChange={(value) => updateMissionFormula("outcome", value)}
            placeholder="Faire quoi ?"
          />
          <InlineField
            label="...grâce à..."
            ariaLabel="Mission - levier"
            value={getValue("missionMethod")}
            onChange={(value) => updateMissionFormula("method", value)}
            placeholder="Quel levier ?"
          />
          <TextareaBlock
            label="Mission formulée"
            value={getValue("missionFormula")}
            onChange={(value) => updateValue("missionFormula", value)}
            placeholder="La phrase se remplit ici automatiquement. Tu peux aussi l’ajuster manuellement."
            withCheckbox
          />
        </ExerciseBlock>
        <ExerciseBlock
          title="Travaille maintenant ta version finale :"
          description="Décline ta mission dans plusieurs niveaux de formulation pour la rendre facile à réutiliser."
        >
          {visionPageContent.mission.versions.map((version) => (
            <TextareaBlock
              key={version.key}
              label={version.label}
              value={getValue(version.key)}
              onChange={(value) => updateValue(version.key, value)}
              placeholder={version.placeholder}
              withCheckbox
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
          title="Réponds aux questions suivantes :"
          description="Projette ta marque avec précision pour faire émerger une ambition nette et assumée."
        >
          <PromptFields
            prompts={visionPageContent.vision.prompts}
            getValue={getValue}
            updateValue={updateValue}
          />
        </ExerciseBlock>
        <ExampleBox title="Exemple">{visionPageContent.vision.example}</ExampleBox>
        <ExerciseBlock
          title="Transformation, la phrase essentielle"
          description="Complète les deux phrases suivantes pour rendre la transformation portée par ta marque plus tangible."
        >
          <InlineField
            label="Grâce à ma marque, mes clients pourront..."
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
            placeholder="Obtenir quoi ?"
          />
          <InlineField
            label="Si ma marque réussit pleinement, cela changera..."
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
            placeholder="Quoi ?"
          />
          <TextareaBlock
            label="Transformation client formulée"
            value={getValue("transformationClients")}
            onChange={(value) => updateValue("transformationClients", value)}
            placeholder="La phrase se remplit ici automatiquement. Tu peux aussi l’ajuster."
            withCheckbox
          />
          <TextareaBlock
            label="Transformation globale formulée"
            value={getValue("transformationImpact")}
            onChange={(value) => updateValue("transformationImpact", value)}
            placeholder="La phrase se remplit ici automatiquement. Tu peux aussi l’ajuster."
            withCheckbox
          />
        </ExerciseBlock>
        <ExerciseBlock
          title="Travaille maintenant ta version finale :"
          description="Décline ensuite ta vision dans plusieurs formats pour qu’elle reste claire à tous les niveaux."
        >
          {visionPageContent.vision.versions.map((version) => (
            <TextareaBlock
              key={version.key}
              label={version.label}
              value={getValue(version.key)}
              onChange={(value) => updateValue(version.key, value)}
              placeholder={version.placeholder}
              withCheckbox
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
          title="Réponds aux questions suivantes :"
          description="Teste la solidité de tes valeurs avant de retenir les plus justes."
        >
          <PromptList items={visionPageContent.values.prompts} />
        </ExerciseBlock>
        <ExerciseBlock
          title="Complète la phrase suivante :"
          description="Liste maintenant les mots-clés qui résonnent le plus avec ta marque."
        >
          <div className="grid gap-4">
            {Array.from({ length: 10 }, (_, index) => {
              const key = `valuesBrainstorm${index + 1}`;

              return (
                <InlineField
                  key={key}
                  label={`Mot-clé ${index + 1}`}
                  ariaLabel={`Mot-clé ${index + 1}`}
                  value={getValue(key)}
                  onChange={(value) => updateValue(key, value)}
                  placeholder={visionPageContent.values.brainstormPlaceholder}
                />
              );
            })}
          </div>
        </ExerciseBlock>
        <ExerciseBlock
          title="Traduire les valeurs en actions"
          description="Pour chaque valeur retenue, complète les champs suivants pour la rendre concrète, lisible et activable."
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
          title="Promesse VS Mission VS Baseline"
          description="Utilise ce repère pour distinguer clairement le rôle de chaque formulation dans ta marque."
        >
          <PromptList items={visionPageContent.promise.comparison} />
        </ExerciseBlock>
        <ExerciseBlock
          title="Exercice : Avant / après"
          description="Complète les deux champs suivants pour rendre la transformation client plus lisible."
        >
          <InlineField
            label="Avant moi, mes clients sont..."
            ariaLabel="État avant"
            value={getValue("beforeStateValue")}
            onChange={(value) => {
              updateValue("beforeStateValue", value);
              updateSentence("beforeState", "Avant moi, mes clients sont ", value);
            }}
            placeholder="Dans quel état ?"
          />
          <InlineField
            label="Après moi, mes clients sont..."
            ariaLabel="État après"
            value={getValue("afterStateValue")}
            onChange={(value) => {
              updateValue("afterStateValue", value);
              updateSentence("afterState", "Après moi, mes clients sont ", value);
            }}
            placeholder="Dans quel état ?"
          />
          <TextareaBlock
            label="Avant formulé"
            value={getValue("beforeState")}
            onChange={(value) => updateValue("beforeState", value)}
            placeholder="La phrase se remplit ici automatiquement. Tu peux aussi l’ajuster."
            withCheckbox
          />
          <TextareaBlock
            label="Après formulé"
            value={getValue("afterState")}
            onChange={(value) => updateValue("afterState", value)}
            placeholder="La phrase se remplit ici automatiquement. Tu peux aussi l’ajuster."
            withCheckbox
          />
        </ExerciseBlock>
        <ExampleBox title="Exemple">
          {visionPageContent.promise.beforeAfterExamples.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </ExampleBox>
        <ExerciseBlock
          title="Promesse tangible VS promesse vague"
          description="Travaille ici la qualité de ta promesse pour la rendre crédible, concrète et immédiatement compréhensible."
        >
          <ExampleBox title="Repère">
            {visionPageContent.promise.examples.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </ExampleBox>
          {visionPageContent.promise.versions.map((version) => (
            <TextareaBlock
              key={version.key}
              label={version.label}
              value={getValue(version.key)}
              onChange={(value) => updateValue(version.key, value)}
              placeholder={version.placeholder}
              withCheckbox
            />
          ))}
        </ExerciseBlock>
        <ExerciseBlock
          title="Réponds aux questions suivantes :"
          description="Précise maintenant ce que tu promets très concrètement à travers ton résultat, ton expérience et ta posture."
        >
          <PromptFields
            prompts={visionPageContent.promise.prompts}
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
