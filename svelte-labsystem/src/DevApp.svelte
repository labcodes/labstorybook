<script>
  import Toggle from "./Toggle.svelte";
  import Icon from "./Icon.svelte";
  import Badge from "./Badge.svelte";

  let toggleValue = true;
</script>

<main>
  <h1>Component samples</h1>

  <h2>Toggle:</h2>
  <Toggle
    name="sample-toggle"
    bind:value={toggleValue}
    on:change={(e) => console.log('Toggle changed:', e)} />
  <Toggle
    name="sample-toggle"
    disabled
    bind:value={toggleValue}
    on:change={(e) => console.log('Toggle changed:', e)} />

  <h2>Badge:</h2>
  <Badge type="harvest" wrapperColor="teal-40" color="white" />
  <Badge type="ponto" wrapperColor="teal-40" color="white" />
  <Badge type="meta" wrapperColor="teal-40" color="white" />
  <br />
  <Badge type="star" wrapperColor="teal-40" color="white" />
  <Badge type="floating-add" wrapperColor="teal-40" color="white" />

  <h2>Icon:</h2>
  <Icon type="arrow-left" color="teal-40" />
  <Icon type="dropdown-closed" color="teal-40" />
  <Icon type="remove" color="teal-40" />
  <Icon type="eye-opened" color="teal-40" />
  <Icon type="logout" color="teal-40" />
  <Icon type="edit" color="teal-40" />
  <Icon type="arrow-fill-right" color="teal-40" />
  <br />
  <Icon type="arrow-right" color="teal-40" />
  <Icon type="dropdown-open" color="teal-40" />
  <Icon type="plus" color="teal-40" />
  <Icon type="eye-closed" color="teal-40" />
  <Icon type="track" color="teal-40" />
  <Icon type="key" color="teal-40" />
  <Icon type="arrow-fill-left" color="teal-40" />
  <br />
  <Icon type="arrow-top" color="teal-40" />
  <Icon type="collapse-closed" color="teal-40" />
  <Icon type="minus" color="teal-40" />
  <Icon type="lupe" color="teal-40" />
  <Icon type="calendar" color="teal-40" />
  <Icon type="upload" color="teal-40" />
  <Icon type="chevron-right" color="teal-40" />
  <br />
  <Icon type="arrow-down" color="teal-40" />
  <Icon type="collapse-open" color="teal-40" />
  <Icon type="check" color="teal-40" />
  <Icon type="trash" color="teal-40" />
  <Icon type="coin" color="teal-40" />
  <Icon type="reload" color="teal-40" />
  <Icon type="chevron-left" color="teal-40" />
  <br />
  <Icon type="sort" color="teal-40" />
  <Icon type="menu-expand" color="teal-40" />
  <Icon type="menu-collapse" color="teal-40" />
  <Icon type="menu-default" color="teal-40" />
  <Icon type="external" color="teal-40" />
  <Icon type="wallet" color="teal-40" />
  <Icon type="workspace" color="teal-40" />
</main>

<style lang="scss" global>
  @import "scss/main";
</style>
