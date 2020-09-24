import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

import RemovableTag from "./RemovableTag";

describe("RemovableTag", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<RemovableTag text="Test RemovableTag" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as disabled", async () => {
    const renderedComponent = renderer
      .create(
        <RemovableTag text="Test render a disabled RemovableTag" isDisabled />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <RemovableTag text="Test mount disabled RemovableTag" isDisabled />
    );
    expect(mountedComponent.find("AbstractTag").prop("isDisabled")).toEqual(
      true
    );
  });

  it("renders as outline", async () => {
    const renderedComponent = renderer
      .create(
        <RemovableTag text="Test render an outline RemovableTag" isOutline />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <RemovableTag text="Test mount outline RemovableTag" isOutline />
    );
    expect(mountedComponent.find("AbstractTag").prop("isOutline")).toEqual(
      true
    );
  });

  it("renders with a green color", async () => {
    const renderedComponent = renderer
      .create(
        <RemovableTag text="Test render green RemovableTag" color="green" />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <RemovableTag text="Test mount green RemovableTag" color="green" />
    );
    expect(mountedComponent.find("AbstractTag").prop("color")).toEqual("green");
  });

  it("calls prop.onClick when clicked", async () => {
    const mockOnClick = jest.fn();
    const shallowedRemovableTag = shallow(
      <RemovableTag text="Test click on RemovableTag" onClick={mockOnClick} />
    );
    expect(mockOnClick.mock.calls.length).toEqual(0);
    shallowedRemovableTag.simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  const thumbSrcSample =
    "https://avatars3.githubusercontent.com/u/1887591?s=400&u=ba45b6433752099210bf180b4448fb82e015c3a8&v=4";
  it("does not render if passing both `thumb` and `icon`", async () => {
    expect(() => {
      shallow(
        <RemovableTag
          text="Test to not render RemovableTag with thumb and icon"
          icon="calendar"
          thumbSrc={thumbSrcSample}
        />
      );
    }).toThrow(
      "`RemovableTag` can't be initialized with both `thumb` and `icon` props."
    );
  });
});
