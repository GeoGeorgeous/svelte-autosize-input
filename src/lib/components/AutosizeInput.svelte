<script lang="ts">
  import { onMount, afterUpdate } from 'svelte';
  import type { HTMLInputAttributes } from 'svelte/elements';

  type $$Props = HTMLInputAttributes & {
    value: string | number | undefined;
    placeholder?: string;
    minWidth?: number;
  };

  export let value: $$Props['value'] = undefined;
  export let placeholder = '';
  export let minWidth: number = 1;

  let inputWidth = minWidth;
  let inputRef: HTMLInputElement;
  let sizerRef: HTMLDivElement;

  const updateInputWidth = () => {
    if (sizerRef && sizerRef.scrollWidth) {
      inputWidth = Math.max(sizerRef.scrollWidth + 2, minWidth);
    }
  };

  const copyInputStyles = () => {
    const computedStyles = window.getComputedStyle(inputRef);
    const stylesToCopy = [
      'font-size',
      'font-family',
      'font-weight',
      'font-style',
      'letter-spacing',
      'text-transform',
      'padding',
      'border'
    ];

    stylesToCopy.forEach((style) => {
      sizerRef.style[style] = computedStyles[style];
    });
  };

  onMount(() => {
    copyInputStyles();
    updateInputWidth();
  });

  afterUpdate(() => {
    copyInputStyles();
    updateInputWidth();
  });
</script>

<div class="wrapper">
  <input
    bind:this={inputRef}
    bind:value
    {placeholder}
    style="width: {inputWidth}px; box-sizing: content-box;"
    on:input={updateInputWidth}
    on:blur
    on:change
    on:click
    on:focus
    on:focusin
    on:focusout
    on:keydown
    on:keypress
    on:keyup
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:paste
    on:wheel
    {...$$restProps} />
  <div bind:this={sizerRef} class="sizer">{value || placeholder}</div>
</div>

<style>
  .sizer {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    height: 0;
    overflow: scroll;
    white-space: pre;
  }

  .wrapper {
    display: inline-block;
  }
</style>
