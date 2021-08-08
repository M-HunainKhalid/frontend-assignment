import { render, screen } from "@testing-library/react";
import { mockStepsAndActiveStep } from "Utils";
import { Stepper } from ".";

describe("Stepper Componet Tests", () => {
  const { mockActiveStep, mockSteps } = mockStepsAndActiveStep;
  it("should render cart component correctly", () => {
    render(<Stepper activeStep={mockActiveStep} steps={mockSteps} />);
    expect(screen.getByText(mockSteps[mockActiveStep])).toBeInTheDocument();
  });
});
