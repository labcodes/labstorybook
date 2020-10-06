import { render } from "@testing-library/svelte";
import OutlineButton from "./OutlineButton.svelte";

describe("OutlineButton", () => {
  it("renders with base props", async () => {
    const { container } = render(OutlineButton, { text: "test" });
    expect(container).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const { container, getByText } = render(OutlineButton, {
      text: "test",
      disabled: true,
    });

    expect(container).toMatchSnapshot();
    expect(getByText("test").disabled).toBeTruthy();
  });

  it("renders as expected when passing a light skin", async () => {
    const { container } = render(OutlineButton, {
      text: "test",
      skin: "light",
    });
    expect(container).toMatchSnapshot();
  });

  it("renders as expected when passing a small size", async () => {
    const { container } = render(OutlineButton, {
      text: "test",
      size: "small",
    });
    expect(container).toMatchSnapshot();
  });

  it("renders as expected when passing a wallet icon", async () => {
    const { container } = render(OutlineButton, {
      text: "test",
      icon: "wallet",
    });
    expect(container).toMatchSnapshot();
  });

  it("renders as expected when passing fullWidth prop", async () => {
    const { container } = render(OutlineButton, {
      text: "test",
      fullWidth: true,
    });
    expect(container).toMatchSnapshot();
  });
});
