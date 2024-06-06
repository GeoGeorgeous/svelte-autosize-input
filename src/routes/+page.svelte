<script lang="ts">
  import AutosizeInput from '@components/AutosizeInput.svelte';
  let value1 = '';
  let value2 = 'John Doe';
  let value3 = '';
  let value4 = '';
</script>

<h1>Svelte Autosize Input</h1>
<p>An input component for Svelte that resizes itself to the current content.</p>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<div class="container">
  <label for="1">Simple example with autofocus</label>
  <AutosizeInput id="1" bind:value={value1} autofocus />
</div>

<div class="container">
  <label for="name">Styled example with default value</label>
  <AutosizeInput
    bind:value={value2}
    type="number"
    placeholder="Your name"
    style="padding: 0.25rem .5rem; border: none" />
</div>
