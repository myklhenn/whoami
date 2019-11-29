<template lang="pug">
.ui.relaxed.large.list
  a.item(
    v-bind:href="link.url"
    v-for="link in links"
  )
    .content
      i.large.icon(v-bind:class="link.icon_name")
      | {{ link.text }}
</template>

<script>
export default {
  props: {
    links: Array
  }
}
</script>

<style></style>