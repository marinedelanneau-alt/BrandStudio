import { Dropzone } from "../ui/Dropzone";
import { FieldBlock } from "./FieldBlock";

type ImageUploadFieldProps = {
  label: string;
  hint: string;
};

export function ImageUploadField({ label, hint }: ImageUploadFieldProps) {
  return (
    <FieldBlock label={label}>
      <Dropzone hint={hint} />
    </FieldBlock>
  );
}
