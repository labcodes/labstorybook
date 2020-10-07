/* eslint-disable no-console */
import html from "svelte-htm";
import { render } from "@testing-library/svelte";
import Tooltip from "./Tooltip.svelte";

describe("Tooltip", () => {
  const originalWarn = console.warn;
  afterEach(() => {
    console.warn = originalWarn;
  });

  it("renders with base props and placement top by default", async () => {
    const { container } = render(
      html`<${Tooltip} id="test" text="This is a Tooltip">child text<//>`
    );
    expect(container).toMatchSnapshot();
    expect(container.querySelectorAll(".lab-tooltip--top").length).toBe(1);
  });

  it("raises console.warn if text is longer than 180 chars", async () => {
    console.warn = jest.fn();
    render(
      html`<${Tooltip}
        id="test"
        text="Lorem ipsum dolor sit amet, has integre virtute consequat at. Sit quodsi gloriatur efficiantur in, quas inermis menandri ex vix. Sit quodsi gloriatur efficiantur in, quas inermis. Sit quodsi gloriatur."
        >child text<//
      >`
    );
    expect(console.warn).toBeCalled();
  });
});
