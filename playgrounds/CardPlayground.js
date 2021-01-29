/* eslint-disable */
import React from "react";
import { Props } from "@storybook/addon-docs/blocks";

import {
  OutlineCard,
  FilledCard,
  OutlineFilledCard,
  CardImage,
  CardHeader,
  CardDivider,
  LinkAction,
  DoubleAction,
} from "../labsystem/src/Card";
import Toggle from "../labsystem/src/Toggle";
import Radio from "../labsystem/src/Radio";
import TextInput from "../labsystem/src/Input/TextInput";
import Icon from "../labsystem/src/Icon";
import { colorOptions, iconOptions } from "./assets";

import { isEmpty } from "lodash";

export default class CardPlayground extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      availableComponents: { OutlineCard, FilledCard, OutlineFilledCard },
      selectedColor: "mineral",
      selectedSkin: "pale",
      currentComponent: "OutlineCard",
      showHeaderConfigs: false,
      showCardBodyHTML: false,

      cardIsHorizontal: false,
      cardIsCompact: false,

      cardImageIsOverflowed: false,
      cardImageIsAboveHeader: false,

      cardHeaderTitle: "Title text",
      cardHeaderTitleClassName: "custom-class",
      cardHeaderSubtitle: "Subtitle text is a little longer than the title",
      cardHeaderSubtitleClassName: "custom-class",
      cardHeaderCategoryText: "Category",
      cardHeaderCategoryLabelText: "Label",
      cardHeaderCategoryIcon: "",
      cardHeaderCategoryColor: "mineral",
      cardHeaderIsOverlay: false,

      cardBodyHTML:
        "<p>This HTML is inside the card body, below the image and header.</p>",

      showDivider: true,
      cardDividerIsOverflowed: false,

      showCardActions: true,
      availableCardActions: { LinkAction, DoubleAction },
      currentCardAction: "LinkAction",
      currentCardActionSize: "normal",
      cardActionOpenNewTab: false,
      cardActionIsHorizontal: false,
      cardActionIsText: false,
      cardActionButtonsAreDisabled: false,
      
      isCategoryIconInputDisabled: true,
      isCategoryColorInputDisabled: false,
    };
  }

  renderCurrentComponent = () => {
    const {
      selectedColor,
      selectedSkin,
      availableComponents,
      currentComponent,

      cardIsHorizontal,
      cardIsCompact,

      cardImageIsOverflowed,
      cardImageIsAboveHeader,

      cardHeaderTitle,
      cardHeaderTitleClassName,
      cardHeaderSubtitle,
      cardHeaderSubtitleClassName,
      cardHeaderCategoryText,
      cardHeaderCategoryLabelText,
      cardHeaderCategoryIcon,
      cardHeaderCategoryColor,
      cardHeaderIsOverlay,

      cardBodyHTML,

      showDivider,
      cardDividerIsOverflowed,

      showCardActions,
      currentCardAction,
      currentCardActionSize,
      cardActionOpenNewTab,
      cardActionIsHorizontal,
      cardActionIsText,
      cardActionButtonsAreDisabled,
    } = this.state;
    const Component = availableComponents[currentComponent];

    return (
      <Component
        color={selectedColor}
        skin={selectedSkin}
        isHorizontal={cardIsHorizontal}
        isCompact={cardIsCompact}
      >
        {cardImageIsAboveHeader ? (
          <CardImage
            src="/docs/card/card-image.jpg"
            alt="Labcodes offices' view"
            isOverflowed={cardIsHorizontal && cardImageIsOverflowed}
          />
        ) : null}
        <CardHeader
          title={cardHeaderTitle}
          titleClassName={cardHeaderTitleClassName}
          subtitle={cardHeaderSubtitle}
          subtitleClassName={cardHeaderSubtitleClassName}
          categoryText={cardHeaderCategoryText}
          categoryLabelText={cardHeaderCategoryLabelText}
          categoryIcon={
            cardHeaderCategoryColor.length ? undefined : cardHeaderCategoryIcon
          }
          categoryColor={
            cardHeaderCategoryIcon.length ? undefined : cardHeaderCategoryColor
          }
          isOverlay={!cardIsHorizontal && cardHeaderIsOverlay}
        />
        {!cardImageIsAboveHeader ? (
          <CardImage
            src="/docs/card/card-image.jpg"
            alt="Labcodes offices' view"
            isOverflowed={cardIsHorizontal && cardImageIsOverflowed}
          />
        ) : null}
        <span dangerouslySetInnerHTML={{ __html: cardBodyHTML }} />

        {showDivider ? (
          <CardDivider isOverflowed={cardDividerIsOverflowed} />
        ) : null}

        {currentCardAction === "LinkAction" && showCardActions ? (
          <LinkAction
            href={`${window.location.href}&link-action=clicked`}
            onClick={(e) => {
              console.log("LinkAction clicked", e);
            }}
            size={currentCardActionSize}
            text="Sample Link Action"
            openNewTab={cardActionOpenNewTab}
          />
        ) : null}

        {currentCardAction === "DoubleAction" && showCardActions ? (
          <DoubleAction
            actionsProps={[
              {
                text: "Action 1",
                onClick: (e) => console.log("Action 1 clicked", e),
                icon: "plus",
                disabled: cardActionButtonsAreDisabled,
              },
              {
                text: "Action 2",
                onClick: (e) => console.log("Action 2 clicked", e),
                icon: "minus",
                disabled: cardActionButtonsAreDisabled,
              },
            ]}
            size={currentCardActionSize}
            isHorizontal={cardActionIsHorizontal}
            isText={cardActionIsText}
          />
        ) : null}
      </Component>
    );
  };

  render() {
    const {
      currentComponent,
      availableComponents,
      selectedColor,
      selectedSkin,
      showHeaderConfigs,
      showCardBodyHTML,

      cardIsHorizontal,
      cardIsCompact,

      cardImageIsOverflowed,
      cardImageIsAboveHeader,

      cardHeaderTitle,
      cardHeaderSubtitle,
      cardHeaderCategoryText,
      cardHeaderCategoryLabelText,
      cardHeaderCategoryIcon,
      cardHeaderCategoryColor,
      cardHeaderIsOverlay,

      cardBodyHTML,

      showDivider,
      cardDividerIsOverflowed,

      availableCardActions,
      showCardActions,
      currentCardAction,
      currentCardActionSize,
      cardActionOpenNewTab,
      cardActionIsHorizontal,
      cardActionIsText,
      cardActionButtonsAreDisabled,

     isCategoryIconInputDisabled,
     isCategoryColorInputDisabled,

    } = this.state;
    const {
      props: {
        __docgenInfo: {
          props: { color, skin },
        },
      },
    } = Props(availableComponents[currentComponent]);

    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          {this.renderCurrentComponent()}
        </div>
        <div className="column lab-playground__configs">
          <h4>Configurations</h4>

          <span className="lab-playground__item">
            <fieldset>
              <legend>Component</legend>
              {Object.keys(availableComponents).map((component) => (
                <Radio
                  key={component}
                  id={component}
                  name="currentComponent"
                  label={component}
                  value={component}
                  checked={currentComponent === component}
                  onChange={this.changeCardComponent}
                />
              ))}
            </fieldset>
          </span>

          <span className="lab-playground__item">
            <fieldset>
              <legend>Color</legend>
              {color.type.value.map((color) => (
                <Radio
                  key={this.formatPropString(color.value)}
                  id={this.formatPropString(color.value)}
                  name="selectedColor"
                  label={this.formatPropString(color.value)}
                  value={this.formatPropString(color.value)}
                  checked={selectedColor === this.formatPropString(color.value)}
                  onChange={this.handleInputChange}
                />
              ))}
            </fieldset>
          </span>

          {skin ? (
            <span className="lab-playground__item">
              <fieldset>
                <legend>Skin</legend>
                {skin.type.value.map((skin) => (
                  <Radio
                    key={this.formatPropString(skin.value)}
                    id={this.formatPropString(skin.value)}
                    name="selectedSkin"
                    label={this.formatPropString(skin.value)}
                    value={this.formatPropString(skin.value)}
                    checked={selectedSkin === this.formatPropString(skin.value)}
                    onChange={this.handleInputChange}
                  />
                ))}
              </fieldset>
            </span>
          ) : null}

          <span className="lab-playground__item">
            isHorizontal
            <br />
            <Toggle
              id="cardIsHorizontal"
              name="cardIsHorizontal"
              value={cardIsHorizontal}
              handleToggle={() => this.handleToggleFor("cardIsHorizontal")}
            />
          </span>

          <span className="lab-playground__item">
            isCompact
            <br />
            <Toggle
              id="cardIsCompact"
              name="cardIsCompact"
              value={cardIsCompact}
              handleToggle={() => this.handleToggleFor("cardIsCompact")}
            />
          </span>

          <span className="lab-playground__item" style={{ width: "100%" }}>
            <label htmlFor="cardBodyHTML">
              Body HTML
              <textarea
                style={{
                  width: "100%",
                  minHeight: "100px",
                  resize: "none",
                }}
                name="cardBodyHTML"
                value={cardBodyHTML}
                onChange={this.handleInputChange}
              />
            </label>
          </span>

          <h6>CardImage</h6>
          {cardIsHorizontal ? (
            <span className="lab-playground__item">
              isOverflowed
              <br />
              <Toggle
                id="cardImageIsOverflowed"
                name="cardImageIsOverflowed"
                value={cardImageIsOverflowed}
                handleToggle={() =>
                  this.handleToggleFor("cardImageIsOverflowed")
                }
              />
            </span>
          ) : null}

          <span className="lab-playground__item">
            Show it above the CardHeader
            <br />
            <Toggle
              id="cardImageIsAboveHeader"
              name="cardImageIsAboveHeader"
              value={cardImageIsAboveHeader}
              handleToggle={() =>
                this.handleToggleFor("cardImageIsAboveHeader")
              }
            />
          </span>

          <h6
            onClick={() => this.handleToggleFor("showHeaderConfigs")}
            style={{ cursor: "pointer", display: "flex" }}
          >
            CardHeader
            <Icon
              type={showHeaderConfigs ? "collapse-open" : "collapse-closed"}
            />
          </h6>

          {showHeaderConfigs ? (
            <React.Fragment>
              <div className="lab-playground__item">
                <TextInput
                  label="Title"
                  id="cardHeaderTitle"
                  value={cardHeaderTitle}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="lab-playground__item">
                <Toggle
                  id="cardHeaderIsOverlay"
                  name="cardHeaderIsOverlay"
                  value={cardHeaderIsOverlay}
                  handleToggle={() =>
                    this.handleToggleFor("cardHeaderIsOverlay")
                  }
                />
                isOverlay
              </div>

              <div className="lab-playground__item">
                <TextInput
                  label="Subtitle"
                  id="cardHeaderSubtitle"
                  value={cardHeaderSubtitle}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="lab-playground__item">
                <TextInput
                  label="Category Text"
                  id="cardHeaderCategoryText"
                  value={cardHeaderCategoryText}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="lab-playground__item">
                <TextInput
                  label="Category Label Text"
                  id="cardHeaderCategoryLabelText"
                  value={cardHeaderCategoryLabelText}
                  onChange={this.handleInputChange}
                />
              </div>

              <span className="lab-playground__item">
                <fieldset>
                  <legend>Category Icon</legend>
                  <select
                    name="cardHeaderCategoryIcon"
                    value={cardHeaderCategoryIcon}
                    onChange={this.handleCategoryIconPropChange}
                    disabled={isCategoryIconInputDisabled}
                  >
                    {iconOptions.map((item) => (
                      <option value={item} key={`category_icon-${item}`}>
                        {item}
                      </option>
                    ))}
                  </select>
                </fieldset>
              </span>

              <span className="lab-playground__item">
                <fieldset>
                  <legend>Category Color</legend>
                  <select
                    name="cardHeaderCategoryColor"
                    value={cardHeaderCategoryColor}
                    onChange={this.handleCategoryColorPropChange}
                    disabled={isCategoryColorInputDisabled}
                  >
                    {colorOptions.map((item) => (
                      <option value={item} key={`category_color-${item}`}>
                        {item}
                      </option>
                    ))}
                  </select>
                </fieldset>
              </span>
            </React.Fragment>
          ) : null}

          <h6>CardDivider</h6>
          <span className="lab-playground__item">
            isOverflowed
            <br />
            <Toggle
              id="cardDividerIsOverflowed"
              name="cardDividerIsOverflowed"
              value={cardDividerIsOverflowed}
              handleToggle={() =>
                this.handleToggleFor("cardDividerIsOverflowed")
              }
            />
          </span>

          <span className="lab-playground__item">
            Show divider
            <br />
            <Toggle
              id="showDivider"
              name="showDivider"
              value={showDivider}
              handleToggle={() => this.handleToggleFor("showDivider")}
            />
          </span>

          <h6>CardAction</h6>
          <span className="lab-playground__item">
            <fieldset>
              <legend>Action Type</legend>
              {Object.keys(availableCardActions).map((component) => (
                <Radio
                  key={component}
                  id={component}
                  name="currentCardAction"
                  label={component}
                  value={component}
                  checked={currentCardAction === component}
                  onChange={this.handleInputChange}
                />
              ))}
            </fieldset>
          </span>

          <span className="lab-playground__item">
            <fieldset>
              <legend>Button Size</legend>
              {["small", "normal", "large"].map((size) => (
                <Radio
                  key={size}
                  id={size}
                  name="currentCardActionSize"
                  label={size}
                  value={size}
                  checked={currentCardActionSize === size}
                  onChange={this.handleInputChange}
                />
              ))}
            </fieldset>
          </span>

          <span className="lab-playground__item">
            Show Card Actions
            <br />
            <Toggle
              id="showCardActions"
              name="showCardActions"
              value={showCardActions}
              handleToggle={() => this.handleToggleFor("showCardActions")}
            />
          </span>

          {currentCardAction === "LinkAction" ? (
            <span className="lab-playground__item">
              openNewTab
              <br />
              <Toggle
                id="cardActionOpenNewTab"
                name="cardActionOpenNewTab"
                value={cardActionOpenNewTab}
                handleToggle={() =>
                  this.handleToggleFor("cardActionOpenNewTab")
                }
              />
            </span>
          ) : null}

          {currentCardAction === "DoubleAction" ? (
            <React.Fragment>
              <span className="lab-playground__item">
                isHorizontal
                <br />
                <Toggle
                  id="cardActionIsHorizontal"
                  name="cardActionIsHorizontal"
                  value={cardActionIsHorizontal}
                  handleToggle={() =>
                    this.handleToggleFor("cardActionIsHorizontal")
                  }
                />
              </span>
              <span className="lab-playground__item">
                isText
                <br />
                <Toggle
                  id="cardActionIsText"
                  name="cardActionIsText"
                  value={cardActionIsText}
                  handleToggle={() => this.handleToggleFor("cardActionIsText")}
                />
              </span>
              <span className="lab-playground__item">
                Disable buttons
                <br />
                <Toggle
                  id="cardActionButtonsAreDisabled"
                  name="cardActionButtonsAreDisabled"
                  value={cardActionButtonsAreDisabled}
                  handleToggle={() =>
                    this.handleToggleFor("cardActionButtonsAreDisabled")
                  }
                />
              </span>
            </React.Fragment>
          ) : null}
        </div>
      </div>
    );
  }

  formatPropString = (string) => eval(string).replace('"', "");

  changeCardComponent = (event) => {
    const { value } = event.target;
    this.setState({
      currentComponent: value,
      selectedColor: "mineral",
      selectedSkin: "pale",
    });
  };

  handleInputChange = (event) => {
    const { name, id, value } = event.target;
    if (name) {
      this.setState({ [name]: value });
    } else {
      this.setState({ [id]: value });
    }
  };

  handleCategoryIconPropChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({ isCategoryColorInputDisabled: !isEmpty(value) });
  };

  handleCategoryColorPropChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value});
    this.setState({ isCategoryIconInputDisabled: !isEmpty(value) });
  }

  handleToggleFor = (stateKey) =>
    this.setState({ [stateKey]: !this.state[stateKey] });
}
