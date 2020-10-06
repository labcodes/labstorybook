import { render } from "@testing-library/svelte";
import Checkbox from "./Checkbox.svelte";

describe("Checkbox", () => {
  it("renders with base props", async () => {
    const { container } = render(Checkbox, {
      name: "test",
      id: "test",
      label: "Test",
    });
    expect(container).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const { container } = render(Checkbox, {
      name: "test",
      id: "test",
      label: "Test",
      disabled: true,
    });

    expect(container).toMatchSnapshot();
    expect(container.querySelector("input").disabled).toBeTruthy();
  });

  it("renders as expected when passing indeterminate as true", async () => {
    const { container } = render(Checkbox, {
      name: "test",
      id: "test",
      label: "Test",
      indeterminate: true,
    });

    expect(container).toMatchSnapshot();
    expect(container.querySelector("input").indeterminate).toBeTruthy();
  });

  it("renders as expected when passing a different class", async () => {
    const { container } = render(Checkbox, {
      name: "test",
      id: "test",
      label: "Test",
      class: "dummy-class",
    });
    expect(container).toMatchSnapshot();
  });
});
