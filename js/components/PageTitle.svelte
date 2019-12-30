<script>
  export let name;

  const { first, last } = name;
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,700');
  .title {
    font-family: 'Fira Mono', monospace;
    font-weight: normal;
  }
  .title .name {
    font-family: 'Fira Mono', monospace;
    font-weight: bold;
  }
</style>

<h1 class="ui huge header">
  <span class="title">
    /home/<span class="name">{first}</span>_<span class="name">{last}</span>
  </span>
</h1>