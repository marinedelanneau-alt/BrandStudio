import { Button } from "../ui/Button";

type StepNavigationProps = {
  previousLabel?: string;
  nextLabel?: string;
  onPrevious?: () => void;
  onNext?: () => void;
};

export function StepNavigation({
  previousLabel,
  nextLabel,
  onPrevious,
  onNext,
}: StepNavigationProps) {
  return (
    <nav className="sticky bottom-4 z-20 mt-8 flex items-center justify-between gap-3 rounded-[24px] border border-[#E7DDD2] bg-[rgba(255,253,249,0.92)] px-4 py-4 shadow-[0_18px_36px_rgba(25,25,25,0.08)] backdrop-blur">
      {previousLabel && onPrevious ? (
        <Button variant="secondary" onClick={onPrevious}>
          {previousLabel}
        </Button>
      ) : (
        <span className="h-12" />
      )}
      {nextLabel && onNext ? (
        <Button variant="primary" onClick={onNext}>
          {nextLabel}
        </Button>
      ) : null}
    </nav>
  );
}
