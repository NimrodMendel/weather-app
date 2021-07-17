import { render, cleanup, screen, waitFor } from "@testing-library/react";
import { Spinner } from "../Spinner";

describe("Test suite for the Spinner", () => {
  afterEach(() => {
    cleanup();
  });

  test("Render test", () => {
    const { getByTestId } = render(<Spinner />);

    const spinner = getByTestId("spinner");

    expect(spinner).toBeInTheDocument();
  });
});
