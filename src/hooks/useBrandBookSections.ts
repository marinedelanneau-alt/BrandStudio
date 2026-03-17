import type { BrandData } from "../types/brand";

export function useBrandBookSections(data: BrandData) {
  return [
    ["Nom de marque", data.brandName],
    ["Activité", data.activity],
    ["Objectif du rebranding", data.goal],
    ["Mission", data.missionFinal || data.missionShort || data.missionFormula],
    ["Vision", data.visionFinal || data.visionShort || data.visionWhere],
    [
      "Valeurs",
      [data.value1Action, data.value2Action, data.value3Action]
        .filter(Boolean)
        .join("\n\n"),
    ],
    ["Promesse", data.promiseFinal],
    ["Positionnement", data.positioningSentence],
    ["Personnalité", data.personaProfile],
    ["Ton de voix", data.tone],
    ["Baseline", data.baselineFinal || data.baselineShort || data.baselineRaw],
    ["Citation signature", data.signatureSentence],
  ].filter(([, value]) => value && String(value).trim()) as Array<[string, string]>;
}
