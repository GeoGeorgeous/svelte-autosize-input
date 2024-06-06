<script lang="ts">
  import AutosizeInput from '@components/AutosizeInput.svelte';
  let value1 = 'Type something to see the input grow...';
  let value2 = 'John Doe';
  let value3 = '';
  let value4 = '';
  let value5 = '';
</script>

<h1 class="mb-4 text-3xl">Svelte Autosize Input</h1>
<p>An input component for Svelte that resizes itself to the current content.</p>
<p>
  Visit <a
    class="font-semibold text-blue-600 hover:opacity-65"
    href="https://github.com/GeoGeorgeous/svelte-autosize-input">Github Repo</a>
  to read the documentation.
</p>

<div class="mt-4 flex flex-col rounded bg-gray-50 p-6">
  <label for="1" class="mb-1 text-sm font-semibold text-gray-800"
    >Simple example with autofocus</label>
  <AutosizeInput
    id="1"
    bind:value={value1}
    autofocus
    class="rounded border border-gray-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
</div>

<div class="mt-4 flex flex-col rounded bg-gray-50 p-6">
  <label for="name" class="mb-1 text-sm font-semibold text-gray-800"
    >Styled example with default value</label>
  <AutosizeInput
    bind:value={value2}
    type="text"
    class="rounded border border-gray-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
</div>

<div class="mt-4 flex flex-col rounded bg-gray-50 p-6">
  <label for="name" class="mb-1 text-sm font-semibold text-gray-800"
    >Number input with typed value:</label>
  <AutosizeInput
    type="text"
    bind:value={value3}
    placeholder="Your name"
    class="rounded border border-gray-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
</div>

<div class="mt-4 flex flex-col rounded bg-gray-50 p-6">
  <label for="name" class="mb-1 text-sm font-semibold text-gray-800"
    >Input with placeholder:</label>
  <AutosizeInput
    type="text"
    bind:value={value4}
    placeholder="Your name"
    class="rounded border border-gray-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
</div>

<div class="mt-4 flex flex-col rounded bg-gray-50 p-6">
  <label for="name" class="mb-1 text-sm font-semibold text-gray-800"
    >Input with placeholder as minimum width:</label>
  <AutosizeInput
    type="text"
    bind:value={value5}
    placeholder="Your name"
    class="rounded border border-gray-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
</div>
