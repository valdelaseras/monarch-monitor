<template>
  <div class="column">
    <div class="column">
      <div class="content">
        <h2>Observation {{ observation?.id }}</h2>
      </div>
    </div>
    <div class="column">
      <div class="column phi b">
        <div class="content">
          <ul>
            <li v-for="(value, key) in observation">
              <p>
                <span class="font-extra-bold">{{ key }}:</span> {{ value }}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="column phi a">
        <div class="content">
          <img src="{{ observation?.src }}" alt="{{ observation?.alt }}" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { IObservation } from "@/domain/observation";
import { useRoute } from "vue-router";
import { ObservationService } from "@/services/observation.service";

interface ICDetailsData {
  observation: IObservation | undefined;
}

export default {
  name: "CDetails",
  data(): ICDetailsData {
    return {
      observation: undefined,
    };
  },
  methods: {
    getObservation(id: string) {
      ObservationService.getObservationById(id).then(
        (observation) => (this.observation = observation)
      );
    },
  },
  mounted() {
    const route = useRoute();
    this.getObservation(route.params.id);
  },
};
</script>
