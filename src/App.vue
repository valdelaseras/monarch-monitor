<script setup lang="ts">
import { RouterView } from "vue-router";
import CNav from "@/components/Nav.vue";
import CFooter from "@/components/Footer.vue";
</script>

<template>
  <header role="banner">
    <c-nav />
  </header>
  <main class="main">
    <RouterView />
  </main>
  <c-footer />
</template>
