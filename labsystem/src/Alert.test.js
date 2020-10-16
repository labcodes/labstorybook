import React from "react";
import renderer from "react-test-renderer";

import Alert from "./Alert";

describe("Alert", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<Alert text="Error Alert" type="error" icon="lupe" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with button", () => {
    const renderedComponent = renderer
      .create(
        <Alert
          text="Info Alert with button"
          type="warn"
          icon="wallet"
          buttonProps={{
            text: "Alert Button",
            onClicl: () => {},
          }}
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
