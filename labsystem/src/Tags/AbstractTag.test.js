import React from "react";
import renderer from "react-test-renderer";

import AbstractTag from "./AbstractTag";

describe("AbstractTag", () => {
  it("renders with base props for 'simple' type", async () => {
    const renderedComponent = renderer
      .create(<AbstractTag text="Test SimpleTag" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with base props for 'removable' type", async () => {
    const renderedComponent = renderer
      .create(<AbstractTag removable text="Test RemovableTag" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with base props for 'togglable' type", async () => {
    const renderedComponent = renderer
      .create(<AbstractTag isTogglable text="Test TogglableTag" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with base props for 'dropdown' type", async () => {
    const renderedComponent = renderer
      .create(<AbstractTag isDropdown text="Test DropdownTag" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
