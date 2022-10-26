import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Layout } from "./layout";
import userEvent from "@testing-library/user-event";
import { click } from "@testing-library/user-event/dist/click";
import { hasOnlyExpressionInitializer } from "typescript";

describe("given Layout component", () => {
  describe("when the component is rendered", () => {
    test("then it should display Testing Layout", () => {
      render(
        <Router>
          <Layout>
            <p>Testing Layout</p>
          </Layout>
        </Router>
      );
      const element = screen.getByText(/testing layout/i);
      expect(element).toBeInTheDocument();
    });
  });
});
