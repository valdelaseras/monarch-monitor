<template>
  <section class="section">
    <div class="grid">
      <div class="column">
        <div class="column">
          <div class="content">
            <h2>Observations</h2>
          </div>
        </div>
        <COverview />
      </div>
    </div>
  </section>
</template>

<script>
import COverview from "@/components/observations/Overview.vue";
export default {
  name: "ObservationsView",
  components: { COverview },
};
</script>
