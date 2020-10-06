import { render } from "@testing-library/svelte";
import TextButton from "./TextButton.svelte";

describe("TextButton", () => {
  it("renders with base props", async () => {
    const { container } = render(TextButton, { text: "test" });
    expect(container).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const { container, getByText } = render(TextButton, {
      text: "test",
      disabled: true,
    });

    expect(container).toMatchSnapshot();
    expect(getByText("test").disabled).toBeTruthy();
  });

  it("renders as expected when passing a warning skin", async () => {
    const { container } = render(TextButton, { text: "test", skin: "warning" });
    expect(container).toMatchSnapshot();
  });

  it("renders as expected when passing a small size", async () => {
    const { container } = render(TextButton, { text: "test", size: "small" });
    expect(container).toMatchSnapshot();
  });

  it("renders as expected when passing a wallet icon", async () => {
    const { container } = render(TextButton, { text: "test", icon: "wallet" });
    expect(container).toMatchSnapshot();
  });

  it("renders as expected when passing fullWidth prop", async () => {
    const { container } = render(TextButton, { text: "test", fullWidth: true });
    expect(container).toMatchSnapshot();
  });
});
