import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders the brand and primary nav links", () => {
    render(<Navbar />);

    expect(screen.getByLabelText(/being designs home/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
  });

  it("toggles the mobile menu open and closed", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggle = screen.getByLabelText(/open menu/i);
    await user.click(toggle);
    expect(screen.getByLabelText(/close menu/i)).toBeInTheDocument();

    await user.click(screen.getByLabelText(/close menu/i));
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
  });
});
