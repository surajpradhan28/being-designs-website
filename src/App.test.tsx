import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the hero, services, about and contact sections", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /your one-stop creative studio for brands/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /services built to make your brand/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /being designs is your one-stop/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /start your project/i })).toBeInTheDocument();
  });
});
