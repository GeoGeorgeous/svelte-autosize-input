# Svelte-Autosize-Input

A flexible input component for Svelte that automatically adjusts its width to fit the current content.

[Live demo](https://svelte-autosize-input.vercel.app/) | [Github Repo](https://github.com/GeoGeorgeous/svelte-autosize-input)

## Installation

```bash
npm i svelte-autosize-input
```

## Usage

The component wraps an `<input>` field to dynamically adjusts its width based on its content.

Here’s how you can use it in your Svelte or SvelteKit app:

```svelte
<script>
  import AutosizeInput from 'svelte-autosize-input';
  let value = '';
</script>

<AutosizeInput bind:value />
```

## Styling

The component is designed to be headless, meaning it does not enforce any specific styles on its own.

You can customize the appearance of the component by passing your own classes via the `class` prop:

```svelte
<AutosizeInput
  class="rounded border border-slate-300 bg-white px-2 py-1.5 font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
```

## Props

#### `value`

The current value of the input. This should be bound to a variable to allow two-way data binding.

```svelte
<script>
  let value = '';
</script>

<AutosizeInput bind:value />
```

#### `type`

Input type

```svelte
<script>
  let value = 12;
</script>

<AutosizeInput bind:value type="number" />
```

#### `placeholder`

Optional placeholder text for the input

```svelte
<script>
  let value = '';
</script>

<AutosizeInput bind:value placeholder="Your name" />
```

#### `placeholderIsMinWidth`

If true, the placeholder width will be used as the minimum width of the input.

```svelte
<script>
  let value = '';
</script>

<AutosizeInput bind:value placeholder="Your name" placeholderIsMinWidth />
```

#### `minWidth`

The minimum width of the input in pixels.

```svelte
<script>
  let value = '';
</script>

<AutosizeInput bind:value minWidth={300} />
```

#### `maxWidth`

The maximum width of the input in pixels.

```svelte
<script>
  let value = '';
</script>

<AutosizeInput bind:value maxWidth={500} />
```

## Methods

#### `updateInputWidth()`

Adjusts the width of the input field based on the content length and the specified placeholder.
This method is called whenever there is a need to recalculate the input field's width, such as when the input value changes or the component is initially rendered, but it can be called outside as well, for example on focus() event.

```svelte
<script>
  let value = '';
  let element;

  const updateInputWidthOnFocus = () => {
    element?.updateInputWidth();
  };
</script>

<AutosizeInput
  bind:value
  bind:this={element}
  on:focus={updateInputWidthOnFocus} />
```

#### `copyInputStyles()`

Copies specific CSS styles from the input field to the placeholder and content sizer elements. This method might be used after the styles change to apply changed styles to the sizer element.

```svelte
<script>
  let value = '';
  let element;

  const copyInputStylesOnFocus = () => {
    element?.updateInputWidth();
  };
</script>

<AutosizeInput
  bind:value
  bind:this={element}
  on:focus={copyInputStylesOnFocus} />
```
