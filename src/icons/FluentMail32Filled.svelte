<script lang="ts" module>
  export interface FluentMail32FilledProps {
    display?: boolean;
    occupy?: boolean;
    size?: number;
    class?: string;
  }
</script>

<script lang="ts">
  const {display = false, occupy = true, size = 0.7, class: className = ''}: FluentMail32FilledProps = $props();
</script>

{#if display}
  <svg
   xmlns="http://www.w3.org/2000/svg"
   width="{size}em"
   height="{size}em"
   viewBox="0 0 32 32"
   class="{className}">
  <path fill="currentColor" d="M2.004 9.303A4.5 4.5 0 0 1 6.5 5h19a4.5 4.5 0 0 1 4.496 4.303l-1.476.82L16 16.864L3.48 10.123zM2 11.588V22.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5V11.588l-.526.293l-13 7a1 1 0 0 1-.948 0L2.514 11.874z"/>
</svg>
{:else if occupy}
  <div style="height: {size}em; width: {size}em;"></div>
{/if}