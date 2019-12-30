<script>
  import SectionHeader from './SectionHeader.svelte';
  import ItemLabel from './ItemLabel.svelte';
  import ItemDetails from './ItemDetails.svelte';

  export let experiences;
  export let images;
</script>

<section>
  <SectionHeader icon="briefcase" text="Experience" />
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
              <ItemLabel icon="calendar" text="{experience.time_range}" />
            {/if}
            {#if experience.location}
              <ItemLabel icon="map marker" text="{experience.location}" />
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