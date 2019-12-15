<script>
  import Title from './components/Title.svelte';
  import Objective from './components/Objective.svelte';
  import Links from './components/Links.svelte';
  import Experience from './components/Experience.svelte';
  import Projects from './components/Projects.svelte';
  import Education from './components/Education.svelte';

  import images from '../../img/*.jpg';

  export let resume;

  const {
    name,
    objective,
    links,
    experience_list,
    project_list,
    education_list
  } = resume;
</script>

<style>
  .page-container {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
</style>

<div class="ui container page-container">
  <div class="ui stackable two column grid">
    <div class="divided row">
      <div class="eleven wide column">
        <Title {name} />
        <Objective {objective} />
      </div>
      <div class="five wide column">
        <img class="ui tiny rounded image" src={images['profile-img']} alt="profile image" />
        <Links {links} />
      </div>
    </div>
  </div>
  <Experience experiences={experience_list} {images} />
  <Projects projects={project_list} {images} />
  <Education educations={education_list} {images} />
</div>
