<script>
  import ItemDetails from './ItemDetails.svelte';

  export let projects;
  export let images;
</script>

<section>
  <h2 class="ui header">
    <i class="code icon"></i>
    <div class="content">Projects</div>
  </h2>
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
              <div class="ui label">
                <i class="calendar icon"></i>
                {project.time_range}
              </div>
            {/if}
            {#if project.video_id}
              <a class="ui red label" href="https://www.youtube.com/watch?v={project.video_id}">
                <i class="map {project.video_source} icon"></i>
                Watch Video
              </a>
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