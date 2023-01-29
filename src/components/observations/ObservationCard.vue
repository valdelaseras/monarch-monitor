<!--@TODO: turn into a generic card component-->
<template>
  <RouterLink
    tabindex="0"
    :to="{ path: `/observations/${id}` }"
    class="card theme-secondary"
  >
    <header class="card-header">
      <h4>{{ stage }}</h4>
    </header>
    <div class="card-body">
      <img
        class="card-image"
        :src="src"
        :alt="alt"
        role="img"
        :aria-label="alt"
      />
    </div>
    <footer class="card-footer">
      <p>{{ location }}</p>
    </footer>
  </RouterLink>
</template>

<script lang="ts">
export default {
  name: "ObservationCard",
  props: {
    id: String,
    stage: String,
    location: String,
    src: String,
    alt: String,
  },
};
</script>
