<script>
  export let color = undefined;
  export let disabled = undefined;
  export let value = false;
  export let name;
</script>

<label
  class={`lab-toggle${color ? ` lab-toggle--${color}` : ''}`}
  class:lab-toggle--disabled={disabled}
  htmlFor={name}>
  <input
    type="checkbox"
    id={name}
    class="lab-toggle__input"
    on:change
    bind:checked={value}
    {name}
    {disabled} />
  <span class="lab-toggle__slider" />
</label>
