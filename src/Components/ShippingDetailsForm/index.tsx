import { ChangeEvent } from "react";
import { Box, TextField } from "@material-ui/core";

interface ShippingDetailsProps {
  shippingDetails: {
    name: string;
    streetName: string;
    houseNumber: string;
    postalCode: string;
    city: string;
    phoneNumber: string;
  };
  onChange: (e: ChangeEvent) => void;
}

export const ShippingDetailsForm = ({
  shippingDetails,
  onChange,
}: ShippingDetailsProps) => {
  const { name, streetName, houseNumber, postalCode, city, phoneNumber } =
    shippingDetails;

  return (
    <Box>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        value={name}
        onChange={onChange}
      />
      <TextField
        id="streetName"
        label="Street Name"
        variant="outlined"
        value={streetName}
        onChange={onChange}
      />
      <TextField
        id="houseNumber"
        label="House Number"
        variant="outlined"
        value={houseNumber}
        onChange={onChange}
      />
      <TextField
        id="postalCode"
        label="Postal Code"
        variant="outlined"
        value={postalCode}
        onChange={onChange}
      />
      <TextField
        id="city"
        label="City"
        variant="outlined"
        value={city}
        onChange={onChange}
      />
      <TextField
        id="phoneNumber"
        label="Phone Number"
        variant="outlined"
        value={phoneNumber}
        onChange={onChange}
      />
    </Box>
  );
};
