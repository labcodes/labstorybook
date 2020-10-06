<script>
  export let helpMessage = undefined;
  export let value = undefined;
  export let isValid = undefined;
  export let customErrorMsg = undefined;
</script>

{#if helpMessage && isValid}
  <div class="lab-input__message lab-input__message--required">
    {helpMessage}
  </div>
{:else if !isValid && helpMessage && !value}
  <div class="lab-input__message lab-input__message--error">{helpMessage}</div>
{:else if !isValid}
  <div class="lab-input__message lab-input__message--error">
    {customErrorMsg}
  </div>
{/if}
