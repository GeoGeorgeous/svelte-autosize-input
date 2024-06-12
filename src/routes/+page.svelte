<script lang="ts">
  import AutosizeInput from '@components/AutosizeInput.svelte';

  let exampleValue1 = 'Type something to see the input grow...';
  let exampleValue2 = '14';
  let exampleValue3 = '';
  let exampleValue4 = '';
  let exampleValue5 = '';
  let exampleValue6 = 'McDonalds';
  let exampleValue7 = 'Double Cheeseburger, Fries, and a Coke';
  let exampleValue8 = '29.99';

  $: if (+exampleValue8 > 900) {
    exampleValue8 = '900';
  }
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
  <label for="demo-input-1" class="mb-1 text-sm font-semibold text-gray-800"
    >Simple example with autofocus:</label>
  <AutosizeInput
    id="demo-input-1"
    bind:value={exampleValue1}
    autofocus
    class="rounded border border-gray-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
</div>

<div class="mt-4 flex flex-col rounded bg-gray-50 p-6">
  <label for="demo-input-2" class="mb-1 text-sm font-semibold text-gray-800"
    >Simple Number input:</label>
  <AutosizeInput
    id="demo-input-2"
    placeholder="0"
    type="number"
    bind:value={exampleValue2}
    class="rounded border border-gray-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
</div>

<div class="mt-4 flex flex-col rounded bg-gray-50 p-6">
  <label for="demo-input-3" class="mb-1 text-sm font-semibold text-gray-800"
    >Input with placeholder:</label>
  <AutosizeInput
    id="demo-input-3"
    bind:value={exampleValue3}
    placeholder="Bruce Wayne"
    class="rounded border border-gray-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
</div>

<div class="mt-4 flex flex-col rounded bg-gray-50 p-6">
  <label for="demo-input-4" class="mb-1 text-sm font-semibold text-gray-800"
    >Input with placeholder as minimum width:</label>
  <AutosizeInput
    placeholderIsMinWidth
    id="demo-input-4"
    bind:value={exampleValue4}
    placeholder="100 Main Street, Gotham City"
    class="rounded border border-gray-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
</div>

<div class="mt-4 flex flex-col rounded bg-gray-50 p-6">
  <label for="demo-input-5" class="mb-1 text-sm font-semibold text-gray-800"
    >Input with maxWidth and minWidth:</label>
  <AutosizeInput
    id="demo-input-5"
    bind:value={exampleValue5}
    minWidth="200"
    maxWidth="400"
    class="rounded border border-gray-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
</div>

<div class="mt-4 flex w-full flex-col rounded bg-gray-50 p-6">
  <label for="demo-input-6" class="mb-1 text-sm font-semibold text-gray-800"
    >A group of editable inputs inside flexbox card:</label>

  <div class="mt-4 flex flex-row items-center gap-4 rounded bg-white px-6 py-2">
    <div class="rounded-full bg-gray-100 p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-ham"
        ><path d="M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" /><path
          d="M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288" /><path
          d="M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025" /><path
          d="m8.5 16.5-1-1" /></svg>
    </div>
    <div class="shrink-2 flex overflow-hidden">
      <AutosizeInput
        id="demo-input-6"
        bind:value={exampleValue6}
        maxWidth="200"
        placeholder="Name"
        placeholderIsMinWidth
        class="rounded bg-inherit px-2 py-2 text-sm font-semibold outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100" />
    </div>
    <div class="shrink-2 flex overflow-hidden">
      <AutosizeInput
        id="demo-input-7"
        maxWidth="400"
        bind:value={exampleValue7}
        placeholder="Description"
        placeholderIsMinWidth
        class="focus:bg-white-100 rounded bg-inherit px-2 py-2 text-sm font-medium text-gray-400 outline-none  transition-colors hover:bg-gray-100 focus:bg-gray-100" />
    </div>
    <div class="shrink-2 ml-auto flex overflow-hidden">
      <AutosizeInput
        id="demo-input-8"
        step="0.01"
        min="0"
        max="9999"
        type="number"
        bind:value={exampleValue8}
        maxWidth="60"
        placeholder="0.00"
        placeholderIsMinWidth
        class="focus:bg-white-100 ml-auto rounded bg-inherit px-2 py-2 text-sm font-semibold outline-none  transition-colors hover:bg-gray-100 focus:bg-gray-100" />
    </div>
  </div>
</div>
