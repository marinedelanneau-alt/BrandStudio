type ImageUploadFieldProps = {
  label: string;
  value?: unknown;
  placeholder?: string;
};

export function ImageUploadField({
  label,
  value,
  placeholder,
}: ImageUploadFieldProps) {
  return (
    <div
      aria-label={label}
      className="grid min-h-[220px] content-center gap-3 rounded-[22px] border-2 border-dashed border-[#C96F2B] bg-white px-5 py-6 text-sm text-[#6A635B]"
    >
      <p className="m-0 font-semibold text-[#3F3F49]">{label}</p>
      <p className="m-0">
        {typeof value === "string" && value.trim()
          ? value
          : placeholder || "Ajoute ici tes references visuelles ou ton lien de travail."}
      </p>
    </div>
  );
}
