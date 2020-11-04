/* eslint-disable */
import React from "react";

import NarrowSidebar from "../labsystem/src/Sidebar/NarrowSidebar";
import TextInput from "../labsystem/src/Input/TextInput";
import Toggle from "../labsystem/src/Toggle";
import OutlineButton from "../labsystem/src/Buttons/OutlineButton";
import Icon from "../labsystem/src/Icon";

export default class NarrowSidebarPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVivid: false,
      isOpenOnMobile: false,
      withDividers: false,
      logoSrc: "./favicon.ico",
      logoAltText: "",
      itemIcon: "calendar",
      itemLabel: "Test",
      sidebarItems: [
        <NarrowSidebar.Item
          icon="coin"
          label="Teste"
          key="Teste"
          isActive={true}
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
      avatarAltText: "",
      avatarSrc: "./docs/narrow-sidebar/MrGeraldo.png",
      avatarCaption: "Mr. Geraldo",
      showHeaderConfigs: false,
      showBodyConfigs: false,
      showFooterConfigs: false,
    };
  }

  handlePropChangeText = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handlePropChangeBool = (e) => {
    const { id, checked } = e.target;
    this.setState({ [id]: checked });
  };

  handleOpenOnMobile = () => {
    const { isOpenOnMobile } = this.state;
    this.setState({ isOpenOnMobile: !isOpenOnMobile });
  }

  addNewItem = () => {
    const { itemIcon, itemLabel, sidebarItems } = this.state;

    sidebarItems.push(<NarrowSidebar.Item key={itemLabel} icon={itemIcon} label={itemLabel} />);
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
        key={footerButtonLabel}
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

            <div className={`lab-narrow__overlay ${isOpenOnMobile ? "lab-narrow__overlay--visible" : null}`} onClick={handleOpenOnMobile} />

            <div
              className={
                "lab-narrow-sidebar__mobile-topbar" +
                `${isVivid ? " lab-narrow-sidebar--vivid" : ` ""`}`
              }
            >
              <button type="button" onClick={handleOpenOnMobile} className="lab-narrow-sidebar__mobile-button">
                <Icon type="menu-expand" color="white" />
              </button>
            </div>

            <NarrowSidebar
              isOpenOnMobile={isOpenOnMobile}
              isVivid={isVivid}
              withDividers={withDividers}
            >
              <NarrowSidebar.Header>
                <NarrowSidebar.Logotype altText={logoAltText} logoSrc={logoSrc} />
                <NarrowSidebar.CollapseButton onClick={handleOpenOnMobile} />
              </NarrowSidebar.Header>
              <NarrowSidebar.Body withDividers={withDividers}>
                {sidebarItems.map((item) => item)}
              </NarrowSidebar.Body>
              <NarrowSidebar.Footer>
                <NarrowSidebar.UserAvatar
                  altText={avatarAltText}
                  caption={avatarCaption}
                  avatarSrc={avatarSrc}
                />
                {footerButtons.map((item) => item)}
              </NarrowSidebar.Footer>
            </NarrowSidebar>
          </div>
        </div>
        <div className="column lab-playground__configs">
          <h4>Configurations</h4>
          <p>
            <strong>NarrowSidebar</strong>
          </p>
          <span className="lab-playground__item">
            <label htmlFor="isVivid">
              isVivid
              <br />
              <Toggle
                name="isVivid"
                label="isVivid"
                value={isVivid}
                handleToggle={this.handlePropChangeBool}
              />
            </label>
          </span>
          <span className="lab-playground__item">
            <label htmlFor="withDividers">
              withDividers
              <br />
              <Toggle
                name="withDividers"
                label="withDividers"
                value={withDividers}
                handleToggle={this.handlePropChangeBool}
              />
            </label>
          </span>
          <p
            onClick={() => this.handleToggleFor("showHeaderConfigs")}
            onKeyPress={() => this.handleToggleFor("showHeaderConfigs")}
            style={{ cursor: "pointer", display: "flex" }}
            role="button"
          >
            <strong>Header</strong>
            <Icon
              type={showHeaderConfigs ? "collapse-open" : "collapse-closed"}
            />
          </p>
          {showHeaderConfigs ? (
            <React.Fragment>
              <span className="lab-playground__item">
                <TextInput
                  id="logoSrc"
                  label="logoSrc"
                  value={logoSrc}
                  onChange={this.handlePropChangeText}
                />
              </span>
              <span className="lab-playground__item">
                <TextInput
                  id="logoAltText"
                  label="logoAltText"
                  value={logoAltText}
                  onChange={this.handlePropChangeText}
                />
              </span>
            </React.Fragment>
          ) : (
            ""
          )}
          <p
            onClick={() => this.handleToggleFor("showBodyConfigs")}
            onKeyPress={() => this.handleToggleFor("showBodyConfigs")}
            style={{ cursor: "pointer", display: "flex" }}
            role="button"
          >
            <strong>Body</strong>
            <Icon
              type={showBodyConfigs ? "collapse-open" : "collapse-closed"}
            />
          </p>
          {showBodyConfigs ? (
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
                />
              </span>
              <br />
              <OutlineButton
                text="Add item"
                size="small"
                onClick={this.addNewItem}
              />
              <OutlineButton
                text="Remove last item"
                size="small"
                onClick={this.removeLastItem}
              />
            </React.Fragment>
          ) : (
            ""
          )}
          <p
            onClick={() => this.handleToggleFor("showFooterConfigs")}
            onKeyPress={() => this.handleToggleFor("showFooterConfigs")}
            style={{ cursor: "pointer", display: "flex" }}
            role="button"
          >
            <strong>Footer</strong>
            <Icon
              type={showFooterConfigs ? "collapse-open" : "collapse-closed"}
            />
          </p>
          {showFooterConfigs ? (
            <React.Fragment>
              <span className="lab-playground__item">
                <TextInput
                  id="avatarSrc"
                  label="avatarSrc"
                  value={avatarSrc}
                  onChange={this.handlePropChangeText}
                />
              </span>
              <span className="lab-playground__item">
                <TextInput
                  id="avatarAltText"
                  label="avatarAltText"
                  value={avatarAltText}
                  onChange={this.handlePropChangeText}
                />
              </span>
              <span className="lab-playground__item">
                <TextInput
                  id="avatarCaption"
                  label="avatarCaption"
                  value={avatarCaption}
                  onChange={this.handlePropChangeText}
                />
              </span>

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
                />
              </span>
              <br />
              <OutlineButton
                text="Add footer button"
                size="small"
                onClick={this.addNewFooterButton}
              />
              <OutlineButton
                text="Remove last footer button"
                size="small"
                onClick={this.removeLastFooterButton}
              />
            </React.Fragment>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
