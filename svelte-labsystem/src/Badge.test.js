import { render } from "@testing-library/svelte";
import Badge from "./Badge.svelte";

describe("Badge", () => {
  it("renders with base props", async () => {
    const { container } = render(Badge);
    expect(container).toMatchSnapshot();
  });

  it("renders with specific props", async () => {
    const { container } = render(Badge, {
      props: {
        class: "test",
        color: "teal-30",
        type: "harvest",
        wrapperColor: "mineral-70",
      },
    });

    expect(container).toMatchSnapshot();
  });
});
