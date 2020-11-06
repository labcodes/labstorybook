import React from "react";
import { isEmpty } from "lodash";

import { StandardDialog } from "../labsystem/src/Dialog";

export default class DialogPlayground extends React.Component {

  constructor(props) {
    super(props);
    this.initialState = {
      selectedTitle: "edit me",
    };

    this.state = {
      selectedTitle: this.initialState.selectedTitle,
    };
  }

  handleTextPropChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: !isEmpty(value) ? value : "edit me" });
  };

  renderCurrentComponent = () => {
    const { selectedTitle } = this.state;

    return (
      <>
        <h4><strong>Standard Dialog</strong></h4>
        <StandardDialog
          title={selectedTitle}
          content="This is a generic content."
          buttonProps={{
            text: "click me!",
            onClick: () => alert("Clicked!"),
          }}
        />
      </>
    );
  };

  render() {
    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          {this.renderCurrentComponent()}
        </div>

        <div className="column lab-playground__configs">
          <h4>Configurations</h4>
          <div className="lab-playground__item">
            <label htmlFor="selectedTitle">
              <strong>title: </strong>
              <input
                id="selectedTitle"
                onChange={this.handleTextPropChange}
                placeholder="Insert title"
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}
