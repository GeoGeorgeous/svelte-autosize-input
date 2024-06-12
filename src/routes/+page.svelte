<script lang="ts">
  import AutosizeInput from '@components/AutosizeInput.svelte';

  let exampleValue1 = 'Type something to see the input grow...';
  let exampleValue2 = 14;
  let exampleValue3 = '';
  let exampleValue4 = '';
  let exampleValue5 = '';
  let exampleValue6 = '';
  let exampleValue7 = "McDonald's";
  let exampleValue8 = 'Double Cheeseburger, Fries, and a Coke';
  let exampleValue9 = '29.99';

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  $: isEmailInputValid = exampleValue6 && emailRegex.test(exampleValue6);

  $: if (+exampleValue8 > 900) {
    exampleValue8 = '900';
  }
</script>

<section>
  <h1 class="mb-2 text-3xl font-semibold">Svelte Autosize Input</h1>
  <p class="font-medium text-slate-800">
    An input component for Svelte that resizes itself to the current content.
  </p>
  <p class="font-medium text-slate-800">
    Visit <a
      class="font-semibold text-blue-600 hover:opacity-65"
      href="https://github.com/GeoGeorgeous/svelte-autosize-input"
      >Github Repo</a>
    to read the documentation.
  </p>
</section>

<section class="mt-6 flex flex-col gap-4">
  <div class="flex flex-col rounded-lg bg-slate-50 p-6">
    <label for="demo-input-1" class="mb-1 text-sm font-semibold text-gray-800"
      >Simple example with autofocus:</label>
    <AutosizeInput
      id="demo-input-1"
      bind:value={exampleValue1}
      autofocus
      class="rounded border border-slate-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
  </div>

  <div class="flex flex-col rounded-lg bg-slate-50 p-6">
    <label for="demo-input-2" class="mb-1 text-sm font-semibold text-gray-800"
      >Number input:</label>
    <AutosizeInput
      id="demo-input-2"
      placeholder="0"
      type="number"
      bind:value={exampleValue2}
      class="rounded border border-slate-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
  </div>

  <div class="flex flex-col rounded-lg bg-slate-50 p-6">
    <label for="demo-input-3" class="mb-1 text-sm font-semibold text-gray-800"
      >Input with placeholder:</label>
    <AutosizeInput
      id="demo-input-3"
      bind:value={exampleValue3}
      placeholder="Bruce Wayne"
      class="rounded border border-slate-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
  </div>
  <div class="flex flex-col rounded-lg bg-slate-50 p-6">
    <label for="demo-input-4" class="mb-1 text-sm font-semibold text-gray-800"
      >Input with placeholder as minimum width:</label>
    <AutosizeInput
      placeholderIsMinWidth
      id="demo-input-4"
      bind:value={exampleValue4}
      placeholder="100 Main Street, Gotham City"
      class="rounded border border-slate-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
  </div>
  <div class="flex flex-col rounded-lg bg-slate-50 p-6">
    <label for="demo-input-5" class="mb-1 text-sm font-semibold text-gray-800"
      >Input with maxWidth and minWidth:</label>
    <AutosizeInput
      id="demo-input-5"
      bind:value={exampleValue5}
      minWidth="200"
      maxWidth="400"
      class="rounded border border-slate-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
  </div>
  <div class="flex flex-col rounded-lg bg-slate-50 p-6">
    <label for="demo-input-6" class="mb-1 text-sm font-semibold text-gray-800"
      >Example with live validation styling and error message:
    </label>
    <div class="relative">
      <AutosizeInput
        id="demo-input-6"
        bind:value={exampleValue6}
        type="text"
        placeholder="batman123@email.com"
        class={`box-border rounded border transition-colors ${exampleValue6 && !isEmailInputValid ? 'border-2 pl-10 outline-red-500' : ' border-slate-300'} bg-white px-2 py-1.5 font-medium`} />
      {#if exampleValue6 && !isEmailInputValid}
        <span class="absolute left-4 top-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="size-4 text-red-600">
            <path
              fill-rule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z"
              clip-rule="evenodd" />
          </svg></span>
      {/if}
    </div>

    {#if exampleValue6 && !isEmailInputValid}
      <p class="text-sm font-semibold text-red-600">
        Please enter a valid email address.
      </p>
    {/if}
  </div>
  <div class="flex flex-col rounded-lg bg-slate-50 p-6">
    <label for="demo-input-7" class="mb-1 text-sm font-semibold text-gray-800"
      >A group of editable inputs inside flexbox card:</label>

    <div
      class="mt-4 flex flex-col flex-wrap gap-1 rounded bg-white px-2 py-2 md:flex-row md:flex-nowrap md:items-center md:gap-4 md:px-6">
      <div class="w-fit rounded-full bg-gray-100 p-2">
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
      <div class="shrink-2 flex max-w-full overflow-hidden">
        <AutosizeInput
          id="demo-input-7"
          bind:value={exampleValue7}
          maxWidth="200"
          placeholder="Name"
          placeholderIsMinWidth
          class="rounded bg-inherit px-2 py-0.5 text-sm font-semibold outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 md:py-2" />
      </div>
      <div class="shrink-2 flex max-w-full overflow-hidden">
        <AutosizeInput
          id="demo-input-8"
          maxWidth="400"
          bind:value={exampleValue8}
          placeholder="Description"
          placeholderIsMinWidth
          class="focus:bg-white-100 rounded bg-inherit px-2 py-0.5 text-sm font-medium text-gray-400 outline-none transition-colors  hover:bg-gray-100 focus:bg-gray-100 md:py-2" />
      </div>
      <div class="shrink-2 flex max-w-full overflow-hidden md:ml-auto">
        <AutosizeInput
          id="demo-input-9"
          step="0.01"
          min="0"
          max="9999"
          type="number"
          bind:value={exampleValue9}
          maxWidth="60"
          placeholder="0.00"
          placeholderIsMinWidth
          class="focus:bg-white-100 ml-auto rounded bg-inherit px-2 py-0.5 text-sm font-semibold outline-none transition-colors  hover:bg-gray-100 focus:bg-gray-100 md:py-2" />
      </div>
    </div>
  </div>
</section>
