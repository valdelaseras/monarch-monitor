<template>
  <section class="section theme-primary" role="region">
    <div class="grid">
      <div class="column">
        <div class="column">
          <div class="content">
            <h2>Observations</h2>
          </div>
        </div>
        <RouterView />
      </div>
    </div>
  </section>
</template>

<script>
import { RouterView } from "vue-router";
export default {
  name: "ObservationsSection",
  components: { RouterView },
};
</script>
