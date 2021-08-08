import { render, screen } from "@testing-library/react";
import { PaymentDetailsForm } from ".";

describe("Payment Details Form Component Tests", () => {
  const props = {
    cardNumber: "411111111111111",
    securityCode: "123",
    expiryMonth: "09",
    expiryYear: "2025",
    onChange: jest.fn(),
  };

  it("should render payment details form correctly with given values", () => {
    render(<PaymentDetailsForm {...props} />);
    const cardNumber = screen.getByLabelText("Card Number");
    const securityCode = screen.getByLabelText("Security Code");
    const expiryMonth = screen.getByLabelText("Expiry Month");
    const expiryYear = screen.getByLabelText("Expiry Year");
    expect(cardNumber).toBeInTheDocument();
    expect(securityCode).toBeInTheDocument();
    expect(expiryMonth).toBeInTheDocument();
    expect(expiryYear).toBeInTheDocument();
    expect(cardNumber).toHaveAttribute("value", "411111111111111");
    expect(securityCode).toHaveAttribute("value", "123");
    expect(expiryMonth).toHaveAttribute("value", "09");
    expect(expiryYear).toHaveAttribute("value", "2025");
  });
});
