import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../../../App";
import { BrowserRouter, MemoryRouter, createHistory } from "react-router-dom";

import { createMemoryHistory } from "history";

test("Renders login button", () => {
  render(<App />, { wrapper: MemoryRouter });
  const loginButton = screen.getByTestId("login-modal-button");
  expect(loginButton).toBeInTheDocument();
});

test("Button is disabled when input fields are empty for '/login' route", () => {
  render(<App />, { wrapper: MemoryRouter });
  const loginButton = screen.getByTestId("login-modal-button");
  expect(loginButton).toBeDisabled();
});

test("Button is active when input fields have a value for '/login' route", () => {
  render(<App />, { wrapper: MemoryRouter });
  const emailInput = screen.getByPlaceholderText("Enter email");
  const passInput = screen.getByPlaceholderText("Enter password");
  const loginButton = screen.getByTestId("login-modal-button");
  const testValue = "Test";
  fireEvent.change(emailInput, { target: { value: testValue } });
  fireEvent.change(passInput, { target: { value: testValue } });
  expect(loginButton).not.toBeDisabled();
});

test("Button is disabled when input fields are empty for '/sign-up' route", () => {
  render(
    <MemoryRouter initialEntries={["/signup"]}>
      <App />
    </MemoryRouter>
  );
  const loginButton = screen.getByTestId("login-modal-button");
  expect(loginButton).toBeDisabled();
});

test("Button is active when input fields have a value for 'Sign Up' route", async () => {
  render(
    <MemoryRouter initialEntries={["/signup"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByTestId("signup-h1")).toBeInTheDocument();

  const emailInput = screen.getByPlaceholderText("Enter email");
  const passInput = screen.getByPlaceholderText("Enter password");
  const confirmPassInput = screen.getByPlaceholderText("Re-enter password");
  const loginButton = screen.getByTestId("login-modal-button");
  const testValue = "Test";
  fireEvent.change(emailInput, { target: { value: testValue } });
  fireEvent.change(passInput, { target: { value: testValue } });
  fireEvent.change(confirmPassInput, { target: { value: testValue } });
  expect(loginButton).not.toBeDisabled();
});

test("Button is disabled when input fields are empty for '/password-reset' route", () => {
  render(
    <MemoryRouter initialEntries={["/password-reset"]}>
      <App />
    </MemoryRouter>
  );
  const loginButton = screen.getByTestId("login-modal-button");
  expect(loginButton).toBeDisabled();
});

test("Button is active when input field have a value for 'password-reset' route", async () => {
  render(
    <MemoryRouter initialEntries={["/password-reset"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByTestId("reset-h1")).toBeInTheDocument();

  const emailInput = screen.getByPlaceholderText("Enter email");
  const loginButton = screen.getByTestId("login-modal-button");
  const testValue = "Test";
  fireEvent.change(emailInput, { target: { value: testValue } });
  expect(loginButton).not.toBeDisabled();
});
