<template>
  <RouterLink :to="{ path: `/observations/${id}` }">
    <a class="card theme-secondary">
      <header class="card-header">
        <h4>{{ stage }}</h4>
      </header>
      <div class="card-body">
        <img class="card-image" src="{{ src }}" alt="{{ alt }}" />
      </div>
      <footer class="card-footer">
        <p>{{ location }}</p>
      </footer>
    </a>
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
}
/*@end card*/

/*@start
card-header,
card-body,
card-footer*/
.card-header,
.card-footer {
  padding: 10px variables.$default-padding;
}
/*@end
card-header,
card-body,
card-footer*/

/*@start card-image*/
.card-image {
  width: 100%;
  height: auto;
}
/*@end card-image*/
</style>
