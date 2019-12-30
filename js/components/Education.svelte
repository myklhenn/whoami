<script>
  import SectionHeader from './SectionHeader.svelte';

  export let educations;
  export let images;
</script>

<section>
  <SectionHeader icon="graduation cap" text="Education" />
  <div class="ui relaxed items">
    {#each educations as education}
      <div class="item">
        <div class="ui tiny image">
          <img src="{images[education.image_name]}" alt="">
        </div>
        <div class="middle aligned content">
          <div class="header">
            {education.school}
          </div>
          <div class="description">
            {#each education.details as detail}
              <div>{ detail }</div>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>