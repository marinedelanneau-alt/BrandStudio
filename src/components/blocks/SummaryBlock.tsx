import { Card } from "../ui/Card";

type Props = {
  values: Record<string, string>;
};

export function SummaryBlock({ values }: Props) {
  const entries = Object.entries(values).filter(([, value]) => value.trim());

  if (!entries.length) return null;

  return (
    <Card className="border-[rgba(231,221,210,0.88)] bg-[linear-gradient(180deg,rgba(255,253,249,0.96),rgba(246,241,232,0.82))] px-6 py-6">
      <div className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#8A8379]">
        Synthese
      </div>
      <div className="space-y-3">
        {entries.map(([label, value]) => (
          <div key={label} className="rounded-[18px] border border-[#E7DDD2] bg-white px-4 py-4">
            <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8A8379]">
              {label}
            </div>
            <div className="mt-2 text-sm leading-7 text-[#5E584F]">{value}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
