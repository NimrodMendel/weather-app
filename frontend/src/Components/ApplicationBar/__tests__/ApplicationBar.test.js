import { render, cleanup } from "@testing-library/react";
import { ApplicationBar } from "../ApplicationBar";

describe("Test suite for the ApplicationBar component", () => {
  afterEach(() => {
    cleanup();
  });

  test("check whether the form is rendered correctly", () => {
    const { getByTestId } = render(<ApplicationBar />);
    const applicationBar = getByTestId("application-bar");

    expect(applicationBar).toBeInTheDocument();
  });
});
