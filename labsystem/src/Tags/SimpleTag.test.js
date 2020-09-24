import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

import SimpleTag from "./SimpleTag";

describe("SimpleTag", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<SimpleTag text="Test SimpleTag" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected with disabled as true", async () => {
    const renderedComponent = renderer
      .create(<SimpleTag text="Test render disabled SimpleTag" isDisabled />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <SimpleTag text="Test disabled SimpleTag" isDisabled />
    ).html();
    expect(wrapper).toContain("lab-tag--disabled");
  });

  it("renders as expected with outline as true", async () => {
    const renderedComponent = renderer
      .create(<SimpleTag text="Test render outline SimpleTag" isOutline />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <SimpleTag text="Test outline SimpleTag" isOutline />
    ).html();
    expect(wrapper).toContain("lab-tag--outline");
  });

  it("renders as expected with a vivid skin", async () => {
    const renderedComponent = renderer
      .create(<SimpleTag text="Test render vivid SimpleTag" skin="vivid" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <SimpleTag text="Test vivid SimpleTag" skin="vivid" />
    ).html();
    expect(wrapper).toContain("lab-tag--vivid");
  });

  it("renders as expected with a purple color", async () => {
    const renderedComponent = renderer
      .create(<SimpleTag text="Test render purple SimpleTag" color="purple" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <SimpleTag text="Test vivid SimpleTag" skin="vivid" />
    ).html();
    expect(wrapper).toContain("lab-tag--vivid");
  });

  it("renders as expected with a lupe icon", async () => {
    const renderedComponent = renderer
      .create(
        <SimpleTag text="Test render SimpleTag with lupe icon" icon="lupe" />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <SimpleTag text="Test SimpleTag with lupe icon" icon="lupe" />
    ).html();
    expect(wrapper).toContain("lab-icon--lupe");
  });

  const thumbSrcSample =
    "https://avatars3.githubusercontent.com/u/1887591?s=400&u=ba45b6433752099210bf180b4448fb82e015c3a8&v=4";
  it("renders as expected with a thumb", async () => {
    const renderedComponent = renderer
      .create(
        <SimpleTag
          text="Test render SimpleTag with thumb"
          thumbSrc={thumbSrcSample}
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <SimpleTag
        text="Test mount SimpleTag with thumb"
        thumbSrc={thumbSrcSample}
      />
    );
    expect(mountedComponent.find("SimpleTag").prop("thumbSrc")).toEqual(
      thumbSrcSample
    );
  });

  it("does not render if passing both `thumb` and `icon` props", async () => {
    expect(() => {
      shallow(
        <SimpleTag
          text="Test to not render SimpleTag with with thumb and icon"
          icon="lupe"
          thumbSrc={thumbSrcSample}
        />
      );
    }).toThrow(
      "`SimpleTag` can't be initialized with both `thumb` and `icon` props."
    );
  });
});
