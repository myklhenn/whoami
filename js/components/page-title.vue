<template lang="pug">
h1.ui.huge.header
  span.title
    | /home/
    span.name {{ name.first }}
    | _
    span.name {{ name.last }}
</template>

<script>
export default {
  props: {
    name: Object
  }
}
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