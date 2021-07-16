import { render, cleanup } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Test suite for the Footer component", () => {
  afterEach(() => {
    cleanup();
  });

  test("check whether the Footer is rendering", () => {
    const { getByTestId } = render(<Footer />);
    const footer = getByTestId("footer");

    expect(footer).toBeInTheDocument();
  });
});
