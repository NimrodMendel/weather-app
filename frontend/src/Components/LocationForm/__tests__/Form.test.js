import { render, cleanup, screen, waitFor } from "@testing-library/react";
import { LocationForm } from "../Form";
import userEvent from "@testing-library/user-event";

describe("Test suite for the Location form", () => {
  afterEach(() => {
    cleanup();
  });

  test("check whether the form is rendered correctly", () => {
    const getForecast = jest.fn();
    const { getByTestId } = render(<LocationForm getForecast={getForecast} />);

    const locationForm = getByTestId("location-form");

    expect(locationForm).toBeInTheDocument();
  });

  test("check whether the form is submitted correctly", async () => {
    const getForecast = jest.fn();
    render(<LocationForm getForecast={getForecast} />);

    userEvent.type(screen.getByLabelText(/City/i), "London");
    userEvent.click(screen.getByTestId("submit-btn"), { name: /submit/i });

    await waitFor(() => {
      expect(getForecast).toHaveBeenCalled();
    });
  });
});
