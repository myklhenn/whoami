<template lang="pug">
.ui.relaxed.list
  .ui.item(v-for="detail in details")
    .content(v-if="Array.isArray(detail)")
      .list
        .item(v-for="sub_detail in detail")
          i.triangle.right.icon
          .content {{ sub_detail }}
    .content(v-else) {{ detail }}
</template>

<script>
export default {
  props: {
    details: Array
  }
}
</script>

<style>
.content > .list {
  padding: 0em !important;
}
</style>