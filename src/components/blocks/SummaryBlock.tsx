import { Card } from "../ui/Card";

type Props = {
  values: Record<string, string>;
};

export function SummaryBlock({ values }: Props) {
  const entries = Object.entries(values).filter(([, value]) => value.trim());

  if (!entries.length) return null;

  return (
    <Card className="bg-[#FFFDF9]">
      <div className="mb-3 text-[11px] font-black uppercase tracking-[0.16em] text-[#8A8379]">
        Synthèse
      </div>
      <div className="space-y-3">
        {entries.map(([label, value]) => (
          <div key={label}>
            <div className="text-xs font-black uppercase tracking-[0.16em] text-[#8A8379]">
              {label}
            </div>
            <div className="mt-1 text-sm leading-7 text-[#5E584F]">{value}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
