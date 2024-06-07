<script>
  import { onMount, afterUpdate } from 'svelte';
  export let value = '';
  export let placeholder = '';
  export let placeholderIsMinWidth = false;
  export let minWidth = 0;

  let inputWidth = +minWidth;
  let containerWidth = 0;

  const updateInputWidth = () => {
    const margin = 2;
    let newInputWidth = sizerRef.scrollWidth + margin;
    if (placeholder && (!value || placeholderIsMinWidth)) {
      newInputWidth = Math.max(
        newInputWidth,
        placeHolderSizerRef.scrollWidth + margin
      );
    }

    if (newInputWidth < minWidth) {
      newInputWidth = minWidth;
    }

    containerWidth = getComputedStyle(wrapperRef.parentElement).width.replace(
      'px',
      ''
    );

    if (newInputWidth >= containerWidth) {
      newInputWidth = containerWidth;
    }

    inputWidth = newInputWidth;
  };

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

  let wrapperRef;
  let inputRef;
  let sizerRef;
  let placeHolderSizerRef;

  onMount(() => {
    copyInputStyles();
    updateInputWidth();
  });

  afterUpdate(() => {
    updateInputWidth();
  });
</script>

<div bind:this={wrapperRef} class={`inline-flex`}>
  <input
    bind:this={inputRef}
    bind:value
    style={`width: ${inputWidth}px;`}
    class={`box-content`}
    {placeholder}
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
    on:input
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:paste
    on:wheel
    {...$$restProps} />
  <div
    bind:this={sizerRef}
    class="invisible absolute left-0 top-0 overflow-scroll whitespace-pre">
    {value || ''}
  </div>
  {#if placeholder}
    <div
      bind:this={placeHolderSizerRef}
      class="invisible absolute left-0 top-0 overflow-scroll whitespace-pre">
      {placeholder}
    </div>
  {/if}
</div>
