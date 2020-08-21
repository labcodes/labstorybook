import React from "react";
import renderer from "react-test-renderer";

import Button from "./Button";

describe("Button", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<Button text="Test Default Button" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const renderedComponent = renderer
      .create(<Button text="Test Default Disabled Button" disabled />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a dark skin", async () => {
    const renderedComponent = renderer
      .create(<Button text="Test Default Dark Button" skin="dark" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a small size", async () => {
    const renderedComponent = renderer
      .create(<Button text="Test Default Small Button" size="small" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
