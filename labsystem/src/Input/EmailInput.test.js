import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import EmailInput from "./EmailInput";

describe("EmailInput", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<EmailInput id="testInput" label="Test Input" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as type=email", async () => {
    const component = mount(<EmailInput id="testInput" label="Test Input" />);
    expect(component.find("input[type='email']")).toHaveLength(1);
  });
});
