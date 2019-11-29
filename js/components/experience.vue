<template lang="pug">
section
  h2.ui.header
      i.briefcase.icon
      .content Experience
  .ui.relaxed.items
    .item(v-for="experience in experiences")
      .ui.small.image
        img(v-bind:src="images[experience.image_name]")
      .content
        .header {{ experience.job_title }}
        .meta
          span {{ experience.company }}
        .extra
          .ui.label
            i.calendar.icon
            | {{ experience.time_range }}
          .ui.label
            i.map.marker.icon
            | {{ experience.location }}
        .description
          item-details(v-bind:details="experience.details")
</template>

<script>
import ItemDetails from './item-details.vue';

export default {
  props: {
    experiences: Array,
    images: Object
  },
  components: {
    ItemDetails
  }
}
</script>

<style></style>