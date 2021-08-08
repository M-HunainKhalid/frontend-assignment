import { ChangeEvent } from "react";
import { Box, TextField } from "@material-ui/core";

interface PaymentDetailsFormProps {
  cardNumber: string;
  securityCode: string;
  expiryMonth: string;
  expiryYear: string;
  onChange: (e: ChangeEvent) => void;
}

export const PaymentDetailsForm = ({
  cardNumber,
  securityCode,
  expiryMonth,
  expiryYear,
  onChange,
}: PaymentDetailsFormProps) => {
  return (
    <Box>
      <TextField
        id="cardNumber"
        label="Card Number"
        variant="outlined"
        value={cardNumber}
        onChange={onChange}
      />
      <TextField
        type="password"
        id="securityCode"
        label="Security Code"
        variant="outlined"
        value={securityCode}
        onChange={onChange}
      />
      <TextField
        type="number"
        id="expiryMonth"
        label="Expiry Month"
        variant="outlined"
        placeholder="MM"
        value={expiryMonth}
        onChange={onChange}
      />
      <TextField
        type="number"
        id="expiryYear"
        label="Expiry Year"
        variant="outlined"
        value={expiryYear}
        placeholder="YYYY"
        onChange={onChange}
      />
    </Box>
  );
};
