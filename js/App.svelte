<script>
  import PageHeader from './components/PageHeader.svelte';
  import Objective from './components/Objective.svelte';
  import Links from './components/Links.svelte';
  import Experience from './components/Experience.svelte';
  import Projects from './components/Projects.svelte';
  import Education from './components/Education.svelte';

  import images from '../img/*.jpg';

  export let resume;

  const headerData = {
    name: resume.name,
    objective: resume.objective,
    links: resume.links,
    images
  }
  const experienceData = {
    experiences: resume.experience_list,
    images
  }
  const projectData = {
    projects: resume.project_list,
    images
  }
  const educationData = {
    educations: resume.education_list,
    images
  }
</script>

<style>
  .page-container {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
</style>

<div class="ui container page-container">
  <PageHeader {...headerData} />
  <Experience {...experienceData} />
  <Projects {...projectData} />
  <Education {...educationData} />
</div>
