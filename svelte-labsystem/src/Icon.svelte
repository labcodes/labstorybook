<script>
  export let type = undefined;
  export let size = undefined;
  export let color = undefined;

  let className = '';
  export { className as class };
</script>

<span
  class={`lab-icon lab-icon--${type} lab-icon--${color}` + `${size ? ` lab-icon--${size}` : ''}` + ` ${className}`} />
