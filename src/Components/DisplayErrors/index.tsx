import { Box } from "@material-ui/core";
import { FormikErrors } from "formik";

export interface DisplayErrorsProps {
  errors: FormikErrors<{
    name: string;
    streetName: string;
    houseNumber: string;
    postalCode: string;
    city: string;
    phoneNumber: string;
    cardNumber: string;
    securityCode: string;
    expiryMonth: string;
    expiryYear: string;
  }>;
}

export const DisplayErrors = ({ errors }: DisplayErrorsProps) => (
  <>
    {Object.values(errors).map((err, idx) => (
      <Box key={`${idx}Errors`}>{err}</Box>
    ))}
  </>
);
