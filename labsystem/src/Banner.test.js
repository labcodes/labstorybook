import React from "react";
import renderer from "react-test-renderer";

import Banner from "./Banner";

describe("Banner", () => {
  it("renders with base props", () => {
    const renderedComponent = renderer
      .create(<Banner text="Info Banner" type="info" icon="calendar" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with button", () => {
    const renderedComponent = renderer
      .create(
        <Banner
          text="Warn Banner with button"
          type="warn"
          icon="coin"
          buttonProps={{
            text: "Warn Button",
            onClick: () => {},
          }}
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
