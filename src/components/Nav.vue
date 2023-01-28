<template>
  <nav class="nav theme-primary">
    <div class="column">
      <div class="content">
        <div class="nav-branding">
          <img
            src="/img/logo/butterfly.svg"
            class="nav-branding-logo"
            alt="icon of a butterfly"
          />
          <RouterLink class="nav-branding-typography" to="/">MoMo</RouterLink>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="content">
        <ul class="primary-nav-list" id="nav-list">
          <li>
            <RouterLink
              class="primary-nav-link"
              :to="{ path: '/observations/new' }"
            >
              Add new
            </RouterLink>
          </li>
          <li>
            <RouterLink
              class="primary-nav-link"
              :to="{ path: '/observations' }"
            >
              See all
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "CNav",
};
</script>

<style lang="scss" scoped>
@use "/src/styles/variables";

/*@start nav*/
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
}
/*@end nav*/

/*@start nav-branding*/
.nav-branding {
  display: flex;
  flex-direction: row;
  gap: variables.$default-padding;
}

.nav-branding-typography {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: variables.$letter-spacing;
}

.nav-branding-logo {
  display: inline-block;
  height: 2.5rem;
  transform: translateY(-10px);
  width: auto;
}

//.nav-branding:hover {
//  do some fun animation
//}
/*@end nav-branding*/

/*@start primary nav list + li + a*/
.primary-nav-list {
  margin: 0;
  text-align: right;
}

.primary-nav-list > li {
  display: inline-block;
}

.primary-nav-list > li:not(:last-child) {
  padding-right: variables.$default-padding;
}

.primary-nav-list > li:not(:last-child):after {
  content: "|";
  padding-left: variables.$default-padding;
}

.primary-nav-link {
  font-weight: 100;
}
/*@end primary nav list + li*/
</style>
