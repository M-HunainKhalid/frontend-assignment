import { Stepper as MuiStepper, Step, StepLabel } from "@material-ui/core";

interface StepperProps {
  activeStep: number;
  steps: string[];
}

export const Stepper = ({ activeStep, steps }: StepperProps) => (
  <MuiStepper activeStep={activeStep} alternativeLabel>
    {steps.map((label: string) => (
      <Step key={label}>
        <StepLabel>{label}</StepLabel>
      </Step>
    ))}
  </MuiStepper>
);
