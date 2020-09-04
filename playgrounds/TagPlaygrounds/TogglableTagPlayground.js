import React from "react";
import { TogglableTag } from "../../labsystem/src/Tags";

export default class TogglableTagPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagText: "",
    };
  }

  handleTextPropChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    const { tagText } = this.state;
    return (
      <React.Fragment>
        <div className="columns lab-playground">
          <div className="column lab-playground__component">
            <h4>
              <strong>TogglableTag</strong>
            </h4>
            <TogglableTag text={tagText} type="togglable" />
          </div>
          <div className="column lab-playground__configs">
            <h4>Configurations</h4>
            <span className="lab-playground__item">
              <strong>Text: </strong>
              <input id="tagText" onChange={this.handleTextPropChange} />
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
