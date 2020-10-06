<script>
  import Icon from '../Icon.svelte';

  export let text;
  export let skin = undefined;
  export let type = undefined;
  export let icon = undefined;
  export let size = "normal";
  export let disabled = false;
  export let fullWidth = false;
</script>


<button
  {type}
  class={`lab-btn` + ` lab-btn--default lab-btn--${size}` + `${skin ? ` lab-btn--${skin}` : ''}` + `${fullWidth ? ` lab-btn--block` : ''}`}
  on:click
  {disabled}>
  {#if icon}
    <Icon type={icon} color="white" size="petit" class="lab-btn__icon" />
  {/if}
  {text}
</button>
