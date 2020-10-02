<script>
  import Toggle from "./Toggle.svelte";
  let toggleValue = true;
</script>

<main>
  <h1>Toggle:</h1>
  <Toggle
    name="sample-toggle"
    bind:value={toggleValue}
    on:change={(e) => console.log('Toggle changed:', e)} />
  <Toggle
    name="sample-toggle"
    disabled
    bind:value={toggleValue}
    on:change={(e) => console.log('Toggle changed:', e)} />
</main>

<style lang="scss" global>
  @import "../scss/main";
</style>
