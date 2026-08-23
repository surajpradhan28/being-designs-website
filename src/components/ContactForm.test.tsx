import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  it("shows validation errors when submitted empty", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /submit your brief/i }));

    expect(await screen.findByText(/please share your name/i)).toBeInTheDocument();
    expect(screen.getByText(/please share your email/i)).toBeInTheDocument();
    expect(screen.getByText(/please share a contact number/i)).toBeInTheDocument();
    expect(screen.getByText(/please share your brand name/i)).toBeInTheDocument();
    expect(screen.getByText(/please pick a service/i)).toBeInTheDocument();
    expect(screen.getByText(/please select a budget range/i)).toBeInTheDocument();
    expect(screen.getByText(/tell us a little about your brand/i)).toBeInTheDocument();
  });

  it("shows a success state after a valid submission", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/full name/i), "Arun Patil");
    await user.type(screen.getByLabelText(/e-mail/i), "arun@example.com");
    await user.type(screen.getByLabelText(/contact number/i), "+91 98765 43210");
    await user.type(screen.getByLabelText(/brand \/ company name/i), "Bumzy");
    await user.selectOptions(screen.getByLabelText(/service required/i), "Brand Identity");
    await user.selectOptions(screen.getByLabelText(/budget/i), "₹50,000 – ₹1,00,000");
    await user.type(
      screen.getByLabelText(/explain your brand/i),
      "We are a D2C snacks brand looking for a full brand refresh.",
    );

    await user.click(screen.getByRole("button", { name: /submit your brief/i }));

    expect(
      await screen.findByText(/thanks — your brief is in/i, {}, { timeout: 2000 }),
    ).toBeInTheDocument();
  });
});
