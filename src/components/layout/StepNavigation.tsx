import { Button } from "../ui/Button";

type StepNavigationProps = {
  previousHref?: string;
  nextHref?: string;
};

export function StepNavigation({ previousHref, nextHref }: StepNavigationProps) {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
      {previousHref ? (
        <a href={previousHref}>
          <Button variant="secondary">Precedent</Button>
        </a>
      ) : (
        <span />
      )}
      {nextHref ? (
        <a href={nextHref}>
          <Button>Suivant</Button>
        </a>
      ) : null}
    </nav>
  );
}
