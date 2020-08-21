import React from "react";
import renderer from "react-test-renderer";

import OutlineButton from "./OutlineButton";

describe("OutlineButton", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<OutlineButton text="Test Outline Button" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const renderedComponent = renderer
      .create(<OutlineButton text="Test Outline Disabled Button" disabled />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a dark skin", async () => {
    const renderedComponent = renderer
      .create(<OutlineButton text="Test Outline Dark Button" skin="dark" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a small size", async () => {
    const renderedComponent = renderer
      .create(<OutlineButton text="Test Outline Small Button" size="small" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
