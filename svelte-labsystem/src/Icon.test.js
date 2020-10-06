import { render } from "@testing-library/svelte";
import Icon from "./Icon.svelte";

describe("Icon", () => {
  it("renders with base props", async () => {
    const { container } = render(Icon);
    expect(container).toMatchSnapshot();
  });

  it("renders with specific props", async () => {
    const { container } = render(Icon, {
      props: {
        class: "test",
        color: "teal-30",
        type: "edit",
        size: "large",
      },
    });

    expect(container).toMatchSnapshot();
  });
});
