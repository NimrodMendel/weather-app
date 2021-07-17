import { render, cleanup, screen, waitFor } from "@testing-library/react";
import { ErrorMessage } from "../ErrorMessage";
import { LocationForm } from "../../LocationForm/Form";
import userEvent from "@testing-library/user-event";
import App from "../../../App";

describe("Test suite for the ErrorMessage component", () => {
  afterEach(() => {
    cleanup();
  });

  test("Check whether ErrorMessage component renders correctly", async () => {
    const error = "Something's wrong";

    const { getByTestId } = render(<ErrorMessage error={error} />);

    const errorMessage = getByTestId("error-message");

    expect(errorMessage).toBeInTheDocument();
  });

  test("Check whether ErrorMessage component renders with error message", async () => {
    const error = "Something's wrong";

    const { getByTestId } = render(<ErrorMessage error={error} />);

    const errorMessage = getByTestId("error-message");

    expect(errorMessage).toHaveTextContent(error);
  });
});
