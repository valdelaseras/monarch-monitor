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
            <li>{{ observation?.id }}</li>
            <li>{{ observation?.event }}</li>
            <li>{{ observation?.species }}</li>
            <li>{{ observation?.location }}</li>
            <li>{{ observation?.datetime }}</li>
            <li>{{ observation?.stage }}</li>
            <li>{{ observation?.note }}</li>
            <li>{{ observation?.sex }}</li>
            <li>{{ observation?.alive }}</li>
          </ul>
        </div>
      </div>
      <div class="column phi a">
        <div class="content">
<!--          <img src="{{ observation?.src }}" alt="{{ observation?.alt }}" />-->
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
      ObservationService.getObservationById( id ).then( observation =>
          this.observation = observation
      );
    },
  },
  mounted() {
    const route = useRoute();
    this.getObservation(route.params.id);
  },
};
</script>
