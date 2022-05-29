import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, closest } from "@testing-library/react";
import App from "../../../../App";
import { BrowserRouter } from "react-router-dom";

test("Renders Log in H1", () => {
  render(<App />, { wrapper: BrowserRouter });
  const loginH1 = screen.getByTestId("login-h1");
  expect(loginH1).toBeInTheDocument();
});

test("Renders email input field", () => {
  render(<App />, { wrapper: BrowserRouter });
  const emailInput = screen.getByPlaceholderText(/enter email/i);
  expect(emailInput).toBeInTheDocument();
});

test("Renders email input field as empty", () => {
  render(<App />, { wrapper: BrowserRouter });
  const emailInput = screen.getByPlaceholderText(/enter email/i);
  expect(emailInput.value).toBe("");
});

test("Email input field value changes on input", () => {
  render(<App />, { wrapper: BrowserRouter });
  const emailInput = screen.getByPlaceholderText(/enter email/i);
  const testValue = "Test";
  fireEvent.change(emailInput, { target: { value: testValue } });
  expect(emailInput.value).toBe(testValue);
});

test("Renders password input element", () => {
  render(<App />, { wrapper: BrowserRouter });
  const passwordInput = screen.getByPlaceholderText(/enter password/i);
  expect(passwordInput).toBeInTheDocument();
});

test("Renders password input field as empty", () => {
  render(<App />, { wrapper: BrowserRouter });
  const passwordInput = screen.getByPlaceholderText(/enter password/i);
  expect(passwordInput.value).toBe("");
});

test("Password input field value changes on input", () => {
  render(<App />, { wrapper: BrowserRouter });
  const passwordInput = screen.getByPlaceholderText(/enter email/i);
  const testValue = "Test";
  fireEvent.change(passwordInput, { target: { value: testValue } });
  expect(passwordInput.value).toBe(testValue);
});

test("Renders 'sign up' text", () => {
  render(<App />, { wrapper: BrowserRouter });
  const signUpText = screen.getByTestId("sign-up-text");
  expect(signUpText.textContent).toBe(
    "Don't have an account yet? Sign up here."
  );
});

test("Renders 'sign up' link", () => {
  render(<App />, { wrapper: BrowserRouter });
  const signUpLink = screen.getByTestId("sign-up-link");
  expect(signUpLink.closest("a")).toHaveAttribute("href", "/signup");
});

test("Renders 'password reset' text", () => {
  render(<App />, { wrapper: BrowserRouter });
  const passResetText = screen.getByTestId("reset-text");
  expect(passResetText.textContent).toBe("Forgot password? Reset here.");
});

test("Renders 'password reset' link", () => {
  render(<App />, { wrapper: BrowserRouter });
  const passResetLink = screen.getByTestId("pass-reset-link");
  expect(passResetLink.closest("a")).toHaveAttribute("href", "/password-reset");
});
