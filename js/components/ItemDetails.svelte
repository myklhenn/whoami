<script>
  export let details;
</script>

<style>
  .content > .list {
    padding: 0em !important;
  }
</style>

<div class="ui relaxed list">
  {#each details as detail}
    <div class="ui item">
      {#if Array.isArray(detail)}
        <div class="content">
          <div class="list">
            {#each detail as sub_detail}
              <div class="item">
                <i class="triangle right icon"></i>
                <div class="content">{sub_detail}</div>
              </div>
            {/each}
          </div>
        </div>
      {:else}
        <div class="content">{detail}</div>
      {/if}
    </div>
  {/each}
</div>