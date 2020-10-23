import React from "react";

import Banner from "../labsystem/src/Banner";
import Alert from "../labsystem/src/Alert";

export default class SystemMessagesPlayground extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      availableComponents: {
        Banner,
        Alert,
      },
      bannerComponent: "Banner",
      alertComponent: "Alert",
    };
  }

  renderComponents = () => {
    const { availableComponents, bannerComponent, alertComponent, } = this.state;
    const BannerComponent = availableComponents[bannerComponent];
    const AlertComponent = availableComponents[alertComponent];

    return (
      <>
        <BannerComponent text="Banner Component" icon="lupe" />
        <AlertComponent text="Alert Component" icon="wallet" />
      </>
    );
  };

  render() {
    return <div>{this.renderComponents()}</div>;
  }
}
