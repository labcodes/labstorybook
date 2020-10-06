import { render } from "@testing-library/svelte";
import Radio from "./Radio.svelte";

describe("Radio", () => {
  it("renders with base props", async () => {
    const { container } = render(Radio, {
      id: "test",
      name: "test",
      label: "Test",
    });
    expect(container).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const { container, getByLabelText } = render(Radio, {
      id: "test-input",
      name: "test-input",
      label: "Test",
      disabled: true,
    });

    expect(container).toMatchSnapshot();
    expect(getByLabelText("Test").disabled).toBeTruthy();
  });

  it("renders as expected when passing a different className", async () => {
    const { container } = render(Radio, {
      id: "test",
      name: "test",
      label: "Test",
      class: "dummy-class",
    });
    expect(container).toMatchSnapshot();
  });
});
