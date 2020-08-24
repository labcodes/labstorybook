import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import PasswordInput from "./PasswordInput";

describe("PasswordInput", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<PasswordInput id="testInput" label="Test Input" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as type=password", async () => {
    const component = mount(
      <PasswordInput id="testInput" label="Test Input" />
    );
    expect(component.find("input[type='password']")).toHaveLength(1);
  });

  it("toggles password visibility when clicking the trailing icon", async () => {
    const component = mount(
      <PasswordInput id="testInput" label="Test Input" />
    );

    expect(component.state().showPassword).toBe(false);
    const trailingIcon = component.find("Icon[type='eye-closed']");
    expect(trailingIcon).toHaveLength(1);

    trailingIcon.at(0).simulate("click");

    expect(component.state().showPassword).toBe(true);
    expect(component.find("input[type='text']")).toHaveLength(1);
    expect(component.find("Icon[type='eye-opened']")).toHaveLength(1);
  });
});
