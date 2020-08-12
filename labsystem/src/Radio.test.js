/* eslint-disable no-console */
import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Radio from "./Radio";

describe("Radio", () => {
  const originalWarn = console.warn;
  afterEach(() => {
    console.warn = originalWarn;
  });

  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(
        <Radio
          name="test-radio-group"
          id="test-radio"
          label="test radio"
          value="radio1"
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("raises console.warn when passing checked and defaultChecked at the same time", async () => {
    console.warn = jest.fn();

    shallow(
      <Radio
        name="test-radio-group"
        id="test-radio"
        label="test radio"
        value="radio1"
        checked
        defaultChecked
      />
    );

    const consoleText =
      "You are setting both checked and defaultChecked for radio input test-radio at the same time. We always initialize the radio with defaultChecked. Make sure this is the behaviour you want.";

    expect(console.warn).toBeCalledWith(consoleText);
  });

  it("renders as expected when passing disabled as true", async () => {
    const renderedComponent = renderer
      .create(
        <Radio
          name="test-radio"
          id="test-radio"
          label="test radio"
          value="radio1"
          disabled
        />
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a different className", async () => {
    const renderedComponent = renderer
      .create(
        <Radio
          name="test-radio"
          id="test-radio"
          label="test radio"
          value="radio1"
          className="lab-radio--purple"
          checked
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("inits state.localChecked with defaultChecked if defined", async () => {
    let component = shallow(
      <Radio
        name="test-radio"
        id="test-radio"
        label="test radio"
        value="radio1"
        defaultChecked
      />
    );
    expect(component.state().localChecked).toBe(true);

    component = shallow(
      <Radio
        name="test-radio"
        id="test-radio"
        label="test radio"
        value="radio1"
        defaultChecked={false}
      />
    );
    expect(component.state().localChecked).toBe(false);

    component = shallow(
      <Radio
        name="test-radio"
        id="test-radio"
        label="test radio"
        value="radio1"
      />
    );
    expect(component.state().localChecked).toBe(false);
  });

  it("changes state when input changes", async () => {
    const component = shallow(
      <Radio
        name="test-radio"
        id="test-radio"
        label="test radio"
        value="radio1"
      />
    );

    expect(component.state().localChecked).toBe(false);
    component.find("input").at(0).simulate("change");
    expect(component.state().localChecked).toBe(true);
  });

  it("calls props.onChange passing event when input changes", async () => {
    const mockOnChange = jest.fn();
    const component = shallow(
      <Radio
        name="test-radio"
        id="test-radio"
        label="test radio"
        value="radio1"
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
