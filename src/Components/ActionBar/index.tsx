import { Box, Button, Typography } from "@material-ui/core";

interface ActionBarProps {
  activeStep: number;
  steps: string[];
  getStepContent: string;
  handleBack: () => void;
  handleNext: () => void;
  disable: boolean;
}

export const ActionBar = ({
  activeStep,
  steps,
  getStepContent,
  handleBack,
  handleNext,
  disable,
}: ActionBarProps) => (
  <Box>
    <Typography>{getStepContent}</Typography>
    <Box>
      <Button
        variant="contained"
        color="primary"
        disabled={activeStep === 0}
        onClick={() => handleBack()}
      >
        Back
      </Button>
      {activeStep === steps.length - 1 ? (
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={disable}
        >
          Finish
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleNext()}
          disabled={disable}
        >
          Next
        </Button>
      )}
    </Box>
  </Box>
);
