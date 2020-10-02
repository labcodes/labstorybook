<script>
  export let type = undefined;
  export let color = undefined;
  export let wrapperColor = undefined;

  let className = '';
  export { className as class };
</script>


<div class={`lab-badge__wrapper lab-badge__wrapper--${wrapperColor}`}>
  <span
    class={
      `lab-badge lab-badge--${color} lab-badge--${type}` +
      `${className ? ` lab-badge--${className}` : ""}`
    }
  />
</div>
