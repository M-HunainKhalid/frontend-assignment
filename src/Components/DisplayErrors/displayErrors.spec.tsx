import { render, screen } from "@testing-library/react";
import { mockErrors } from "Utils";
import { DisplayErrors } from ".";

describe("Display Error Componet Tests", () => {
  it("should render display error component correctly", () => {
    render(<DisplayErrors errors={mockErrors} />);
    expect(screen.getAllByText("Sample Error").length).toBe(
      Object.keys(mockErrors).length
    );
  });
});
