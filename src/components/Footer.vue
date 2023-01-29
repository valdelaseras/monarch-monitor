<template>
  <footer class="footer theme-secondary" role="contentinfo">
    <div class="grid">
      <div class="column">
        <div class="column three">
          <div class="content">
            <p>
              A Vue.js PWA demo for an upcoming interview. Weekend hackaton, go!
            </p>
            <p>
              Please see the stack of
              <span class="font-extra-bold">tech and tools →</span>
            </p>
          </div>
        </div>
        <div class="column three">
          <div class="content">
            <ul class="compact-list">
              <li v-for="tool in tools" :key="tool">
                <p>{{ tool }}</p>
              </li>
            </ul>
            <small class="font-extra-bold">* WIP</small>
          </div>
        </div>
        <div class="column three">
          <div class="content">
            <ul class="footer-link-list">
              <li v-for="link in routerLinks" :key="link.title">
                <RouterLink tabindex="0" class="footer-link" :to="link.path">
                  {{ link.title }}
                </RouterLink>
              </li>
              <li v-for="link in externalLinks" :key="link.title">
                <a class="footer-link" tabindex="0" target="_blank" v-bind:href="link.href">
                  {{ link.title }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "CFooter",
  data() {
    return {
      routerLinks: [{ title: "About MoMo", path: "/about" }],
      externalLinks: [
        {
          title: "GitHub",
          href: "https://github.com/valdelaseras/monarch-monitor",
        },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/in/robin-scholtes-488964115",
        },
      ],
      tools: [
        "Vue 3",
        "Vue Router",
        "TypeScript",
        "SCSS",
        "Git",
        "Axios",
        "PWA *",
        "Pinia *",
        "Vitest *",
        "PlayWright *",
        "Vue Datepicker *",
      ],
    };
  },
};
</script>
