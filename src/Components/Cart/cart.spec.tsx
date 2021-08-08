import { render, screen } from "@testing-library/react";
import { mockPizza } from "Utils";
import { Cart } from ".";

describe("Cart Componet Tests", () => {
  it("should render cart component correctly", () => {
    render(<Cart pizza={mockPizza} />);
    mockPizza.forEach(({ size: { name, price }, toppings, quantity }) => {
      expect(screen.queryByText(name));
      expect(screen.queryByText(price));
      expect(screen.queryByText(toppings[0].name));
      expect(screen.queryByText(toppings[0].price));
      expect(screen.queryByText(quantity));
    });
  });
});
