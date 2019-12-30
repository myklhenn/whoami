<script>
  import PageTitle from './PageTitle.svelte';
  import Objective from './Objective.svelte';
  import Links from './Links.svelte';

  export let name;
  export let objective;
  export let links;
  export let images;

  const profileImg = images['profile-img'];
</script>

<div class="ui stackable two column grid">
  <div class="divided row">
    <div class="eleven wide column">
      <PageTitle {name} />
      <Objective {objective} />
    </div>
    <div class="five wide column">
      <img class="ui tiny rounded image" src={profileImg} alt="profile-img" />
      <Links {links} />
    </div>
  </div>
</div>