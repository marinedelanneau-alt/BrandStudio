import type { BrandData } from "../../types/brand";
import { ExampleBox } from "./ExampleBox";
import { ExerciseBlock } from "./ExerciseBlock";
import { InlineInput } from "./InlineInput";
import { PromptList } from "./PromptList";
import { SectionTitle } from "./SectionTitle";
import { TextareaBlock } from "./TextareaBlock";

type VisionPageProps = {
  data: BrandData;
  onChange: (key: string, value: unknown) => void;
};

const missionPrompts = [
  "Pourquoi la marque existe-t-elle ?",
  "Pourquoi as-tu créé cette activité ?",
  "Quel problème cherches-tu à résoudre pour tes clients ?",
];

const visionPrompts = [
  "Où aimerais-tu que ta marque soit dans 3 à 5 ans ?",
  "Quel impact veux-tu avoir ?",
  "Quelle place occupera-t-elle sur son marché ?",
  "Avec quel type de clients travailleras-tu ?",
];

const valuesPrompts = [
  "Est-ce que cette valeur influence mes décisions ?",
  "Est-ce que je serais prêt(e) à perdre un client pour la respecter ?",
  "Est-ce que mes clients la perçoivent réellement ?",
];

export function VisionPage({ data, onChange }: VisionPageProps) {
  const getValue = (key: string) =>
    typeof data[key] === "string" ? String(data[key]) : "";

  const updateValue = (key: string, value: string) => {
    onChange(key, value);
  };

  const updateMissionFormula = (part: "audience" | "outcome" | "method", value: string) => {
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

  const updateComposedSentence = (
    fieldKey: string,
    prefix: string,
    value: string,
    suffix = ""
  ) => {
    updateValue(fieldKey, `${prefix}${value}${suffix}`);
  };

  const brainstormKeys = Array.from({ length: 10 }, (_, index) => `valuesBrainstorm${index + 1}`);

  return (
    <div className="space-y-8 text-stone-900">
      <section className="space-y-6 rounded-[32px] border border-stone-200 bg-[#f7f2ea] p-6 sm:p-8">
        <SectionTitle
          title="L'ADN de marque, quésaco ?"
          subtitle="L'ADN de marque est la base de toute identité forte et cohérente."
        />
        <PromptList
          items={[
            "Créer une identité visuelle cohérente et reconnaissable.",
            "Aligner la communication, le discours et les visuels.",
            "Prendre des décisions plus facilement.",
            "Faire évoluer la marque sans la dénaturer.",
          ]}
        />
        <div className="grid gap-6">
          <div className="space-y-3">
            <label className="text-sm font-medium text-stone-700">Nom de ta marque</label>
            <InlineInput
              value={getValue("brandName")}
              onChange={(value) => updateValue("brandName", value)}
              placeholder="Nom de la marque"
              className="block w-full"
            />
          </div>
          <ExerciseBlock
            title="Décrire ton activité"
            description="Réponds en quelques phrases pour poser un cadre clair avant d'aller plus loin."
          >
            <TextareaBlock
              value={getValue("activity")}
              onChange={(value) => updateValue("activity", value)}
              placeholder="Décris ton activité, ce que tu proposes et à qui tu t'adresses."
            />
          </ExerciseBlock>
          <ExerciseBlock
            title="Clarifier ton objectif"
            description="Réponds avec l'intention principale de ce (re)branding."
          >
            <TextareaBlock
              value={getValue("goal")}
              onChange={(value) => updateValue("goal", value)}
              placeholder="Explique ce que tu veux obtenir grâce à ce travail de marque."
            />
          </ExerciseBlock>
        </div>
      </section>

      <section className="space-y-6 rounded-[32px] border border-stone-200 bg-white p-6 sm:p-8">
        <SectionTitle
          title="Mission"
          subtitle="Ta mission exprime la raison d'être de ta marque. Elle explique pourquoi ton activité existe et ce qu'elle cherche à changer."
        />
        <ExampleBox title="Point de repère">
          La mission ne décrit pas ce que tu fais. Elle explique pourquoi tu le
          fais et ce que cela change.
        </ExampleBox>
        <ExerciseBlock
          title="A toi de jouer"
          description="Complète les exercices sans chercher la formulation parfaite du premier coup."
        >
          <PromptList items={missionPrompts} />
          <div className="space-y-3 rounded-2xl border border-stone-200 bg-[#f7f2ea] p-5">
            <p className="text-sm leading-7 text-stone-700 sm:text-base">
              Complète la phrase suivante :
            </p>
            <p className="flex flex-wrap items-center gap-3 text-sm leading-7 text-stone-900 sm:text-base">
              <span>Ma marque existe pour aider</span>
              <InlineInput
                value={getValue("missionAudience")}
                onChange={(value) => updateMissionFormula("audience", value)}
                placeholder="qui ?"
              />
              <span>à</span>
              <InlineInput
                value={getValue("missionOutcome")}
                onChange={(value) => updateMissionFormula("outcome", value)}
                placeholder="faire quoi ?"
              />
              <span>grâce à</span>
              <InlineInput
                value={getValue("missionMethod")}
                onChange={(value) => updateMissionFormula("method", value)}
                placeholder="quoi ?"
              />
              <span>.</span>
            </p>
          </div>
          <div className="grid gap-5">
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">
                Pourquoi as-tu créé cette activité ?
              </p>
              <TextareaBlock
                value={getValue("missionWhy")}
                onChange={(value) => updateValue("missionWhy", value)}
                placeholder="Explique ce qui t'a poussé à créer cette activité."
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">
                Quel problème cherches-tu à résoudre pour tes clients ?
              </p>
              <TextareaBlock
                value={getValue("clientProblem")}
                onChange={(value) => updateValue("clientProblem", value)}
                placeholder="Décris le problème concret que ta marque aide à résoudre."
              />
            </div>
          </div>
        </ExerciseBlock>
        <ExampleBox>
          Nous aidons les entrepreneurs à structurer une identité de marque
          claire et stratégique afin qu'ils puissent communiquer avec cohérence
          et confiance.
        </ExampleBox>
        <ExerciseBlock
          title="La phrase essentielle"
          description="Formule ta mission en plusieurs niveaux pour l'utiliser facilement selon les contextes."
        >
          <div className="grid gap-5">
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">
                Version explicative (3 à 4 lignes)
              </p>
              <TextareaBlock
                value={getValue("missionLong")}
                onChange={(value) => updateValue("missionLong", value)}
                placeholder="Formule une version claire pour ton site ou ta présentation."
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">
                Version synthétique (1 phrase)
              </p>
              <TextareaBlock
                value={getValue("missionShort")}
                onChange={(value) => updateValue("missionShort", value)}
                placeholder="Formule une phrase courte pour tes supports."
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">
                Version interne (ultra claire)
              </p>
              <TextareaBlock
                value={getValue("missionInternal")}
                onChange={(value) => updateValue("missionInternal", value)}
                placeholder="Formule une version qui t'aide à guider tes décisions."
              />
            </div>
            <ExampleBox title="Test">
              Si je lance cette nouvelle offre, est-elle alignée avec ma
              mission ? Si la réponse est floue, la mission doit être clarifiée.
            </ExampleBox>
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">Ta mission</p>
              <TextareaBlock
                value={getValue("missionFinal")}
                onChange={(value) => updateValue("missionFinal", value)}
                placeholder="Formule ici la version finale de ta mission."
              />
            </div>
          </div>
        </ExerciseBlock>
      </section>

      <section className="space-y-6 rounded-[32px] border border-stone-200 bg-white p-6 sm:p-8">
        <SectionTitle
          title="Vision"
          subtitle="Ta vision projette ta marque dans le futur. Elle donne une direction et une ambition à long terme."
        />
        <ExampleBox title="Point de repère">
          Une vision claire transforme chaque décision en choix stratégique.
        </ExampleBox>
        <ExerciseBlock
          title="Où souhaite-t-elle aller ?"
          description="Réponds sans filtre pour faire émerger une ambition nette et assumée."
        >
          <PromptList items={visionPrompts} />
          <div className="grid gap-5">
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">
                Où aimerais-tu que ta marque soit dans 3 à 5 ans ?
              </p>
              <TextareaBlock
                value={getValue("visionWhere")}
                onChange={(value) => updateValue("visionWhere", value)}
                placeholder="Projette ta marque dans 3 à 5 ans."
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">
                Quel impact veux-tu avoir ?
              </p>
              <TextareaBlock
                value={getValue("visionImpact")}
                onChange={(value) => updateValue("visionImpact", value)}
                placeholder="Décris l'impact que tu veux créer."
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">
                Quelle place occupera-t-elle sur son marché ?
              </p>
              <TextareaBlock
                value={getValue("visionMarket")}
                onChange={(value) => updateValue("visionMarket", value)}
                placeholder="Décris la place visée sur ton marché."
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">
                Avec quel type de clients travailleras-tu ?
              </p>
              <TextareaBlock
                value={getValue("visionClients")}
                onChange={(value) => updateValue("visionClients", value)}
                placeholder="Décris les clients avec qui tu veux travailler."
              />
            </div>
          </div>
        </ExerciseBlock>
        <ExerciseBlock
          title="Transformation, la phrase essentielle"
          description="Complète les deux phrases pour clarifier le changement concret porté par ta marque."
        >
          <div className="space-y-3 rounded-2xl border border-stone-200 bg-[#f7f2ea] p-5">
            <p className="flex flex-wrap items-center gap-3 text-sm leading-7 text-stone-900 sm:text-base">
              <span>Grâce à ma marque, mes clients pourront</span>
              <InlineInput
                value={getValue("transformationClientsValue")}
                onChange={(value) => {
                  updateValue("transformationClientsValue", value);
                  updateComposedSentence(
                    "transformationClients",
                    "Grâce à ma marque, mes clients pourront ",
                    value
                  );
                }}
                placeholder="obtenir quoi ?"
                className="min-w-[220px]"
              />
              <span>.</span>
            </p>
            <p className="flex flex-wrap items-center gap-3 text-sm leading-7 text-stone-900 sm:text-base">
              <span>Si ma marque réussit pleinement, cela changera</span>
              <InlineInput
                value={getValue("transformationImpactValue")}
                onChange={(value) => {
                  updateValue("transformationImpactValue", value);
                  updateComposedSentence(
                    "transformationImpact",
                    "Si ma marque réussit pleinement, cela changera ",
                    value
                  );
                }}
                placeholder="quoi ?"
                className="min-w-[220px]"
              />
              <span>.</span>
            </p>
          </div>
        </ExerciseBlock>
        <ExerciseBlock
          title="Formuler la vision"
          description="À partir des exercices précédents, formule ta vision en trois versions."
        >
          <div className="grid gap-5">
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">
                Version explicative (3 à 4 lignes)
              </p>
              <TextareaBlock
                value={getValue("visionLong")}
                onChange={(value) => updateValue("visionLong", value)}
                placeholder="Formule une version développée de ta vision."
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">
                Version synthétique (1 phrase claire)
              </p>
              <TextareaBlock
                value={getValue("visionShort")}
                onChange={(value) => updateValue("visionShort", value)}
                placeholder="Formule une phrase courte et claire."
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">
                Version interne
              </p>
              <ExampleBox>Créer un studio aligné, structuré et durable.</ExampleBox>
              <TextareaBlock
                value={getValue("visionInternal")}
                onChange={(value) => updateValue("visionInternal", value)}
                placeholder="Formule une phrase pour toi uniquement."
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">Ta vision</p>
              <TextareaBlock
                value={getValue("visionFinal")}
                onChange={(value) => updateValue("visionFinal", value)}
                placeholder="Formule ici la version finale de ta vision."
              />
            </div>
          </div>
        </ExerciseBlock>
      </section>

      <section className="space-y-6 rounded-[32px] border border-stone-200 bg-white p-6 sm:p-8">
        <SectionTitle
          title="Valeurs"
          subtitle="Les valeurs guident ton comportement et ta communication. Une valeur n'existe vraiment que si elle influence un comportement."
        />
        <ExerciseBlock
          title="Tri des valeurs"
          description="Commence par lister 10 mots qui résonnent avec toi."
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {brainstormKeys.map((key, index) => (
              <div
                key={key}
                className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-[#f7f2ea] px-4 py-3"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-semibold text-stone-600">
                  {index + 1}
                </span>
                <InlineInput
                  value={getValue(key)}
                  onChange={(value) => updateValue(key, value)}
                  placeholder="Ajoute un mot"
                  className="w-full min-w-0 flex-1 border-0 bg-transparent px-0 py-0 focus:bg-transparent"
                />
              </div>
            ))}
          </div>
          <PromptList items={valuesPrompts} />
        </ExerciseBlock>
        <ExerciseBlock
          title="Traduire les valeurs en actions"
          description="Travaille tes trois valeurs principales en les rendant concrètes et applicables."
        >
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="space-y-4 rounded-2xl border border-stone-200 bg-[#f7f2ea] p-5"
            >
              <div className="space-y-3">
                <p className="text-sm font-medium text-stone-700">{`Valeur ${index}`}</p>
                <InlineInput
                  value={getValue(`value${index}`)}
                  onChange={(value) => updateValue(`value${index}`, value)}
                  placeholder="Nom de la valeur"
                  className="block w-full"
                />
              </div>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-stone-700">Cela signifie que je...</p>
                  <TextareaBlock
                    value={getValue(`value${index}Meaning`)}
                    onChange={(value) => updateValue(`value${index}Meaning`, value)}
                    placeholder="Décris ce que cette valeur implique pour toi."
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-stone-700">
                    Concrètement, cela se traduit par...
                  </p>
                  <TextareaBlock
                    value={getValue(`value${index}Concrete`)}
                    onChange={(value) => updateValue(`value${index}Concrete`, value)}
                    placeholder="Donne une traduction concrète dans ton activité."
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-stone-700">
                    Dans ma communication, cela donne...
                  </p>
                  <TextareaBlock
                    value={getValue(`value${index}Communication`)}
                    onChange={(value) => updateValue(`value${index}Communication`, value)}
                    placeholder="Explique comment cette valeur se voit dans ta communication."
                  />
                </div>
              </div>
            </div>
          ))}
        </ExerciseBlock>
        <ExerciseBlock
          title="Formulation finale"
          description="Formule tes trois valeurs de façon claire, concrète et exploitable."
        >
          {[1, 2, 3].map((index) => (
            <div
              key={`value-final-${index}`}
              className="space-y-3 rounded-2xl border border-stone-200 bg-[#f7f2ea] p-5"
            >
              <p className="text-sm font-medium text-stone-700">{`Valeur ${index}`}</p>
              <TextareaBlock
                value={getValue(`value${index}Action`)}
                onChange={(value) => updateValue(`value${index}Action`, value)}
                placeholder="Formule une explication claire et concrète de cette valeur."
              />
            </div>
          ))}
        </ExerciseBlock>
      </section>

      <section className="space-y-6 rounded-[32px] border border-stone-200 bg-white p-6 sm:p-8">
        <SectionTitle
          title="Promesse de la marque"
          subtitle="Ta promesse, c'est ce que ton client peut attendre de toi de manière fiable et constante."
        />
        <ExerciseBlock
          title="Avant / Après"
          description="Complète ces deux phrases pour rendre la transformation plus tangible."
        >
          <div className="space-y-3 rounded-2xl border border-stone-200 bg-[#f7f2ea] p-5">
            <p className="flex flex-wrap items-center gap-3 text-sm leading-7 text-stone-900 sm:text-base">
              <span>Avant moi, mes clients sont</span>
              <InlineInput
                value={getValue("beforeStateValue")}
                onChange={(value) => {
                  updateValue("beforeStateValue", value);
                  updateComposedSentence("beforeState", "Avant moi, mes clients sont ", value);
                }}
                placeholder="dans quel état ?"
                className="min-w-[220px]"
              />
              <span>.</span>
            </p>
            <p className="flex flex-wrap items-center gap-3 text-sm leading-7 text-stone-900 sm:text-base">
              <span>Après moi, mes clients sont</span>
              <InlineInput
                value={getValue("afterStateValue")}
                onChange={(value) => {
                  updateValue("afterStateValue", value);
                  updateComposedSentence("afterState", "Après moi, mes clients sont ", value);
                }}
                placeholder="dans quel état ?"
                className="min-w-[220px]"
              />
              <span>.</span>
            </p>
          </div>
          <ExampleBox title="Exemples">
            <p>Exemple faible : Je t'aide à améliorer ta communication.</p>
            <p>
              Exemple plus fort : Je t'aide à structurer une identité de marque
              claire et exploitable en autonomie.
            </p>
          </ExampleBox>
        </ExerciseBlock>
        <ExerciseBlock
          title="Promesse concrète"
          description="Réponds pour préciser ce que ton client recevra réellement."
        >
          <div className="grid gap-5">
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">Résultat promis</p>
              <TextareaBlock
                value={getValue("promisedResult")}
                onChange={(value) => updateValue("promisedResult", value)}
                placeholder="Formule le résultat concret promis."
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">
                Expérience promise
              </p>
              <TextareaBlock
                value={getValue("promisedExperience")}
                onChange={(value) => updateValue("promisedExperience", value)}
                placeholder="Formule l'expérience que tu promets."
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">Posture promise</p>
              <TextareaBlock
                value={getValue("promisedPosture")}
                onChange={(value) => updateValue("promisedPosture", value)}
                placeholder="Formule la posture que ton client peut attendre."
              />
            </div>
          </div>
        </ExerciseBlock>
        <ExerciseBlock
          title="Formulation finale"
          description="Travaille ta promesse dans deux formats, puis formule la version finale."
        >
          <div className="grid gap-5">
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">Version explicite</p>
              <TextareaBlock
                value={getValue("promiseExplicit")}
                onChange={(value) => updateValue("promiseExplicit", value)}
                placeholder="Formule une phrase claire et concrète."
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">Version intégrée</p>
              <TextareaBlock
                value={getValue("promiseIntegrated")}
                onChange={(value) => updateValue("promiseIntegrated", value)}
                placeholder="Formule une version intégrée naturellement dans ton discours."
              />
            </div>
            <ExampleBox title="Point de repère">
              Une promesse claire transforme la confiance en engagement.
            </ExampleBox>
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-700">Ta promesse</p>
              <TextareaBlock
                value={getValue("promiseFinal")}
                onChange={(value) => updateValue("promiseFinal", value)}
                placeholder="Formule ici la version finale de ta promesse."
              />
            </div>
          </div>
        </ExerciseBlock>
      </section>
    </div>
  );
}
