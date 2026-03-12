import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

type AudioNoteProps = {
  title: string;
  description?: string;
};

export function AudioNote({ title, description }: AudioNoteProps) {
  return (
    <Card className="bg-[#F6F1E8] px-6 py-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <Badge>Note vocale</Badge>
        <span className="text-xs font-medium text-[#8A8379]">A ecouter</span>
      </div>
      <div className="grid gap-3 lg:grid-cols-[auto_1fr] lg:items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E7DDD2] bg-white text-xl">
          <span aria-hidden="true">♪</span>
        </div>
        <div>
          <h4 className="text-base font-semibold text-[#3F3F49]">{title}</h4>
          {description ? (
            <p className="mt-2 text-sm leading-6 text-[#756F67]">{description}</p>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
