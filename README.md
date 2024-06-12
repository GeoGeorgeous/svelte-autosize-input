# Svelte-Autosize-Input

A flexible input component for Svelte that automatically adjusts its width to fit the current content.

[Live demo](https://svelte-autosize-input.vercel.app/) | [Github Repo](https://github.com/GeoGeorgeous/svelte-autosize-input)

## Installation

```bash
npm i svelte-autosize-input
```

## Usage

`Svelte-Autosize-Input` wraps an `<input>` field to dynamically adjusts its width based on its content.

Here’s how you can use it in your Svelte or SvelteKit app:

```svelte
<script>
  import AutosizeInput from 'svelte-autosize-input';
  let value = '';
</script>

<AutosizeInput bind:value />
```

## Props

### `value`

The current value of the input. This should be bound to a variable to allow two-way data binding.

```svelte
<script>
  let value = '';
</script>

<AutosizeInput bind:value />
```

### `placeholder`

Optional placeholder text for the input

```svelte
<script>
  let value = '';
</script>

<AutosizeInput bind:value placeholder="Your name" />
```

### `placeholderIsMinWidth`

If true, the placeholder width will be used as the minimum width of the input.

```svelte
<script>
  let value = '';
</script>

<AutosizeInput bind:value placeholder="Your name" placeholderIsMinWidth />
```

### `minWidth`

The minimum width of the input in pixels.

```svelte
<script>
  let value = '';
</script>

<AutosizeInput bind:value minWidth={300} />
```

### `maxWidth`

The maximum width of the input in pixels.

```svelte
<script>
  let value = '';
</script>

<AutosizeInput bind:value minWidth={300} />
```
