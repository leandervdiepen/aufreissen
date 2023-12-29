import { describe, it, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
// import Toolbar from "./components/editor/Toolbar";
import Editor from "./components/editor/Editor";

describe("Toolbar functionality", () => {
  it("applies bold formatting to selected text", () => {
    render(<Editor />);
    const text = "Test text";
    const boldButton = screen.getByRole("button", { name: /bold/i });

    fireEvent.change(screen.getByRole("textbox"), { target: { value: text } });
    // Simulate text selection here
    fireEvent.click(boldButton);

    const formattedText = screen.getByText(text);
    expect(formattedText).toHaveStyle("font-weight: bold");
  });
});
