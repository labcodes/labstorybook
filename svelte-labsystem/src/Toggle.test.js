import { render } from "@testing-library/svelte";
import Toggle from "./Toggle.svelte";

describe("Toggle", () => {
  it("renders with base props", async () => {
    const { container } = render(Toggle, {
      name: "test",
    });
    expect(container).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const { container } = render(Toggle, {
      name: "test",
      disabled: true,
    });

    expect(container).toMatchSnapshot();
    expect(container.querySelector("input").disabled).toBeTruthy();
  });

  it("renders as expected when passing a different theme", async () => {
    const { container } = render(Toggle, {
      name: "test",
      theme: "purple",
    });
    expect(container).toMatchSnapshot();
  });
});
