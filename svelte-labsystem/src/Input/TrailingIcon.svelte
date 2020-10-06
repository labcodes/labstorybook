<script>
  import Icon from "../Icon.svelte";

  export let icon = undefined;
  export let iconColor = undefined;
  export let onIconClick = undefined;

  $: className = onIconClick
    ? "lab-input__icon lab-input__icon--disabled"
    : "lab-input__icon";
</script>

{#if icon && iconColor}
  <button type="button" class={className} on:click={onIconClick}>
    <Icon type={icon} color={iconColor} />
  </button>
{:else if icon}
  <button type="button" class={className} on:click={onIconClick}>
    <Icon type={icon} />
  </button>
{/if}
