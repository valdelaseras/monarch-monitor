<template>
  <article class="article" role="article">
    <LandingSection />
    <AboutSection />
  </article>
</template>

<script>
import LandingSection from "@/components/sections/Landing.vue";
import AboutSection from "@/components/sections/About.vue";

export default {
  name: "LandingView",
  components: { LandingSection, AboutSection },
};
</script>
