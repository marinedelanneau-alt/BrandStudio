import { ColorPicker } from "../ui/ColorPicker";
import { FieldBlock } from "./FieldBlock";

export function ColorGeneratorField({ label, colors }: { label: string; colors: string[] }) {
  return (
    <FieldBlock label={label}>
      <ColorPicker colors={colors} />
    </FieldBlock>
  );
}
