type ProgressBarProps = {
  value: number;
  label?: string;
};

export function ProgressBar({ value, label }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div className="space-y-2">
      {label ? (
        <div className="flex items-center justify-between text-sm text-stone-600">
          <span>{label}</span>
          <span className="font-semibold text-stone-900">{clamped}%</span>
        </div>
      ) : null}
      <div className="h-2 overflow-hidden rounded-full bg-stone-200">
        <div
          className="h-full rounded-full bg-[#8b5e34] transition-all duration-300"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
