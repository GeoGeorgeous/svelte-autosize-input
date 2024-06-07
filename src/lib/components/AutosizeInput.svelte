<script lang="ts">
  import { onMount, afterUpdate, onDestroy } from 'svelte';
  import type { HTMLInputAttributes } from 'svelte/elements';

  // Define props similar to the React component's propTypes
  type $$Props = HTMLInputAttributes & {
    value: string | number | undefined;
    placeholder?: string;
    minWidth?: number;
    extraWidth?: number;
    inputStyle?: object;
    inputClassName?: string;
    injectStyles?: boolean;
    placeholderIsMinWidth?: boolean;
    onAutosize?: (width: number) => void;
    style?: object;
    className?: string;
  };

  // Default values for props
  export let value: $$Props['value'] = undefined;
  export let placeholder = '';
  export let minWidth: number = 1;
  export let extraWidth: number = 0;
  export let inputStyle: object = {};
  export let inputClassName = '';
  export let placeholderIsMinWidth = false;
  export let onAutosize: $$Props['onAutosize'];
  export let style: object = {};
  export let className = '';

  // References to DOM elements
  let wrapperRef: HTMLDivElement;
  let inputRef: HTMLInputElement;
  let sizerRef: HTMLDivElement;
  let placeHolderSizerRef: HTMLDivElement;
  let inputWidth = minWidth;

  // Update the input width based on the content and placeholder
  const updateInputWidth = () => {
    if (!sizerRef || typeof sizerRef.scrollWidth === 'undefined') return;

    let newInputWidth = sizerRef.scrollWidth + 2;

    if (placeholder && (!value || placeholderIsMinWidth)) {
      newInputWidth = Math.max(
        newInputWidth,
        placeHolderSizerRef.scrollWidth + 2
      );
    }

    // Apply extraWidth, with special handling for number types
    let calculatedExtraWidth = extraWidth;
    if (
      typeof inputRef.type === 'string' &&
      inputRef.type === 'number' &&
      extraWidth === 0
    ) {
      calculatedExtraWidth = 16; // Default extraWidth for number inputs
    }
    newInputWidth += calculatedExtraWidth;

    // Ensure the new width is not less than minWidth
    if (newInputWidth < minWidth) {
      newInputWidth = minWidth;
    }

    if (newInputWidth !== inputWidth) {
      inputWidth = newInputWidth;
      if (typeof onAutosize === 'function') {
        onAutosize(inputWidth);
      }
    }
  };

  // Copy relevant styles from the input to the sizer elements
  const copyInputStyles = () => {
    if (!window.getComputedStyle) return;
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
      if (placeHolderSizerRef) {
        placeHolderSizerRef.style[style] = computedStyles[style];
      }
    });
  };

  // Lifecycle hooks to manage component mounting and updating
  onMount(() => {
    copyInputStyles();
    updateInputWidth();
  });

  afterUpdate(() => {
    copyInputStyles();
    updateInputWidth();
  });

  onDestroy(() => {
    inputRef = null;
    sizerRef = null;
    placeHolderSizerRef = null;
    wrapperRef = null;
  });
</script>

<svelte:window on:resize={updateInputWidth} />

<div class={className} {style} bind:this={wrapperRef}>
  <input
    bind:this={inputRef}
    bind:value
    {placeholder}
    style={`width: ${inputWidth}px; ${inputStyle}`}
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
    style="position: absolute; top: 0; left: 0; visibility: hidden; height: 0; overflow: scroll; white-space: pre;">
    {value || ''}
  </div>
  {#if placeholder}
    <div
      bind:this={placeHolderSizerRef}
      style="position: absolute; top: 0; left: 0; visibility: hidden; height: 0; overflow: scroll; white-space: pre;">
      {placeholder}
    </div>
  {/if}
</div>
