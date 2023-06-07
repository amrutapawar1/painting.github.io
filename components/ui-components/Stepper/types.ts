export interface StepConfig {
    label: string;
    prevLabel: string,
    nextLabel: string,
    renderer: () => JSX.Element;
  }