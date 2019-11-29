<template lang='pug'>
section
  h2.ui.header
    i.code.icon
    .content Projects
  .ui.relaxed.items
    .item(v-for='project in projects')
      .ui.small.image
        img(v-bind:src="images[project.image_name]")
      .content
        .header {{ project.name }}
        .extra
          .ui.label
            i.calendar.icon
            | {{ project.time_range }}
          a.ui.red.label(
            v-if="project.video_id"
            v-bind:href="'https://www.youtube.com/watch?v=' + project.video_id"
          )
            i.icon(v-bind:class="project.video_source")
            | Watch Video
        .description
          item-details(v-bind:details="project.details")
</template>

<script>
import ItemDetails from './item-details.vue'

export default {
  props: {
    projects: Array,
    images: Object
  },
  components: {
    ItemDetails
  }
}
</script>

<style></style>