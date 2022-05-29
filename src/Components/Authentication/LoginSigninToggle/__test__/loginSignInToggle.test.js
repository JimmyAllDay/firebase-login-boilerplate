import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../../../App";
import { MemoryRouter } from "react-router-dom";

test("Renders login toggle button", () => {
  render(<App />, { wrapper: MemoryRouter });
  const logSignTogNode = screen.getAllByTestId("log-sig-toggle")[0];
  expect(logSignTogNode).toBeInTheDocument();
});

test("Renders login toggle button", () => {
  render(<App />, { wrapper: MemoryRouter });
  const logSignTogNode = screen.getAllByTestId("log-sig-toggle")[0];
  expect(logSignTogNode).toHaveAttribute("href", "/login");
});

test("Renders sign in toggle button", () => {
  render(<App />, { wrapper: MemoryRouter });
  const logSignTogNode = screen.getAllByTestId("log-sig-toggle")[1];
  expect(logSignTogNode).toBeInTheDocument();
});

test("Renders login toggle button", () => {
  render(<App />, { wrapper: MemoryRouter });
  const logSignTogNode = screen.getAllByTestId("log-sig-toggle")[1];
  expect(logSignTogNode).toHaveAttribute("href", "/signup");
});

test("Renders login toggle button on signup route", async () => {
  render(
    <MemoryRouter initialEntries={["/signup"]}>
      <App />
    </MemoryRouter>
  );

  const logTogNode = screen.getAllByTestId("log-sig-toggle")[0];
  expect(logTogNode).toBeInTheDocument();
  expect(logTogNode).toHaveAttribute("href", "/login");

  const signTogNode = screen.getAllByTestId("log-sig-toggle")[1];
  expect(signTogNode).toBeInTheDocument();
  expect(signTogNode).toHaveAttribute("href", "/signup");
});

test("Renders login toggle button on signup route", async () => {
  render(
    <MemoryRouter initialEntries={["/password-reset"]}>
      <App />
    </MemoryRouter>
  );

  const logTogNode = screen.getAllByTestId("log-sig-toggle")[0];
  expect(logTogNode).toBeInTheDocument();
  expect(logTogNode).toHaveAttribute("href", "/login");

  const signTogNode = screen.getAllByTestId("log-sig-toggle")[1];
  expect(signTogNode).toBeInTheDocument();
  expect(signTogNode).toHaveAttribute("href", "/signup");
});
