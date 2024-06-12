<script lang="ts">
  import { afterUpdate, onMount } from 'svelte';
  import type { HTMLInputAttributes } from 'svelte/elements';

  type $$Props = HTMLInputAttributes & {
    value: string;
    placeholder?: string | undefined;
    placeholderIsMinWidth?: boolean;
    minWidth?: string | undefined;
    maxWidth?: string | undefined;
    type: 'text' | 'email' | 'number' | 'tel' | 'url';
  };

  export let value: $$Props['value'] = undefined;
  export let placeholder: $$Props['placeholder'] = undefined;
  export let placeholderIsMinWidth: $$Props['placeholderIsMinWidth'] = false;
  export let minWidth: $$Props['minWidth'] = undefined;
  export let maxWidth: $$Props['maxWidth'] = undefined;
  export let type: $$Props['type'] = 'text';

  const useType = (node: HTMLInputElement) => {
    node.type = type;
  };

  let inputWidth = minWidth ? +minWidth : 0;

  let wrapperRef: HTMLDivElement;
  let inputRef: HTMLInputElement;
  let sizerRef: HTMLDivElement;
  let placeHolderSizerRef: HTMLDivElement;

  export const updateInputWidth = () => {
    const margin = 2;
    let newInputWidth = sizerRef.scrollWidth + margin;
    if (placeholder && (!value || placeholderIsMinWidth)) {
      newInputWidth = Math.max(
        newInputWidth,
        placeHolderSizerRef.scrollWidth + margin
      );
    }

    if (minWidth && newInputWidth < +minWidth) {
      newInputWidth = +minWidth;
    }

    if (maxWidth && newInputWidth > +maxWidth) {
      newInputWidth = +maxWidth;
    }

    inputWidth = newInputWidth;
  };
  export const copyInputStyles = (): void => {
    if (!window.getComputedStyle || !inputRef || !sizerRef) {
      return;
    }

    const computedStyles = window.getComputedStyle(inputRef);
    const stylesToCopy: Array<keyof CSSStyleDeclaration> = [
      'fontSize',
      'fontFamily',
      'fontWeight',
      'fontStyle',
      'letterSpacing',
      'textTransform',
      'border'
    ];

    for (const style of stylesToCopy) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (sizerRef.style as any)[style] = computedStyles[style];
      if (placeHolderSizerRef) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (placeHolderSizerRef.style as any)[style] = computedStyles[style];
      }
    }
  };

  onMount(() => {
    copyInputStyles();
    updateInputWidth();
  });

  afterUpdate(() => {
    updateInputWidth();
  });
</script>

<div bind:this={wrapperRef} class="autosize-wrapper">
  <input
    bind:this={inputRef}
    bind:value
    style={`width: ${inputWidth}px; ${$$restProps.style}`}
    {placeholder}
    on:input={() => updateInputWidth}
    on:focus
    on:blur
    on:change
    on:click
    on:focus
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
    on:wheel|passive
    use:useType
    {...$$restProps} />
  <div bind:this={sizerRef} class="autosize-sizer">
    {value || ''}
  </div>
  {#if placeholder}
    <div bind:this={placeHolderSizerRef} class="autosize-sizer">
      {placeholder}
    </div>
  {/if}
</div>

<style>
  .autosize-wrapper {
    display: flex;
  }
  .autosize-wrapper input {
    box-sizing: content-box;
  }
  .autosize-sizer {
    max-width: 100%;
    visibility: hidden;
    position: absolute;
    left: 0;
    top: 0;
    overflow: scroll;
    white-space: pre;
  }
</style>
