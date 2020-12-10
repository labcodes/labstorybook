import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import CollapseButton from "./CollapseButton";

describe("CollapseButton", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<CollapseButton onClick={() => {}}>Test content</CollapseButton>)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("calls props.onClick when clicked", async () => {
    const mockOnClick = jest.fn();
    const shallowedButton = shallow(<CollapseButton onClick={mockOnClick} />);
    shallowedButton.simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });
});