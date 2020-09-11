import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import AbstractTextInput from "./AbstractTextInput";

describe("AbstractTextInput", () => {
  const originalWarn = console.warn;
  afterEach(() => {
    console.warn = originalWarn;
  });

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

  it("raises console.warn and sets state with value when passing value and defaultValue by props at the same time", async () => {
    console.warn = jest.fn();

    const component = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        defaultValue="default value"
        value="test value"
      />
    );

    expect(console.warn).toBeCalled();
    const inputElement = component.find("input");
    expect(inputElement.render().attr("value")).toBe("test value");
  });

  it("sets state with value if it is passed by props", async () => {
    const component = mount(
      <AbstractTextInput id="testInput" label="Test Input" value="test value" />
    );

    const inputElement = component.find("input");
    expect(inputElement.render().attr("value")).toBe("test value");
  });

  it("sets state with defaultValue if it is passed by props and value is not passed by props", async () => {
    const component = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        defaultValue="default value"
      />
    );
    const inputElement = component.find("input");
    expect(inputElement.render().attr("value")).toBe("default value");
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

    const inputElement = component.find("input");
    expect(inputElement.render().attr("value")).toBe("");

    component
      .find("input")
      .at(0)
      .simulate("change", {
        target: { value: "My new value", validity: { valid: true } },
      });

    expect(inputElement.render().attr("value")).toBe("My new value");
  });

  it("renders prefix when it is passed by props", async () => {
    const renderedComponent = renderer
      .create(
        <AbstractTextInput id="testInput" label="Test Input" prefix="R$" />
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        name="testName"
        prefix="R$"
      />
    );

    expect(mountedComponent.find("span.lab-input__prefix")).toHaveLength(2);
  });

  it("renders suffix when it is passed by props", async () => {
    const renderedComponent = renderer
      .create(
        <AbstractTextInput id="testInput" label="Test Input" suffix=".com" />
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        name="testName"
        suffix=".com"
      />
    );

    expect(mountedComponent.find("div.lab-input__suffix")).toHaveLength(1);
  });

  it("renders icon when it is passed by props", async () => {
    const renderedComponent = renderer
      .create(
        <AbstractTextInput id="testInput" label="Test Input" icon="star" />
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        name="testName"
        icon="star"
      />
    );

    expect(mountedComponent.find("span.lab-icon")).toHaveLength(1);
  });

  it("renders required icon when it is passed by props", async () => {
    const renderedComponent = renderer
      .create(
        <AbstractTextInput id="testInput" label="Test Input" icon="star" />
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        name="testName"
        required
      />
    );

    expect(mountedComponent.find("span.lab-input__required-icon")).toHaveLength(1);
  });
});
