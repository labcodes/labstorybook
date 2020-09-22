import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import PasswordInput from "./PasswordInput";

describe("PasswordInput", () => {
  const originalWarn = console.warn;
  afterEach(() => {
    console.warn = originalWarn;
  });

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

  it("raises console.warn and sets state with value when passing value and defaultValue by props at the same time", async () => {
    console.warn = jest.fn();

    const component = mount(
      <PasswordInput
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
      <PasswordInput id="testInput" label="Test Input" value="test value" />
    );

    const inputElement = component.find("input");
    expect(inputElement.render().attr("value")).toBe("test value");
  });

  it("sets state with defaultValue if it is passed by props and value is not passed by props", async () => {
    const component = mount(
      <PasswordInput
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
      <PasswordInput
        id="testInput"
        label="Test Input"
        defaultValue="default value"
        isValid={false}
      />
    );
    expect(component.find(".lab-input--invalid")).toHaveLength(1);
  });

  it("sets localIsValid to true if value is valid and change it if value validity changes", async () => {
    const component = mount(
      <PasswordInput
        id="testInput"
        label="Test Input"
        value="testvalue@g.com"
        required
      />
    );
    expect(component.find(".lab-input--invalid")).toHaveLength(0);

    component.setProps({ value: "" });
    component.update();

    expect(component.find(".lab-input--invalid")).toHaveLength(1);
  });

  it("shows help text", async () => {
    const component = mount(
      <PasswordInput
        id="testInput"
        label="Test Input"
        value="testvalue@g.com"
        helpMessage="help message"
        required
      />
    );

    expect(component.find(".lab-input__message--required").text()).toBe(
      "help message"
    );

    component.setProps({ value: "" });
    component.update();

    expect(component.find(".lab-input__message--error").text()).toBe(
      "help message"
    );
  });

  it("shows custom error message when input is invalid", async () => {
    const component = mount(
      <PasswordInput
        id="testInput"
        label="Test Input"
        value="test"
        customErrorMsg="error message"
        required
      />
    );

    expect(component.find(".lab-input__message--error")).toHaveLength(0);

    component.setProps({ value: "" });
    component.update();

    expect(component.find(".lab-input__message--error").text()).toBe(
      "error message"
    );
  });

  it("changes localValue state when input changes", async () => {
    const component = mount(
      <PasswordInput
        id="testInput"
        label="Test Input"
        name="testName"
        value="truthy value"
        onChange={() => {}}
      />
    );

    const inputElement = component.find("input");
    expect(inputElement.render().attr("value")).toBe("truthy value");

    component
      .find("input")
      .at(0)
      .simulate("change", {
        target: {
          value: "My new value",
          validity: { valid: true },
          setCustomValidity: jest.fn(),
        },
      });

    expect(inputElement.render().attr("value")).toBe("My new value");
  });

  it("renders prefix when it is passed by props", async () => {
    const renderedComponent = renderer
      .create(<PasswordInput id="testInput" label="Test Input" prefix="R$" />)
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <PasswordInput
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
      .create(<PasswordInput id="testInput" label="Test Input" suffix=".com" />)
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <PasswordInput
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
      .create(<PasswordInput id="testInput" label="Test Input" icon="star" />)
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <PasswordInput
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
      .create(<PasswordInput id="testInput" label="Test Input" icon="star" />)
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <PasswordInput
        id="testInput"
        label="Test Input"
        name="testName"
        required
      />
    );

    expect(mountedComponent.find("span.lab-input__required-icon")).toHaveLength(
      1
    );
  });
});
