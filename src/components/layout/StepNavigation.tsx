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
    <nav className="sticky bottom-4 z-20 mt-8 flex items-center justify-between gap-3 rounded-[26px] border border-[rgba(231,221,210,0.88)] bg-[rgba(255,253,249,0.88)] px-4 py-4 shadow-[0_14px_30px_rgba(25,25,25,0.07)] backdrop-blur">
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
