<script>
  export let icon = '';
  export let text = '';
</script>

<h2 class="ui header">
  {#if icon}
    <i class="{icon} icon"></i>
  {/if}
  <div class="content">{text}</div>
</h2>