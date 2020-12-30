/* eslint-disable no-console */
import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import Toggle from "./Toggle";

describe("Toggle", () => {
  it("renders with base props", async () => {
    const component = <Toggle name="test-toggle" />;
    expect(mount(component)).toBeTruthy();
    const renderedComponent = renderer.create(component).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const renderedComponent = renderer
      .create(<Toggle name="test-toggle" disabled />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a different color", async () => {
    const renderedComponent = renderer
      .create(<Toggle color="purple" name="test-toggle" disabled />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("initializes toggled if defaultValue is passed", async () => {
    const mountedComponent = mount(<Toggle name="test-toggle" defaultValue />);
    expect(mountedComponent.find({ checked: true })).toHaveLength(1);
  });

  it("initializes untoggled if defaultValue is passed as false", async () => {
    const mountedComponent = mount(
      <Toggle name="test-toggle" defaultValue={false} />
    );
    expect(mountedComponent.find({ checked: false })).toHaveLength(1);
  });

  it("initializes untoggled if defaultValue is not passed", async () => {
    const mountedComponent = mount(<Toggle name="test-toggle" />);
    expect(mountedComponent.find({ checked: false })).toHaveLength(1);
  });

  it("changes state when input changes", async () => {
    const mountedComponent = mount(<Toggle name="test-toggle" />);

    expect(mountedComponent.find({ checked: false })).toHaveLength(1);
    mountedComponent.find("input").at(0).simulate("change");
    expect(mountedComponent.find({ checked: true })).toHaveLength(1);
  });

  it("calls props.handleToggle passing event when input changes", async () => {
    const mockHandleToggle = jest.fn();
    const mountedComponent = mount(
      <Toggle name="test-toggle" handleToggle={mockHandleToggle} />
    );

    expect(mountedComponent.find({ checked: false })).toHaveLength(1);
    expect(mockHandleToggle).not.toBeCalled();

    mountedComponent.find("input").at(0).simulate("change", { test: "event" });

    expect(mountedComponent.find({ checked: true })).toHaveLength(1);
    expect(mockHandleToggle).toBeCalledWith(
      expect.objectContaining({ test: "event" })
    );
  });
});
