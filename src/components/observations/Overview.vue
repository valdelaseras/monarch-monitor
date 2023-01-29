<template>
  <div class="column">
    <div class="column">
      <div class="content">
        <h3>Overview</h3>
      </div>
    </div>
    <div class="column">
      <div class="column">
        <div class="content">
          <div class="flex space-between align-items-center">
            <div>
              <p>
                Total observations:
                <span class="font-extra-bold">{{ observations.length }}</span>
              </p>
            </div>
            <div>
              <RouterLink
                to="/observations/new"
                class="btn btn-primary"
                role="button"
              >
                Add new
              </RouterLink>
            </div>
          </div>
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
  </div>
</template>

<script lang="ts">
import CCard from "@/components/observations/Card.vue";
import { ObservationListItemService } from "@/services/observation-list-item.service";

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
      ObservationListItemService.getObservationListItems().then(
        (observations) => {
          this.observations = observations;
        }
      );
    },
  },
  mounted() {
    this.getObservations();
  },
};
</script>
