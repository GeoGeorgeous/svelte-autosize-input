<script lang="ts">
  import { afterUpdate, onMount } from 'svelte';
  import type { HTMLInputAttributes } from 'svelte/elements';

  type $$Props = HTMLInputAttributes & {
    value: string | number | undefined;
    placeholder?: string;
    minWidth?: number;
    overflow?: boolean;
    placeholderIsMinWidth?: boolean;
  };

  export let value: $$Props['value'] = undefined;
  export let placeholder = '';
  export let minWidth: number = 0;
  export let overflow: boolean = false;

  let wrapperRef: HTMLDivElement;
  let inputRef: HTMLInputElement;
  let sizerRef: HTMLDivElement;
  let inputWidth = 0;

  const updateInputWidth = () => {
    if (sizerRef && sizerRef.scrollWidth) {
      inputWidth = Math.max(sizerRef.scrollWidth + 2, minWidth);
    }

    if (!overflow) {
      let maxWidth = +window
        .getComputedStyle(wrapperRef)
        .width.replace('px', '');
      console.log(maxWidth);

      if (inputWidth >= maxWidth) {
        inputWidth = maxWidth;
      }
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

<svelte:window on:resize={updateInputWidth} />

<div class="inline" bind:this={wrapperRef}>
  <input
    bind:this={inputRef}
    bind:value
    {placeholder}
    style:width={inputWidth + 'px'}
    class="box-content max-w-full"
    on:input={updateInputWidth}
    on:blur
    on:change
    on:click
    on:focus={() => copyInputStyles()}
    on:focusin
    on:focusout
    on:keydown
    on:keypress
    on:keyup
    on:input
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:paste
    on:wheel
    {...$$restProps} />
  <div
    bind:this={sizerRef}
    class="invisible absolute left-0 top-0 h-0 overflow-scroll whitespace-pre">
    {value || placeholder}
  </div>
</div>
