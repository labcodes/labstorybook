<script>
  import AbstractTextInput from "./AbstractTextInput.svelte";

  // we need to replicate the props, just so that svelte logs
  // the warns about missing props using the right component

  export let id;
  export let label;
  export let icon = undefined;
  export let iconColor = undefined;
  export let value = "";

  export let isValid = undefined;
  export let disabled = undefined;
  export let required = undefined;

  export let prefix = undefined;
  export let suffix = undefined;

  export let onIconClick = undefined;
  export let helpMessage = undefined;
  export let customErrorMsg = undefined;
</script>

<AbstractTextInput
  type="text"
  {id}
  {label}
  {icon}
  {iconColor}
  {value}
  {isValid}
  {disabled}
  {required}
  {prefix}
  {suffix}
  {onIconClick}
  {helpMessage}
  {customErrorMsg} />
