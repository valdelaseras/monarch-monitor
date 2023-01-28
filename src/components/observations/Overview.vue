<template>
  <div class="column">
    <div class="column">
      <div class="content">
        <h3>Overview</h3>
      </div>
    </div>
    <div class="column">
      <div
        class="column three"
        v-for="observation in observations"
        :key="observation.id"
      >
        <div class="content">
          <CCard v-bind="observation" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CCard from "@/components/observations/Card.vue";
import { ObservationService } from "@/services/observation.service";

export default {
  name: "COverview",
  components: { CCard },
  data() {
    return {
      observations: [],
    };
  },
  methods: {
    getObservations() {
      ObservationService.getObservations().then((observations) => {
        this.observations = observations;
      });
    },
  },
  mounted() {
    this.getObservations();
  },
};
</script>
