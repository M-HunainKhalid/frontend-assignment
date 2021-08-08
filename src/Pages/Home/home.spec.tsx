import { fireEvent, render, screen } from "@testing-library/react";
import { Home } from ".";

describe("Home Page Tests", () => {
  it("should render home page correctly", () => {
    render(<Home />);
    expect(screen.getByText("Let's Order!")).toBeInTheDocument();
  });
});
