<script>
  export let id;
  export let text;
  export let placement = "top";

  $: if (text && text.length > 180) {
    console.warn(
      `Tooltip with id='${id}' has ${text.length} characters. It shouldn't be longer than 180 characters`
    );
  }
</script>

<span class="lab-tooltip">
  <slot />
  <span class={`lab-tooltip__text lab-tooltip--${placement}`} {id}>
    {text}
  </span>
</span>
