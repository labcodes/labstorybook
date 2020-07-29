/* eslint-disable no-console */
import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  const originalWarn = console.warn;
  afterEach(() => {
    console.warn = originalWarn;
  });

  it("renders with base props", async () => {
    expect(
      shallow(
        <Checkbox
          name="test-checkbox-group"
          id="test-checkbox"
          label="test checkbox"
        />
      )
    ).toBeTruthy();
    const renderedComponent = renderer
      .create(
        <Checkbox
          name="test-checkbox-group"
          id="test-checkbox"
          label="test checkbox"
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("raises console.warn when passing checked and defaultChecked at the same time", async () => {
    console.warn = jest.fn();

    shallow(
      <Checkbox
        name="test-checkbox-group"
        id="test-checkbox"
        label="test checkbox"
        checked
        defaultChecked
      />
    );

    const consoleText =
      "You are setting both checked and defaultChecked for input test-checkbox at the same time. We always initialize the checkbox with defaultChecked. Make sure this is the behaviour you want.";

    expect(console.warn).toBeCalledWith(consoleText);
  });

  it("renders as expected when passing disabled as true", async () => {
    const renderedComponent = renderer
      .create(
        <Checkbox
          name="test-checkbox"
          id="test-checkbox"
          label="test checkbox"
          disabled
        />
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing indeterminate as true", async () => {
    const renderedComponent = renderer
      .create(
        <Checkbox
          name="test-checkbox"
          id="test-checkbox"
          label="test checkbox"
          indeterminate
          checked
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a different className", async () => {
    const renderedComponent = renderer
      .create(
        <Checkbox
          name="test-checkbox"
          id="test-checkbox"
          label="test checkbox"
          className="lab-checkbox--purple"
          checked
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();and
  });

  it("inits state.localChecked with defaultChecked if defined", async () => {
    let component = shallow(
      <Checkbox
        name="test-checkbox"
        id="test-checkbox"
        label="test checkbox"
        defaultChecked
      />
    );
    expect(component.state().localChecked).toBe(true);

    component = shallow(
      <Checkbox
        name="test-checkbox"
        id="test-checkbox"
        label="test checkbox"
        defaultChecked={false}
      />
    );
    expect(component.state().localChecked).toBe(false);

    component = shallow(
      <Checkbox name="test-checkbox" id="test-checkbox" label="test checkbox" />
    );
    expect(component.state().localChecked).toBe(false);
  });

  it("changes state when input changes", async () => {
    const component = shallow(
      <Checkbox name="test-checkbox" id="test-checkbox" label="test checkbox" />
    );

    expect(component.state().localChecked).toBe(false);
    component.find("input").at(0).simulate("change");
    expect(component.state().localChecked).toBe(true);
  });

  it("calls props.onChange passing event when input changes", async () => {
    const mockOnChange = jest.fn();
    const component = shallow(
      <Checkbox
        name="test-checkbox"
        id="test-checkbox"
        label="test checkbox"
        onChange={mockOnChange}
      />
    );

    expect(component.state().localChecked).toBe(false);
    expect(mockOnChange).not.toBeCalled();

    component.find("input").at(0).simulate("change", { test: "event" });

    expect(component.state().localChecked).toBe(true);
    expect(mockOnChange).toBeCalledWith({ test: "event" });
  });
});
