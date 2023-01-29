<template>
  <div class="column">
    <div class="column">
      <div class="content">
        <h3>Observation {{ observationListItem?.id }}</h3>
      </div>
    </div>
    <div class="column">
      <div class="column phi a">
        <div class="content">
          <ul>
            <li :key="property.key" v-for="property of observationDetails">
              <p>
                <span class="font-extra-bold">{{ property.key }}:</span>
                {{ property.value }}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="column phi b">
        <div class="content">
          <img
            role="img"
            :aria-label="observationListItem?.alt"
            :src="observationListItem?.src"
            :alt="observationListItem?.alt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import type { IObservationListItem } from "@/domain/observation.interface";
import { ObservationListItemService } from "@/services/observation-list-item.service";

interface ICDetailsData {
  observation: IObservationListItem | undefined;
}

export default {
  name: "ObservationDetails",
  data(): ICDetailsData {
    return {
      observationListItem: undefined,
    };
  },
  methods: {
    getObservationListItem(id: string) {
      ObservationListItemService.getObservationListItemById(id).then(
        (observationListItem) =>
          (this.observationListItem = observationListItem)
      );
    },
  },
  computed: {
    // to display the key / values of every prop in an observation: IObservationListItem,
    // in a list, except for the src and alt props
    observationDetails() {
      if (!this.observationListItem) return [];
      return Object.keys(this.observationListItem)
        .filter((key) => key !== "src" && key !== "alt")
        .map((key) => ({
          key,
          value: this.observationListItem[key],
        }));
    },
  },
  mounted() {
    const route = useRoute();
    this.getObservationListItem(route.params.id);
  },
};
</script>

<style lang="scss">
/*@start img*/
img {
  width: 100%;
}
/*@end img*/
</style>
