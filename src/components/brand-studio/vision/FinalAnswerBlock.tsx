import { TextareaBlock } from "./TextareaBlock";

type FinalAnswerBlockProps = {
  title: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export function FinalAnswerBlock({
  title,
  value,
  onChange,
  placeholder,
}: FinalAnswerBlockProps) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-6">
      <TextareaBlock
        label={title}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        withCheckbox
      />
    </div>
  );
}
