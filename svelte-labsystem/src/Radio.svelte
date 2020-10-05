<script>
  export let id;
  export let name;
  export let label;
  export let group = undefined;
  export let value = undefined;
  export let disabled = undefined;

  let className = "";
  export { className as class };
</script>

<input
  class={`lab-radio${` ${className}` || ''}`}
  type="radio"
  {id}
  {name}
  {value}
  {disabled}
  bind:group
  on:change />

<label class="lab-radio__label" for={id}>
  <span class="lab-radio__container" />
  {label}
</label>
