type ProblemListProps = {
  items: string[];
};

export function ProblemList({ items }: ProblemListProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-[28px] border border-[#E7DDD2] bg-white p-5 text-sm leading-7 text-[#5E584F]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
