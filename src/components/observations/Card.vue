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

<style lang="scss">
@use "/src/styles/variables";

/*@start card*/
.card {
  display: inline-block;
  width: 100%;
  transition: background-color 100ms ease-in-out;
  h4,
  p {
    color: var(--tertiary-font-color);
  }
}

.card:hover {
  background-color: var(--primary-accent-color);
}
/*@end card*/

/*@start
card-header,
card-footer*/
.card-header,
.card-footer {
  padding: 10px variables.$default-padding;
}
/*@end
card-header,
card-footer*/

/*@start card-body*/
.card-body {
  box-sizing: border-box;
  height: 300px;
  max-height: 300px;
  overflow: hidden;
}
/*@end card-body*/

/*@start card-image*/
.card-image {
  width: 100%;
  height: auto;
}
/*@end card-image*/
</style>
