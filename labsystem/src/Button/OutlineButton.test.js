import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

import OutlineButton from "./OutlineButton";

describe("OutlineButton", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<OutlineButton text="Test Outline Button" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const renderedComponent = renderer
      .create(<OutlineButton text="Test Outline Disabled Button 1" disabled />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <OutlineButton text="Test Outline Disabled Button 2" disabled />
    );
    expect(mountedComponent.find("button").prop("disabled")).toEqual(true);
  });

  it("renders as expected when passing a light skin", async () => {
    const renderedComponent = renderer
      .create(<OutlineButton text="Test Outline Light Button" skin="light" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a large size", async () => {
    const renderedComponent = renderer
      .create(<OutlineButton text="Test Outline Large Button" size="large" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a magnifying-glass icon", async () => {
    const renderedComponent = renderer
      .create(
        <OutlineButton
          text="Test Outline magnifying-glass Button"
          icon="magnifying-glass"
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("calls props.onClick when clicked", async () => {
    const mockOnClick = jest.fn();
    const shallowedButton = shallow(
      <OutlineButton text="Test Click on Outl Button" onClick={mockOnClick} />
    );
    shallowedButton.simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  it("renders as expected if full width", async () => {
    const renderedComponent = renderer
      .create(<OutlineButton text="Test Outline fullWidth Button" fullWidth />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
