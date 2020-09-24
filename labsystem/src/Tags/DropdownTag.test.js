import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

import DropdownTag from "./DropdownTag";

describe("DropdownTag", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<DropdownTag text="Test DropdownTag" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as disabled", async () => {
    const renderedComponent = renderer
      .create(<DropdownTag text="Test render disabled DropdownTag" disabled />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <DropdownTag text="Test mount a disabled DropdownTag" disabled />
    );
    expect(mountedComponent.find("AbstractTag").prop("disabled")).toEqual(true);
  });

  it("render as outline", async () => {
    const renderedComponent = renderer
      .create(<DropdownTag text="Test render outline DropdownTag" outline />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <DropdownTag text="Test mount an outline DropdownTag" outline />
    );
    expect(mountedComponent.find("AbstractTag").prop("outline")).toEqual(true);
  });

  it("renders with a pink color", async () => {
    const renderedComponent = renderer
      .create(<DropdownTag text="Test render pink DropdownTag" color="pink" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <DropdownTag text="Test mount pink DropdownTag" color="pink" />
    );
    expect(mountedComponent.find("AbstractTag").prop("color")).toEqual("pink");
  });

  it("calls prop.onClick when clicked", async () => {
    const mockOnClick = jest.fn();
    const shallowedDropdownTag = shallow(
      <DropdownTag text="Test render " onClick={mockOnClick} />
    );
    expect(mockOnClick.mock.calls.length).toEqual(0);
    shallowedDropdownTag.simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });
});
