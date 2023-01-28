<template>
  <RouterLink :to="{ path: `/observations/${id}` }">
    <a class="card theme-secondary">
      <header class="card-header">
        <h4>{{ stage }}</h4>
      </header>
      <div class="card-body">
        <!--        <img src="{{ src }}" alt="{{ alt }}" />-->
      </div>
      <footer class="card-footer">
        <p>{{ location }}</p>
      </footer>
    </a>
  </RouterLink>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "CCard",
  props: {
    id: String,
    stage: String,
    location: String,
  },
  methods() {
    axios.get("/data/assets.json").then((response) => console.log(response));
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

/*@start card header,body,footer*/
.card-header,
.card-body,
.card-footer {
  padding: 10px variables.$default-padding;
}
/*@end card header,body,footer*/
</style>
