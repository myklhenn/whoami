<script>
  import ItemDetails from './ItemDetails.svelte';

  export let experiences;
  export let images;
</script>

<section>
  <h2 class="ui header">
    <i class="briefcase icon"></i>
    <div class="content">Experience</div>
  </h2>
  <div class="ui relaxed items">
    {#each experiences as experience}
      <div class="item">
        <div class="ui small image">
          <img src="{images[experience.image_name]}" alt="{experience.image_name}">
        </div>
        <div class="content">
          <div class="header">{experience.job_title}</div>
          <div class="meta">
            <span>{experience.company}</span>
          </div>
          <div class="extra">
            {#if experience.time_range}
              <div class="ui label">
                <i class="calendar icon"></i>
                {experience.time_range}
              </div>
            {/if}
            {#if experience.location}
              <div class="ui label">
                <i class="map marker icon"></i>
                {experience.location}
              </div>
            {/if}
          </div>
          <div class="description">
            <ItemDetails details="{experience.details}" />
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>