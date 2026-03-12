import type { ChangeEvent } from "react";
import { Button } from "../ui/Button";

type ImageUploadFieldProps = {
  id: string;
  label: string;
  value?: unknown;
  onChange: (value: string[]) => void;
};

function readFiles(event: ChangeEvent<HTMLInputElement>, onChange: (value: string[]) => void) {
  const files = Array.from(event.target.files ?? []);

  if (!files.length) {
    return;
  }

  Promise.all(
    files.map(
      (file) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result ?? ""));
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(file);
        })
    )
  )
    .then((results) => onChange(results.filter(Boolean)))
    .catch(() => onChange([]));
}

export function ImageUploadField({
  id,
  label,
  value,
  onChange,
}: ImageUploadFieldProps) {
  const images = Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string" && item.length > 0)
    : [];

  return (
    <div className="grid gap-4 rounded-[22px] border-2 border-dashed border-[#C96F2B] bg-white px-5 py-5">
      <div className="grid gap-2">
        <p className="m-0 text-sm font-semibold text-[#3F3F49]">{label}</p>
        <p className="m-0 text-sm text-[#6A635B]">
          Ajoute ici tes references visuelles, captures ou inspirations.
        </p>
      </div>

      <label
        htmlFor={id}
        className="flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-[18px] border border-[#E7DDD2] bg-[#F6F1E8] px-4 py-6 text-center"
      >
        <span className="text-2xl" aria-hidden="true">
          +
        </span>
        <span className="mt-2 text-sm font-medium text-[#3F3F49]">
          Glisse des images ici ou clique pour importer
        </span>
        <span className="mt-1 text-xs text-[#8A8379]">PNG, JPG, captures, moodboards</span>
      </label>
      <input
        id={id}
        type="file"
        accept="image/*"
        multiple
        className="sr-only"
        onChange={(event) => readFiles(event, onChange)}
      />

      {images.length ? (
        <div className="grid grid-cols-2 gap-3">
          {images.map((image, index) => (
            <img
              key={`${id}-${index}`}
              src={image}
              alt={`${label} ${index + 1}`}
              className="aspect-square w-full rounded-[18px] border border-[#E7DDD2] object-cover"
            />
          ))}
        </div>
      ) : null}

      {images.length ? (
        <Button variant="ghost" onClick={() => onChange([])}>
          Vider la selection
        </Button>
      ) : null}
    </div>
  );
}
