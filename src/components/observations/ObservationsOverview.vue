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
                tabindex="0"
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
            <ObservationCard v-bind="observation" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ObservationCard from "@/components/observations/ObservationCard.vue";
import { ObservationListItemService } from "@/services/observation-list-item.service";
import { useObservationsStore } from "@/store/observations";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

export default {
  name: "ObservationsOverview",
  components: { ObservationCard },
  setup() {
    const store = useObservationsStore();
    const { observations } = storeToRefs(store);
    const { setObservations } = store;

    const getObservations = () => {
      ObservationListItemService.getObservationListItems().then((result) =>
        setObservations(result)
      );
    };

    onMounted(() => {
      !observations.value.length ? getObservations() : null;
    });

    return {
      observations,
    };
  },
};
</script>
