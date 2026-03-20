import type { ReactNode } from "react";

type FeatureCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
  onClick?: () => void;
};

export function FeatureCard({
  eyebrow,
  title,
  description,
  children,
  onClick,
}: FeatureCardProps) {
  const content = (
    <div className="space-y-3 rounded-[28px] border border-[#E7DDD2] bg-white p-5 sm:p-6">
      {eyebrow ? (
        <div className="text-[11px] font-black uppercase tracking-[0.16em] text-[#8A8379]">
          {eyebrow}
        </div>
      ) : null}
      <h3 className="text-lg font-semibold text-[#3F3F49]">{title}</h3>
      <p className="text-sm leading-7 text-[#6A635B]">{description}</p>
      {children}
    </div>
  );

  if (!onClick) {
    return content;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#F6E2D4]"
    >
      {content}
    </button>
  );
}
