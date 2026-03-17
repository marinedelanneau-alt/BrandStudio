type PromptListProps = {
  items: string[];
};

export function PromptList({ items }: PromptListProps) {
  return (
    <ul className="space-y-3 rounded-2xl border border-stone-200 bg-[#f7f2ea] p-5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-7 text-stone-700 sm:text-base">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-stone-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
