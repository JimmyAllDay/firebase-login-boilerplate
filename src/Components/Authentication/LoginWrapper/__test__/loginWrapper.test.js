import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, closest } from "@testing-library/react";
import App from "../../../../App";
import { BrowserRouter } from "react-router-dom";

test("Renders login wrapper modal", () => {
  render(<App />, { wrapper: BrowserRouter });
  const login = screen.getByTestId("login");
  expect(login).toBeInTheDocument();
});

test("Renders login modal logo", () => {
  render(<App />, { wrapper: BrowserRouter });
  const loginLogo = screen.getByTestId("login-logo");
  expect(loginLogo).toBeInTheDocument();
});
