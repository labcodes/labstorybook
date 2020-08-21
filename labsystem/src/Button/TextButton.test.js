import React from "react";
import renderer from "react-test-renderer";

import TextButton from "./TextButton";

describe("TextButton", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<TextButton text="Test Text Button" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const renderedComponent = renderer
      .create(<TextButton text="Test Text Disabled Button" disabled />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a dark skin", async () => {
    const renderedComponent = renderer
      .create(<TextButton text="Test Text Dark Button" skin="dark" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a small size", async () => {
    const renderedComponent = renderer
      .create(<TextButton text="Test Text Small Button" size="small" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
