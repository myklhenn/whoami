<template lang="pug">
.ui.container.page-container
  .ui.stackable.two.column.grid
    .divided.row
      .eleven.wide.column
        page-title(v-bind:name="resume.name")
        objective(v-bind:objective="resume.objective")
      .five.wide.column
        img.ui.tiny.rounded.image(v-bind:src="images['profile-img']")
        links(v-bind:links="resume.links")
  experience(
    v-bind:experiences="resume.experience_list"
    v-bind:images="images"
  )
  projects(
    v-bind:projects="resume.project_list"
    v-bind:images="images"
  )
  education(
    v-bind:educations="resume.education_list"
    v-bind:images="images"
  )
</template>

<script>
import PageTitle from './page-title.vue';
import Images from '../../img/*.jpg';
import Links from './links.vue';
import Experience from './experience.vue';
import Objective from './objective.vue';
import Projects from './projects.vue';
import Education from './education.vue';

export default {
  data: () => ({
    images: Images
  }),
  props: {
    resume: Object,
  },
  components: {
    PageTitle,
    Links,
    Experience,
    Objective,
    Projects,
    Education
  }
}
</script>

<style>
.page-container {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>