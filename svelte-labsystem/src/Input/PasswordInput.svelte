<script>
  import AbstractTextInput from "./AbstractTextInput.svelte";

  // we need to replicate the props, just so that svelte logs
  // the warns about missing props using the right component

  export let id;
  export let label;
  export let iconColor = undefined;
  export let value = "";

  export let isValid = undefined;
  export let disabled = undefined;
  export let required = undefined;

  export let prefix = undefined;
  export let suffix = undefined;

  export let helpMessage = undefined;
  export let customErrorMsg = undefined;

  let showPassword = false;
</script>

{#if showPassword}
  <AbstractTextInput
    type="text"
    onIconClick={() => (showPassword = !showPassword)}
    bind:value
    on:input
    {id}
    icon="eye-opened"
    {label}
    {iconColor}
    {isValid}
    {disabled}
    {required}
    {prefix}
    {suffix}
    {helpMessage}
    {customErrorMsg} />
{:else}
  <AbstractTextInput
    type="password"
    onIconClick={() => (showPassword = !showPassword)}
    bind:value
    on:input
    {id}
    icon="eye-closed"
    {label}
    {iconColor}
    {isValid}
    {disabled}
    {required}
    {prefix}
    {suffix}
    {helpMessage}
    {customErrorMsg} />
{/if}
