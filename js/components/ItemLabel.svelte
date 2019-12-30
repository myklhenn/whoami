<script>
  export let link = '';
  export let color = '';
  export let icon;
  export let text;
</script>

{#if link}
  <a class="ui {color} label" href={link}>
    <i class="{icon} icon"></i>
    {text}
  </a>
{:else}
  <div class="ui {color} label">
    <i class="{icon} icon"></i>
    {text}
  </div>
{/if}