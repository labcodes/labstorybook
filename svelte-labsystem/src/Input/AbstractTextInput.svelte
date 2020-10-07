<script>
  import { onMount } from "svelte";
  import isUndefined from "lodash/isUndefined";

  import TrailingIcon from "./TrailingIcon.svelte";
  import TextInputMessage from "./TextInputMessage.svelte";
  import InputPrefix from "./InputPrefix.svelte";
  import InputSuffix from "./InputSuffix.svelte";
  import Icon from "../Icon.svelte";

  export let id;
  export let label;
  export let icon = undefined;
  export let iconColor = undefined;
  export let value = "";
  export let type = "text";

  export let isValid = undefined;
  export let disabled = undefined;
  export let required = undefined;

  export let prefix = undefined;
  export let suffix = undefined;

  export let onIconClick = undefined;
  export let helpMessage = undefined;
  export let customErrorMsg = undefined;

  let inputElement;
  let localIsValid = true;
  let showInvalidErrors = true;

  onMount(() => {
    if (type !== "text") {
      inputElement.type = type;
    }
    if (
      isUndefined(isValid) &&
      !inputElement.value &&
      !inputElement.validity.valid
    ) {
      showInvalidErrors = false;
    }
    localIsValid = checkValidity();
  });

  const checkValidity = () => {
    if (!isUndefined(isValid)) {
      showInvalidErrors = true;

      if (inputElement) {
        inputElement.setCustomValidity("");
        if (!isValid) {
          inputElement.setCustomValidity(customErrorMsg);
        }
      }

      return isValid;
    } else if (inputElement) {
      return inputElement.validity.valid;
    }
    return localIsValid;
  };

  $: if (value.length) showInvalidErrors = true;
  $: localIsValid = value !== undefined && checkValidity();
</script>

<div
  class="lab-input"
  class:lab-input--disabled={disabled}
  class:lab-input--invalid={!localIsValid && showInvalidErrors}>
  <input
    bind:this={inputElement}
    bind:value
    on:input
    class="lab-input__field"
    class:lab-input__field--prefixed={prefix}
    class:lab-input__field--suffixed={suffix}
    type="text"
    placeholder=" "
    autocomplete="off"
    {id}
    {required}
    {disabled} />
  <div class="lab-input__borders" />

  <InputPrefix {prefix} />
  <InputSuffix {suffix} />
  <div class="lab-input__label-wrapper">
    <InputPrefix {prefix} />
    <label class="lab-input__label" for={id}> {label} </label>
  </div>
  <TrailingIcon {icon} {iconColor} {onIconClick} />
  {#if required}
    <span class="lab-input__required-icon">
      <Icon type="star" color="white" />
    </span>
  {/if}
</div>
<TextInputMessage
  {helpMessage}
  {customErrorMsg}
  {value}
  isValid={localIsValid || !showInvalidErrors} />
