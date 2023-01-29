<template>
  <RouterLink
    :to="{ path: `/observations/${id}` }"
    class="card theme-secondary"
  >
    <header class="card-header">
      <h4>{{ stage }}</h4>
    </header>
    <div class="card-body">
      <img class="card-image" :src="src" :alt="alt" />
    </div>
    <footer class="card-footer">
      <p>{{ location }}</p>
    </footer>
  </RouterLink>
</template>

<script lang="ts">
export default {
  name: "CCard",
  props: {
    id: String,
    stage: String,
    location: String,
    src: String,
    alt: String,
  },
};
</script>
