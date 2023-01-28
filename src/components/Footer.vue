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
              <li>
                <p>Vue 3</p>
              </li>
              <li>
                <p>Vue Router</p>
              </li>
              <li>
                <p>TypeScript</p>
              </li>
              <li>
                <p>PWA</p>
              </li>
              <li>
                <p>Axios</p>
              </li>
              <li>
                <p>Vitest</p>
              </li>
              <li>
                <p>SCSS</p>
              </li>
              <li>
                <p>Git</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="column three">
          <div class="content">
            <ul class="footer-link-list">
              <li>
                <RouterLink class="footer-link" to="/about">
                  About MoMo
                </RouterLink>
              </li>
              <li>
                <a
                  class="footer-link"
                  href="https://github.com/valdelaseras/monarch-monitor"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  class="footer-link"
                  href="https://www.linkedin.com/in/robin-scholtes-488964115/"
                >
                  LinkedIn
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
  z-index: -10; // ensure mobile menu lays over the footer
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
