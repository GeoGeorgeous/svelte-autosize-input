<script lang="ts">
  import AutosizeInput from '@components/AutosizeInput.svelte';
  let value1 = 'Type something to see the input grow...';
  let value2 = '14,200.24';
  let value3 = '';
  let value4 = '';
  let value5 = '';
  let value6 = 'McDonalds';
  let value7 = 'Double Cheeseburger';
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
    >Simple example with autofocus</label>
  <AutosizeInput
    id="demo-input-1"
    bind:value={value1}
    autofocus
    class="rounded border border-gray-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
</div>

<div class="mt-4 flex flex-col rounded bg-gray-50 p-6">
  <label for="demo-input-2" class="mb-1 text-sm font-semibold text-gray-800"
    >Number</label>
  <AutosizeInput
    id="demo-input-2"
    type="number"
    bind:value={value2}
    class="rounded border border-gray-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
</div>

<div class="mt-4 flex flex-col rounded bg-gray-50 p-6">
  <label for="demo-input-3" class="mb-1 text-sm font-semibold text-gray-800"
    >Input with placeholder</label>
  <AutosizeInput
    id="demo-input-3"
    bind:value={value3}
    placeholder="Your name"
    class="rounded border border-gray-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
</div>

<div class="mt-4 flex flex-col rounded bg-gray-50 p-6">
  <label for="demo-input-4" class="mb-1 text-sm font-semibold text-gray-800"
    >Input with placeholder as minimum width:</label>
  <AutosizeInput
    id="demo-input-4"
    bind:value={value4}
    placeholder="Your name"
    class="rounded border border-gray-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
</div>

<div class="mt-4 flex flex-col rounded bg-gray-50 p-6">
  <label for="demo-input-5" class="mb-1 text-sm font-semibold text-gray-800"
    >Overflowing input</label>
  <AutosizeInput
    id="demo-input-5"
    bind:value={value5}
    overflow
    placeholder="Type in something really long to see the input overflow the parent container"
    class="rounded border border-gray-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
</div>

<div class="mt-4 flex flex-row items-center gap-4 rounded bg-gray-50 px-6 py-2">
  <div class="rounded-full border border-gray-200 bg-gray-100 p-2">
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
      class="size-5"
      ><path d="M15 11h.01" /><path d="M11 15h.01" /><path
        d="M16 16h.01" /><path d="m2 16 20 6-6-20A20 20 0 0 0 2 16" /><path
        d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" /></svg>
  </div>
  <div class="inline-flex flex-row items-center gap-1">
    <AutosizeInput
      id="demo-input-5"
      bind:value={value6}
      overflow
      placeholder="Name"
      maxlength={20}
      class="rounded bg-inherit px-2 py-2 font-semibold outline-none  transition-colors  hover:bg-gray-100 focus:bg-gray-100" />
    <AutosizeInput
      id="demo-input-5"
      bind:value={value7}
      overflow
      placeholder="Name"
      class="focus:bg-white-100 rounded bg-inherit px-2 py-[10px] text-sm font-semibold text-gray-600 outline-none  transition-colors hover:bg-gray-100 focus:bg-gray-100" />
  </div>
</div>
