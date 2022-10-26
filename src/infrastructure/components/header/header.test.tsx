import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./header";
import { MemoryRouter as Router } from "react-router-dom";

describe("given Header component", () => {
  describe("when the component is rendered", () => {
    test("then it should display learning react", () => {
      render(
        <Router>
          <Header />
        </Router>
      );
      const element = screen.getByText(/learning react/i);
      expect(element).toBeInTheDocument();
    });
  });
});
