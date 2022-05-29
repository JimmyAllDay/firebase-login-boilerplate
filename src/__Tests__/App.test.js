import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

test("Renders app", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const app = screen.getByTestId(/app/i);
  expect(app).toBeInTheDocument();
});
