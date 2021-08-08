import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { mockPizza } from "Utils";
import { OrderForm } from ".";

describe("Order Form Component Tests", () => {
  const props = {
    pizza: mockPizza,
    onAdd: jest.fn(),
  };

  it("should render cart when pizza is added", () => {
    render(<OrderForm {...props} />);

    mockPizza.forEach(({ size: { name, price }, toppings, quantity }) => {
      expect(screen.queryByText(name));
      expect(screen.queryByText(price));
      expect(screen.queryByText(toppings[0].name));
      expect(screen.queryByText(toppings[0].price));
      expect(screen.queryByText(quantity));
    });
  });

  it("should change pizza size using radio button", () => {
    render(<OrderForm {...props} />);

    expect(screen.getByLabelText("small")).toHaveAttribute("checked", "");

    fireEvent.click(screen.getByLabelText("medium"));

    waitFor(() => {
      expect(screen.getByLabelText("small")).toHaveAttribute("checked", false);
      expect(screen.getByLabelText("medium")).toHaveAttribute("checked", true);
    });
  });

  it("should add/remove pizza topping using checkbox", () => {
    render(<OrderForm {...props} />);

    const pepperCheckbox = screen.getByLabelText("pepper");
    const olivesCheckbox = screen.getByLabelText("olives");

    expect(pepperCheckbox).not.toHaveAttribute("checked");
    expect(olivesCheckbox).not.toHaveAttribute("checked");

    fireEvent.click(pepperCheckbox);
    fireEvent.click(olivesCheckbox);

    waitFor(() => {
      expect(pepperCheckbox).toHaveAttribute("checked", true);
      expect(olivesCheckbox).toHaveAttribute("checked", true);
    });

    fireEvent.click(olivesCheckbox);

    waitFor(() => {
      expect(pepperCheckbox).toHaveAttribute("checked", true);
      expect(olivesCheckbox).toHaveAttribute("checked", false);
    });
  });

  it("should change pizza quantity", () => {
    render(<OrderForm {...props} />);

    const quantityTextbox = screen.getByRole("spinbutton");

    expect(quantityTextbox).toHaveAttribute("value", "1");

    fireEvent.change(quantityTextbox, {
      target: { value: "2" },
    });

    waitFor(() => {
      expect(quantityTextbox).toHaveAttribute("value", "2");
    });
  });

  it("should add current pizza to list", () => {
    render(<OrderForm {...props} />);

    fireEvent.click(screen.getByRole("button"));

    expect(props.onAdd).toHaveBeenCalled();
  });
});
