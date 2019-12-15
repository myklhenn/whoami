<script>
  export let links;
</script>

<div class="ui relaxed large list">
  {#each links as link}
    <a class="item" href="{link.url}">
      <div class="content">
        <i class="large {link.icon_name} icon"></i>
        {link.text}
      </div>
    </a>
  {/each}
</div>