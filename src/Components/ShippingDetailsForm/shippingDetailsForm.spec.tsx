import { render, screen } from "@testing-library/react";
import { ShippingDetailsForm } from ".";

describe("Payment Details Form Component Tests", () => {
  const props = {
    shippingDetails: {
      name: "Sample Name",
      streetName: "Sample Street",
      houseNumber: "B40",
      postalCode: "75300",
      city: "Karchi",
      phoneNumber: "1234567890",
    },
    onChange: jest.fn,
  };

  it("should render payment details form correctly with given values", () => {
    render(
      <ShippingDetailsForm
        shippingDetails={props.shippingDetails}
        onChange={props.onChange}
      />
    );
    const name = screen.getByLabelText("Name");
    const streetName = screen.getByLabelText("Street Name");
    const houseNumber = screen.getByLabelText("House Number");
    const postalCode = screen.getByLabelText("Postal Code");
    const city = screen.getByLabelText("City");
    const phoneNumber = screen.getByLabelText("Phone Number");
    expect(name).toBeInTheDocument();
    expect(streetName).toBeInTheDocument();
    expect(houseNumber).toBeInTheDocument();
    expect(postalCode).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(phoneNumber).toBeInTheDocument();
    expect(name).toHaveAttribute("value", "Sample Name");
    expect(streetName).toHaveAttribute("value", "Sample Street");
    expect(houseNumber).toHaveAttribute("value", "B40");
    expect(postalCode).toHaveAttribute("value", "75300");
    expect(city).toHaveAttribute("value", "Karchi");
    expect(phoneNumber).toHaveAttribute("value", "1234567890");
  });
});
