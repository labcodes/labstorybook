/* eslint-disable */
import React from "react";

import NarrowSidebar from "../labsystem/src/Sidebar/NarrowSidebar";
import TextInput from "../labsystem/src/Input/TextInput";
import Toggle from "../labsystem/src/Toggle";
import OutlineButton from "../labsystem/src/Button/OutlineButton";
import Button from "../labsystem/src/Button/Button";
import Icon from "../labsystem/src/Icon";

export default class NarrowSidebarPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVivid: false,
      isOpenOnMobile: false,
      withDividers: false,
      logoSrc: "./favicon.ico",
      logoAltText: "Labcodes' Logo",
      itemIcon: "calendar",
      itemLabel: "Test",
      sidebarItems: [
        <NarrowSidebar.Item
          icon="coin"
          label="Test"
          key="Test"
          isActive
          onClick={() => {
            console.log("Clicked Item");
          }}
        />,
      ],
      footerButtonIcon: "key",
      footerButtonLabel: "Password",
      footerButtons: [
        <NarrowSidebar.FooterButton
          icon="key"
          key="Password"
          label="Password"
          onClick={() => {
            console.log("Clicked Password");
          }}
        />,
      ],
      useAvatarInHeader: true,
      avatarAltText: "Mr. Geraldo",
      avatarSrc: "./docs/narrow-sidebar/MrGeraldo.png",
      avatarCaption: "Mr. Geraldo",
      showHeaderConfigs: false,
      showBodyConfigs: false,
      showFooterConfigs: false,
    };
  }

  handlePropChangeText = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handlePropChangeBool = (event) => {
    const { id, checked } = event.target;
    this.setState({ [id]: checked });
  };

  handleOpenOnMobile = () => {
    const { isOpenOnMobile } = this.state;
    this.setState({ isOpenOnMobile: !isOpenOnMobile });
  };

  addNewItem = () => {
    const { itemIcon, itemLabel, sidebarItems } = this.state;

    sidebarItems.push(
      <NarrowSidebar.Item
        key={String(Math.random())}
        icon={itemIcon}
        label={itemLabel}
        onClick={() => {
          alert(`Clicked ${footerButtonLabel}`);
        }}
      />
    );
    this.setState({ sidebarItems });
  };

  removeLastItem = () => {
    const { sidebarItems } = this.state;
    sidebarItems.pop();
    this.setState({ sidebarItems });
  };

  addNewFooterButton = () => {
    const { footerButtonIcon, footerButtonLabel, footerButtons } = this.state;

    footerButtons.push(
      <NarrowSidebar.FooterButton
        icon={footerButtonIcon}
        label={footerButtonLabel}
        key={String(Math.random())}
        onClick={() => {
          alert(`Clicked ${footerButtonLabel}`);
        }}
      />
    );
    this.setState({ footerButtons });
  };

  removeLastFooterButton = () => {
    const { footerButtons } = this.state;
    footerButtons.pop();
    this.setState({ footerButtons });
  };

  handleToggleFor = (stateKey) =>
    this.setState({ [stateKey]: !this.state[stateKey] });

  render() {
    const {
      isOpenOnMobile,
      isVivid,
      withDividers,
      logoSrc,
      logoAltText,
      itemIcon,
      itemLabel,
      sidebarItems,
      footerButtonIcon,
      footerButtonLabel,
      footerButtons,
      useAvatarInHeader,
      avatarAltText,
      avatarCaption,
      avatarSrc,
      showHeaderConfigs,
      showBodyConfigs,
      showFooterConfigs,
    } = this.state;

    const { handleOpenOnMobile } = this;

    return (
      <div className="columns lab-playground lab-narrow-sidebar--stories">
        <div className="column">
          <div className="lab-playground__component">
            <div
              className={`lab-narrow__overlay ${
                isOpenOnMobile ? "lab-narrow__overlay--visible" : null
              }`}
              onClick={handleOpenOnMobile}
            />

            <div
              className={
                "lab-narrow-sidebar__mobile-topbar" +
                `${isVivid ? " lab-narrow-sidebar--vivid" : ` ""`}`
              }
            >
              <button
                type="button"
                onClick={handleOpenOnMobile}
                className="lab-narrow-sidebar__mobile-button"
              >
                <Icon type="menu-expand" color="white" />
              </button>
            </div>

            <NarrowSidebar
              isOpenOnMobile={isOpenOnMobile}
              isVivid={isVivid}
              withDividers={withDividers}
            >
              <NarrowSidebar.Header>
                {useAvatarInHeader ? (
                  <NarrowSidebar.UserAvatar
                    avatarSrc={avatarSrc}
                    altText={avatarAltText}
                    caption={avatarCaption}
                  />
                ) : (
                  <NarrowSidebar.Logotype
                    altText={logoAltText}
                    logoSrc={logoSrc}
                  />
                )}
                <NarrowSidebar.CollapseButton onClick={handleOpenOnMobile} />
              </NarrowSidebar.Header>
              <NarrowSidebar.Body withDividers={withDividers}>
                {sidebarItems.map((item) => item)}
              </NarrowSidebar.Body>
              <NarrowSidebar.Footer>
                {useAvatarInHeader ? null : (
                  <NarrowSidebar.UserAvatar
                    altText={avatarAltText}
                    caption={avatarCaption}
                    avatarSrc={avatarSrc}
                  />
                )}
                {footerButtons.map((item) => item)}
              </NarrowSidebar.Footer>
            </NarrowSidebar>
          </div>
        </div>
        <div className="column lab-playground__configs">
          <span className="lab-playground__inline-item">
            <fieldset>
              <legend>isVivid</legend>
              <Toggle
                id="isVivid"
                name="isVivid"
                label="isVivid"
                value={isVivid}
                handleToggle={this.handlePropChangeBool}
              />
            </fieldset>
          </span>
          <span className="lab-playground__inline-item">
            <fieldset>
              <legend>withDividers</legend>
              <Toggle
                id="withDividers"
                name="withDividers"
                label="withDividers"
                value={withDividers}
                handleToggle={this.handlePropChangeBool}
              />
            </fieldset>
          </span>
          <span className="lab-playground__inline-item">
            <fieldset>
              <legend>Show avatar in the header</legend>
              <Toggle
                id="useAvatarInHeader"
                name="useAvatarInHeader"
                label="useAvatarInHeader"
                value={useAvatarInHeader}
                handleToggle={this.handlePropChangeBool}
              />
            </fieldset>
          </span>
          <h3>Body</h3>
          <React.Fragment>
            <span className="lab-playground__item">
              <TextInput
                id="itemIcon"
                label="itemIcon"
                value={itemIcon}
                onChange={this.handlePropChangeText}
              />
            </span>
            <span className="lab-playground__item">
              <TextInput
                id="itemLabel"
                label="itemLabel"
                value={itemLabel}
                onChange={this.handlePropChangeText}
                required
              />
            </span>
            <OutlineButton
              text="Remove last item"
              size="normal"
              onClick={this.removeLastItem}
            />
            <Button
              text="Add item"
              size="normal"
              onClick={this.addNewItem}
            />
          </React.Fragment>
          <h3>Footer</h3>
          <React.Fragment>
            <span className="lab-playground__item">
              <TextInput
                id="footerButtonIcon"
                label="footerButtonIcon"
                value={footerButtonIcon}
                onChange={this.handlePropChangeText}
              />
            </span>
            <span className="lab-playground__item">
              <TextInput
                id="footerButtonLabel"
                label="footerButtonLabel"
                value={footerButtonLabel}
                onChange={this.handlePropChangeText}
                required
              />
            </span>
            <OutlineButton
              text="Remove last footer button"
              size="normal"
              onClick={this.removeLastFooterButton}
            />
            <Button
              text="Add footer button"
              size="normal"
              onClick={this.addNewFooterButton}
            />
          </React.Fragment>
        </div>
      </div>
    );
  }
}
