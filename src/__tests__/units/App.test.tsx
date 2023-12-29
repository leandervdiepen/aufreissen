import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

describe("WYSIWYG Slate Editor", () => {
  it("should update the value on text input", () => {
    render(<App />);

    const editor = screen.getByRole("textbox");
    fireEvent.change(editor, { target: { value: "Hello, Slate!" } });

    // Replace this with your logic to get the output from the editor
    const output = editor.value;

    expect(output).toBe("Hello, Slate!");
  });
});
