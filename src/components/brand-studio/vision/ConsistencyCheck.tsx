type ConsistencyCheckProps = {
  title: string;
  question: string;
  answer: string;
};

export function ConsistencyCheck({
  title,
  question,
  answer,
}: ConsistencyCheckProps) {
  return (
    <div className="space-y-3 rounded-2xl border border-stone-200 bg-[#f7f2ea] p-5">
      <p className="text-sm font-medium text-stone-700">{title}</p>
      <p className="text-sm leading-7 text-stone-900 sm:text-base">{question}</p>
      <p className="text-sm leading-7 text-stone-600 sm:text-base">{answer}</p>
    </div>
  );
}
