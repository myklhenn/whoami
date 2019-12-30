<script>
  import SectionHeader from './SectionHeader.svelte';
  import ItemLabel from './ItemLabel.svelte';
  import ItemDetails from './ItemDetails.svelte';

  export let projects;
  export let images;
</script>

<section>
  <SectionHeader icon="code" text="Projects" />
  <div class="ui relaxed items">
    {#each projects as project}
      <div class="item">
        <div class="ui small image">
          <img src="{images[project.image_name]}" alt="">
        </div>
        <div class="content">
          <div class="header">{project.name}</div>
          <div class="extra">
            {#if project.time_range}
              <ItemLabel icon="calendar" text="{project.time_range}" />
            {/if}
            {#if project.video_id}
              <ItemLabel
                link="https://www.youtube.com/watch?v={project.video_id}"
                color="red"
                icon="{project.video_source}"
                text="Watch Video"
              />
            {/if}
          </div>
          <div class="description">
            <ItemDetails details="{project.details}" />
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>