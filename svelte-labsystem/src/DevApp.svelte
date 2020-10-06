<script>
  import {
    Toggle,
    Icon,
    Badge,
    Tooltip,
    Checkbox,
    Radio,
    Button,
    OutlineButton,
    TextButton,
    TextInput,
    EmailInput,
  } from "./index";
  import PasswordInput from "./Input/PasswordInput.svelte";

  let toggleValue = true;
  let radioButtonsTestValue = "test-value";
</script>

<svelte:head>
  <link href="https://use.typekit.net/boj8rad.css" rel="stylesheet" />
  <link
    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,500;0,600;1,500;1,600&display=swap"
    rel="stylesheet" />
</svelte:head>

<main>
  <h1>Component samples</h1>

  <h2>Toggle:</h2>
  <Toggle
    name="sample-toggle"
    bind:value={toggleValue}
    on:change={(e) => console.log('Toggle changed:', e)} />
  <Toggle
    name="sample-toggle"
    disabled
    bind:value={toggleValue}
    on:change={(e) => console.log('Toggle changed:', e)} />

  <h2>Badge:</h2>
  <Badge type="harvest" wrapperColor="teal-40" color="white" />
  <Badge type="ponto" wrapperColor="teal-40" color="white" />
  <Badge type="meta" wrapperColor="teal-40" color="white" />
  <br />
  <Badge type="star" wrapperColor="teal-40" color="white" />
  <Badge type="floating-add" wrapperColor="teal-40" color="white" />

  <h2>Icon:</h2>
  <Icon type="arrow-left" color="teal-40" />
  <Icon type="dropdown-closed" color="teal-40" />
  <Icon type="remove" color="teal-40" />
  <Icon type="eye-opened" color="teal-40" />
  <Icon type="logout" color="teal-40" />
  <Icon type="edit" color="teal-40" />
  <Icon type="arrow-fill-right" color="teal-40" />
  <br />
  <Icon type="arrow-right" color="teal-40" />
  <Icon type="dropdown-open" color="teal-40" />
  <Icon type="plus" color="teal-40" />
  <Icon type="eye-closed" color="teal-40" />
  <Icon type="track" color="teal-40" />
  <Icon type="key" color="teal-40" />
  <Icon type="arrow-fill-left" color="teal-40" />
  <br />
  <Icon type="arrow-top" color="teal-40" />
  <Icon type="collapse-closed" color="teal-40" />
  <Icon type="minus" color="teal-40" />
  <Icon type="lupe" color="teal-40" />
  <Icon type="calendar" color="teal-40" />
  <Icon type="upload" color="teal-40" />
  <Icon type="chevron-right" color="teal-40" />
  <br />
  <Icon type="arrow-down" color="teal-40" />
  <Icon type="collapse-open" color="teal-40" />
  <Icon type="check" color="teal-40" />
  <Icon type="trash" color="teal-40" />
  <Icon type="coin" color="teal-40" />
  <Icon type="reload" color="teal-40" />
  <Icon type="chevron-left" color="teal-40" />
  <br />
  <Icon type="sort" color="teal-40" />
  <Icon type="menu-expand" color="teal-40" />
  <Icon type="menu-collapse" color="teal-40" />
  <Icon type="menu-default" color="teal-40" />
  <Icon type="external" color="teal-40" />
  <Icon type="wallet" color="teal-40" />
  <Icon type="workspace" color="teal-40" />

  <h2>Tooltip:</h2>
  <div class="columns docs-tooltip">
    <div class="column">
      <Tooltip id="tooltip-top-start" text="top-start" placement="top-start">
        <button type="button"> top-start </button>
      </Tooltip>
    </div>
    <div class="column">
      <Tooltip id="tooltip-top" text="top" placement="top">
        <button type="button"> top </button>
      </Tooltip>
    </div>
    <div class="column">
      <Tooltip id="tooltip-top-end" text="top-end" placement="top-end">
        <button type="button"> top-end </button>
      </Tooltip>
    </div>
  </div>
  <div class="columns space-between docs-tooltip">
    <div class="column left">
      <Tooltip id="tooltip-left-start" text="left-start" placement="left-start">
        <button type="button"> left-start </button>
      </Tooltip>
    </div>
    <div class="column right">
      <Tooltip
        id="tooltip-right-start"
        text="right-start"
        placement="right-start">
        <button type="button"> right-start </button>
      </Tooltip>
    </div>
  </div>
  <div class="columns space-between docs-tooltip">
    <div class="column left">
      <Tooltip id="tooltip-left" text="left" placement="left">
        <button type="button"> left </button>
      </Tooltip>
    </div>
    <div class="column right">
      <Tooltip id="tooltip-right" text="right" placement="right">
        <button type="button"> right </button>
      </Tooltip>
    </div>
  </div>
  <div class="columns space-between docs-tooltip">
    <div class="column left">
      <Tooltip id="tooltip-left-end" text="left-end" placement="left-end">
        <button type="button"> left-end </button>
      </Tooltip>
    </div>
    <div class="column right">
      <Tooltip id="tooltip-right-end" text="right-end" placement="right-end">
        <button type="button"> right-end </button>
      </Tooltip>
    </div>
  </div>
  <div class="columns docs-tooltip">
    <div class="column">
      <Tooltip
        id="tooltip-bottom-start"
        text="bottom-start"
        placement="bottom-start">
        <button type="button"> bottom-start </button>
      </Tooltip>
    </div>
    <div class="column">
      <Tooltip id="tooltip-bottom" text="bottom" placement="bottom">
        <button type="button"> bottom </button>
      </Tooltip>
    </div>
    <div class="column">
      <Tooltip id="tooltip-bottom-end" text="bottom-end" placement="bottom-end">
        <button type="button"> bottom-end </button>
      </Tooltip>
    </div>
  </div>

  <h2>Checkbox:</h2>
  <fieldset>
    <Checkbox id="checkbox-1" label="Idle" name="checkbox" checked />
    <br />
    <Checkbox
      id="checkbox-2"
      label="Indeterminate"
      name="checkbox"
      indeterminate
      checked />
    <br />
    <Checkbox
      id="checkbox-3"
      label="Disabled Checked"
      name="checkbox"
      checked
      disabled />
    <br />
    <Checkbox id="checkbox-4" label="Disabled Idle" name="checkbox" disabled />
  </fieldset>

  <h2>Radio:</h2>
  <fieldset>
    <Radio
      id="radio-1"
      label="Selected by default"
      name="radio-group"
      value="test-value"
      bind:group={radioButtonsTestValue} />
    <br />
    <Radio
      id="radio-2"
      label="Idle"
      name="radio-group"
      value="test-value-2"
      bind:group={radioButtonsTestValue} />
    <br />
    <Radio
      id="radio-3"
      label="Disabled - Checked if first is selected"
      name="radio-group-2"
      disabled
      bind:group={radioButtonsTestValue}
      value="test-value" />
  </fieldset>

  <h2>Button:</h2>
  <Button text="Default" />
  <Button text="Default" icon="arrow-down" />

  <OutlineButton text="Default" />
  <OutlineButton text="Default" icon="arrow-down" />

  <TextButton text="Default" />
  <TextButton text="Default" icon="arrow-down" />

  <h2>TextInput:</h2>
  <h6>Disabled</h6>
  <TextInput id="disabled" label="Disabled" disabled />
  <h6>Default</h6>
  <TextInput id="id" label="Label" />
  <h6>Trailing icon</h6>
  <TextInput
    id="id2"
    label="Label"
    icon="eye-opened"
    iconColor="mineral-70" />
  <h6>Prefixed</h6>
  <TextInput id="prefixed" label="Amount" prefix="R$" />
  <h6>Suffixed</h6>
  <TextInput id="duffixed" label="Amount" suffix=".00" />
  <h6>Required Default</h6>
  <TextInput id="required" label="Label" helpMessage="Help message" required />
  <h6>Forced Error - Prop isValid === false</h6>
  <TextInput
    id="required2"
    label="Required"
    isValid={false}
    helpMessage="Help message"
    customErrorMsg="Custom Error Message"
    required />
  <h6>Password Input</h6>
  <PasswordInput
    id="password-input-component"
    label="Password Input Component"
    value="passwordExample" />
</main>

<style lang="scss" global>
  @import "scss/main";

  .docs-tooltip {
    &.columns {
      justify-content: center;
      width: 60%;
      margin: 0px auto;
      text-align: center;
    }

    &.space-between {
      justify-content: space-between;
      width: 80%;
    }

    .left {
      align-self: flex-start;
      text-align: left;
    }

    .right {
      align-self: flex-end;
      text-align: right;
    }
  }

  .li--red {
    color: $red-60 !important;
  }
</style>
