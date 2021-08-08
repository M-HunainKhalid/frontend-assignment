import { fireEvent, render, screen } from "@testing-library/react";
import { mockStepsAndActiveStep } from "Utils";
import { ActionBar } from ".";

describe("Action Bar Componet Tests", () => {
  const { mockActiveStep, mockSteps } = mockStepsAndActiveStep;
  const props = {
    activeStep: mockActiveStep,
    steps: mockSteps,
    handleBack: jest.fn(),
    handleNext: jest.fn(),
    disable: false,
    getStepContent: `Step ${mockActiveStep}`,
  };

  it("should render action bar component correctly", () => {
    render(<ActionBar {...props} />);
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("Back")).toBeInTheDocument();
    expect(screen.getByText(`Step ${mockActiveStep}`)).toBeInTheDocument();
  });

  it("should have working back and next button in action bar component", () => {
    render(<ActionBar {...props} />);
    const nextBtn = screen.getByText("Next");
    const backBtn = screen.getByText("Back");
    fireEvent.click(nextBtn);
    expect(props.handleNext).toHaveBeenCalled();
    fireEvent.click(backBtn);
    expect(props.handleBack).toHaveBeenCalled();
  });

  it("should have finish button in action bar component at the last step", () => {
    const props = {
      activeStep: mockSteps.length - 1,
      steps: mockSteps,
      handleBack: jest.fn(),
      handleNext: jest.fn(),
      disable: false,
      getStepContent: `Step ${mockActiveStep}`,
    };
    render(<ActionBar {...props} />);
    expect(screen.getByText("Finish")).toBeInTheDocument();
  });
});
