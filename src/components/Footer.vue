<template>
  <footer class="footer theme-secondary">
    <div class="grid">
      <div class="column">
        <div class="column three">
          <div class="content">
            <p>
              A Vue.js PWA demo for an upcoming interview. Weekend hackaton, go!
            </p>
            <p>
              Please see the used
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
          </div>
        </div>
        <div class="column three">
          <div class="content">
            <ul class="footer-link-list">
              <li v-for="link in routerLinks" :key="link.title">
                <RouterLink class="footer-link" :to="link.path">
                  {{ link.title }}
                </RouterLink>
              </li>
              <li v-for="link in externalLinks" :key="link.title">
                <a class="footer-link" target="_blank" v-bind:href="link.href">
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
        "Axios",
        "Vitest",
        "SCSS",
        "Git",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "/src/styles/variables";

/*@start footer*/
.footer {
  display: flow-root;
  width: 100vw;
  height: auto;
  position: relative;
  bottom: 0;
  padding: variables.$vertical-spacing;
  //@TODO: footer is laid on top of nav due to element order. Using z-index -10 prevents the footer ( links ) from being
  //clicked on
}
/*@end footer*/

/*@start footer link list + link*/
.footer-link-list > li:not(:last-child) {
  padding-bottom: variables.$default-padding;
}

.footer-link {
  font-weight: 100;
  text-transform: uppercase;
}
/*@end footer link list + link*/
</style>
