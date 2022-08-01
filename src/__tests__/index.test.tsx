import App from "../App";
import { render, screen } from "@testing-library/react";

describe("Testing App", () => {
  it("Background", () => {
    render(<App />);
    const backgroundImg = screen.getByAltText("Background Hero");
    expect(backgroundImg).toBeInTheDocument();
  });
});
