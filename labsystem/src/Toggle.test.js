/* eslint-disable no-console */
import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Toggle from "./Toggle";

describe("Toggle", () => {
  it("renders with base props", async () => {
    expect(shallow(<Toggle name="test-toggle" />)).toBeTruthy();
    const renderedComponent = renderer
      .create(<Toggle name="test-toggle" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const renderedComponent = renderer
      .create(<Toggle name="test-toggle" disabled />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a different theme", async () => {
    const renderedComponent = renderer
      .create(<Toggle theme="purple" name="test-toggle" disabled />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("inits state.localValue with defaultValue if defined", async () => {
    let component = shallow(<Toggle name="test-toggle" defaultValue />);
    expect(component.state().localValue).toBe(true);

    component = shallow(<Toggle name="test-toggle" defaultValue={false} />);
    expect(component.state().localValue).toBe(false);

    component = shallow(<Toggle name="test-toggle" />);
    expect(component.state().localValue).toBe(false);
  });

  it("changes state when input changes", async () => {
    const component = shallow(<Toggle name="test-toggle" />);

    expect(component.state().localValue).toBe(false);
    component.find("input").at(0).simulate("change");
    expect(component.state().localValue).toBe(true);
  });

  it("calls props.handleToggle passing event when input changes", async () => {
    const mockHandleToggle = jest.fn();
    const component = shallow(
      <Toggle name="test-toggle" handleToggle={mockHandleToggle} />
    );

    expect(component.state().localValue).toBe(false);
    expect(mockHandleToggle).not.toBeCalled();

    component.find("input").at(0).simulate("change", { test: "event" });

    expect(component.state().localValue).toBe(true);
    expect(mockHandleToggle).toBeCalledWith({ test: "event" });
  });
});
