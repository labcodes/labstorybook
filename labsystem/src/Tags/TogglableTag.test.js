import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

import TogglableTag from "./TogglableTag";

describe("TogglableTag", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<TogglableTag text="Test TogglableTag" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected with disabled as true", async () => {
    const renderedComponent = renderer
      .create(<TogglableTag text="Test nount disabled TogglableTag" disabled />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <TogglableTag text="Test mount disabled TogglableTag" disabled />
    );
    expect(mountedComponent.find("AbstractTag").prop("disabled")).toEqual(true);
  });

  it("renders as expected with outline as true", async () => {
    const renderedComponent = renderer
      .create(<TogglableTag text="Test render outline TogglableTag" outline />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <TogglableTag text="Test mount outline TogglableTag" outline />
    );
    expect(mountedComponent.find("AbstractTag").prop("outline")).toEqual(true);
  });

  it("renders as expected with a yellow color", async () => {
    const renderedComponent = renderer
      .create(
        <TogglableTag text="Test render yellow TogglableTag" color="yellow" />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <TogglableTag text="Test mount yellow TogglableTag" color="yellow" />
    );
    expect(mountedComponent.find("AbstractTag").prop("color")).toEqual("yellow");
  });

  it("renders with a pale skin if not isOn", async () => {
    const renderedComponent = renderer
      .create(
        <TogglableTag text="Test render pale TogglableTag" isOn={false} />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <TogglableTag text="Test mount pale TogglableTag" isOn={false} />
    );
    expect(mountedComponent.find("AbstractTag").prop("skin")).toEqual("pale");
  });

  it("renders with a vivid skin and a checked icon if isOn", async () => {
    const renderedComponent = renderer
      .create(<TogglableTag text="Test render isOn TogglableTag" isOn />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <TogglableTag text="Test mount isOn TogglableTag" isOn />
    );
    expect(mountedComponent.find("AbstractTag").prop("skin")).toEqual("vivid");
    expect(mountedComponent.find("AbstractTag").prop("icon")).toEqual("check");
  });

  it("calls prop.onClick when clicked", async () => {
    const mockOnClick = jest.fn();
    const shallowedTogglableTag = shallow(
      <TogglableTag text="Test click on TogglableTag" onClick={mockOnClick} />
    );
    expect(mockOnClick.mock.calls.length).toEqual(0);
    shallowedTogglableTag.simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });
});
