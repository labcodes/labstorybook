import React from "react";
import { mount } from "enzyme";
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
  });

  it("sets state with defaultValue if it is passed by props", async () => {
    const component = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        defaultValue="default value"
        value="test value"
      />
    );
    expect(component.state().localValue).toBe("default value");
  });

  it("sets state with isValid if it is passed by props", async () => {
    const component = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        defaultValue="default value"
        isValid={false}
      />
    );
    expect(component.state().localIsValid).toBe(false);
  });

  it("sets localIsValid to false if defaultValue is invalid", async () => {
    const component = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        type="email"
        defaultValue="default value"
      />
    );
    expect(component.state().localIsValid).toBe(false);
  });

  it("sets localIsValid to false if value is invalid", async () => {
    const component = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        type="email"
        value="test value"
      />
    );
    expect(component.state().localIsValid).toBe(false);
  });

  it("sets localIsValid to true if value is valid and change it if value validity changes", async () => {
    const component = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        type="email"
        value="testvalue@g.com"
      />
    );
    expect(component.state().localIsValid).toBe(true);

    component.setProps({ value: "value changed" });

    expect(component.state().localIsValid).toBe(false);
  });

  it("changes localValue state when input changes", async () => {
    const component = mount(
      <AbstractTextInput id="testInput" label="Test Input" name="testName" />
    );

    expect(component.state().localValue).toBe(undefined);
    component
      .find("input")
      .at(0)
      .simulate("change", {
        target: { value: "My new value", validity: { valid: true } },
      });
    expect(component.state().localValue).toBe("My new value");
  });
});
