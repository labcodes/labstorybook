import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";

import AbstractTextInput from "./AbstractTextInput";

describe("AbstractTextInput", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<AbstractTextInput id="testInput" label="Test Input" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const renderedComponent = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        defaultValue="default"
        disabled
      />
    );
    expect(renderedComponent.find("input[disabled]")).toHaveLength(1);
    expect(renderedComponent.find("input"));
    console.log(renderedComponent.find("input[disabled]").value);
    // expect(renderedComponent).toMatchSnapshot();
  });
});
