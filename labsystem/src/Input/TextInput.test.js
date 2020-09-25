import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import TextInput from "./TextInput";

describe("TextInput", () => {
  it("renders with base props AbstractTextInput with type text", async () => {
    const renderedComponent = renderer
      .create(<TextInput id="testInput" label="Test Input" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders AbstractTextInput with type=text", async () => {
    const component = mount(<TextInput id="testInput" label="Test Input" />);
    expect(component.find("input[type='text']")).toHaveLength(1);
  });
});
