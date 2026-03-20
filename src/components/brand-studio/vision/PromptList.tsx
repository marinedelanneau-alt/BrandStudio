type PromptListProps = {
  title?: string;
  items: string[];
};

export function PromptList({ title, items }: PromptListProps) {
  return (
    <div className="space-y-3 rounded-2xl border border-stone-200 bg-[#f7f2ea] p-5">
      {title ? (
        <p className="text-sm font-medium text-stone-700">{title}</p>
      ) : null}
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-stone-700 sm:text-base">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-stone-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
