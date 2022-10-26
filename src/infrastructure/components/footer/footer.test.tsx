/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

describe("given Footer component", () => {
  describe("when the component is rendered", () => {
    beforeEach(() => {
      render(<Footer />);
    });
    test("then it should display mireya", () => {
      const element = screen.getByText(/mireya/i);
      expect(element).toBeInTheDocument();
    });

    test("then it should display today day", () => {
      const expectedDate = new Date().toLocaleString();
      const element = screen.getByText(expectedDate);
      expect(element).toBeInTheDocument();
    });
  });
});
