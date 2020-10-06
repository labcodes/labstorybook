import { render } from "@testing-library/svelte";
import Button from "./Button.svelte";

describe("Button", () => {
  it("renders with base props", async () => {
    const { container } = render(Button, { text: "test" });
    expect(container).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const { container, getByText } = render(Button, {
      text: "test",
      disabled: true,
    });

    expect(container).toMatchSnapshot();
    expect(getByText("test").disabled).toBeTruthy();
  });

  it("renders as expected when passing a warning skin", async () => {
    const { container } = render(Button, { text: "test", skin: "warning" });
    expect(container).toMatchSnapshot();
  });

  it("renders as expected when passing a small size", async () => {
    const { container } = render(Button, { text: "test", size: "small" });
    expect(container).toMatchSnapshot();
  });

  it("renders as expected when passing a wallet icon", async () => {
    const { container } = render(Button, { text: "test", icon: "wallet" });
    expect(container).toMatchSnapshot();
  });
});
