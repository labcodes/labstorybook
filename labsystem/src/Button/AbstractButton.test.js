import React from "react";
import renderer from "react-test-renderer";

import AbstractButton from "./AbstractButton";

describe("AbstractButton", () => {
  it("renders with base props for default variant", async () => {
    const renderedComponent = renderer
      .create(<AbstractButton variant="default" text="Test Default Button" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with base props for outline variant", async () => {
    const renderedComponent = renderer
      .create(<AbstractButton variant="outline" text="Test Outline Button" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with base props for text variant", async () => {
    const renderedComponent = renderer
      .create(<AbstractButton variant="text" text="Test Text Button" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
