/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { expect } from "vitest";

test("button starts with correct label and color", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /change to blue/i });
  expect(button).toHaveClass("red");

  fireEvent.click(button);
  expect(button).toHaveTextContent(/change to red/i);
  expect(button).toHaveClass("blue");
});

test("checkbox flow", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", {name: /blue/i});
  const checkboxElement = screen.getByRole("checkbox", {name: /disable button/i});

  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(checkboxElement).toBeChecked();
});
