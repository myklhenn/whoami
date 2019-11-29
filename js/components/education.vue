<template lang="pug">
section
  h2.ui.header
    i.graduation.cap.icon
    .content Education
  .ui.relaxed.items
    .item(v-for="education in educations")
      .ui.tiny.image
        img(v-bind:src="images[education.image_name]")
      .middle.aligned.content
        .header {{ education.school }}
        .description
          div(v-for="detail in education.details")
            | {{ detail }}
</template>

<script>
export default {
  props: {
    educations: Array,
    images: Object
  }
}
</script>

<style></style>