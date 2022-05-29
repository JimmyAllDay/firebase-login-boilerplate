import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import App from "../../../App";
import { BrowserRouter } from "react-router-dom";

test("Renders nav", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const login = screen.getByTestId("navbar");
  expect(login).toBeInTheDocument();
});

test("Renders nav bar logo", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const navLogo = screen.getByTestId("nav-logo");
  expect(navLogo).toBeInTheDocument();
});
