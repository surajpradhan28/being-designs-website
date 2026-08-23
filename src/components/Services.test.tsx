import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Services from "./Services";
import { serviceCategories } from "../data/services";

describe("Services", () => {
  it("renders every service category and every listed service", () => {
    render(<Services />);

    for (const category of serviceCategories) {
      expect(screen.getByRole("heading", { name: category.title })).toBeInTheDocument();
      for (const item of category.items) {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      }
    }
  });
});
