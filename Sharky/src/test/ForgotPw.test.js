import React from "react";
import { render, screen } from "@testing-library/react";
import ForgotPw from "../pages/ForgotPw"; // linking ForgotPw.js to the test file
import '@testing-library/jest-dom';

describe("ForgotPw Component Simple Tests", () => {
  it("renders the forgot password form", () => {
    render(<ForgotPw />);
    const headingElement = screen.getByText(/Forgot Password/i);
    expect(headingElement).toBeInTheDocument();
  });
});
// Mock the Supabase client to control the behavior of resetPasswordForEmail
jest.mock("../client", () => ({
    supabase: {
      auth: {
        resetPasswordForEmail: jest.fn(),
      },
    },
  }));

  describe("ForgotPw Component Advanced Tests", () => {
    // Clear previous mock calls before each test to avoid interference
    beforeEach(() => {
      supabase.auth.resetPasswordForEmail.mockClear();
    });
})
// Test that the Forgot Password form renders correctly
test("renders the Forgot Password form", () => {
    render(<ForgotPw />);

    // Check for the presence of main elements: title, email input, and submit button
    expect(screen.getByText("Forgot Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });
  // Test that an invalid email input displays an error message
  test("displays error for invalid email", async () => {
    render(<ForgotPw />);
  });


  