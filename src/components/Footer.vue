<template>
  <footer class="footer theme-secondary">
    <div class="grid">
      <div class="column">
        <div class="column three">
          <div class="content">
            <p>1</p>
          </div>
        </div>
        <div class="column three">
          <div class="content">
            <p>2</p>
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

.footer {
  display: inline-block;
  width: 100vw;
}

.footer-link-list > li:not(:last-child) {
  padding-bottom: variables.$default-padding;
}

.footer-link {
  font-weight: 100;
  text-transform: uppercase;
}
</style>
