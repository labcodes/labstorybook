import React from "react";
import { isEmpty } from "lodash";

import { StandardDialog } from "../labsystem/src/Dialog";

export default class DialogPlayground extends React.Component {

  constructor(props) {
    super(props);
    this.initialState = {
      selectedTitle: "edit me",
      selectedContent: "edit me",
    };

    this.state = {
      selectedTitle: this.initialState.selectedTitle,
      selectedContent: this.initialState.selectedContent,
    };
  }

  handleTextPropChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: !isEmpty(value) ? value : "edit me" });
  };

  renderCurrentComponent = () => {
    const { selectedTitle, selectedContent } = this.state;

    return (
      <>
        <h4><strong>Standard Dialog</strong></h4>
        <StandardDialog
          title={selectedTitle}
          content={selectedContent}
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

          <div className="lab-playground__item">
            <label htmlFor="selectedContent">
              <strong>content:</strong><br />
              <textarea
                id="selectedContent"
                onChange={this.handleTextPropChange}
                placeholder="Insert content"
                style={{
                  width: "121%",
                  minHeight: "100px",
                  resize: "none",
                }}
              />
            </label>
          </div>

        </div>
      </div>
    );
  }
}
