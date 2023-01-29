<template>
  <article class="article" role="article">
    <ObservationsSection />
  </article>
</template>

<script>
import ObservationsSection from "@/components/sections/Observations.vue";
export default {
  name: "ObservationsView",
  components: { ObservationsSection },
};
</script>
