<script>
  import Icon from "./Icon.svelte";

  export let id;
  export let name;
  export let label;
  export let checked = undefined;
  export let value = undefined;
  export let disabled = undefined;
  export let indeterminate = false;

  let className = "";
  export { className as class };
</script>

<input
  class={`lab-checkbox${` ${className}` || ''}`}
  type="checkbox"
  {id}
  {name}
  {value}
  {disabled}
  bind:checked
  on:change />

<label class="lab-checkbox__label" for={id}>
  <span class="lab-checkbox__box">
    {#if indeterminate && checked}
      <Icon
        type="minus"
        size="small"
        color={disabled ? 'mineral-40' : 'white'} />
    {:else if checked}
      <Icon
        type="check"
        size="small"
        color={disabled ? 'mineral-40' : 'white'} />
    {/if}
  </span>

  {label}
</label>
