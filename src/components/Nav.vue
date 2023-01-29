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
        <input type="checkbox" id="menu-checkbox" class="menu-checkbox" />
        <label for="menu-checkbox" class="menu-toggle" id="menu-toggle">
          <span class="top-line"></span>
          <span class="middle-line"></span>
          <span class="bottom-line"></span>
        </label>
        <ul class="primary-nav-list" id="nav-list">
          <li v-for="link in links" :key="link.title">
<!--        @TODO: active class-->
            <RouterLink class="primary-nav-link" :to="link.path">
              {{ link.title }}
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
  data() {
    return {
      links: [
        { title: "Add new", path: "/observations/new" },
        { title: "See all", path: "/observations" },
        { title: "About momo", path: "/about" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "/src/styles/variables";
$nav-height: 60px;

/*@start nav*/
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $nav-height;
}
/*@end nav*/

/*@start nav-branding*/
.nav-branding {
  display: flex;
  flex-direction: row;
  gap: variables.$default-padding;
}
/*@end nav-branding*/

/*@start nav branding typography*/
.nav-branding-typography {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: variables.$letter-spacing;
}
/*@end nav branding typography*/

/*@start nav branding logo*/
.nav-branding-logo {
  display: inline-block;
  height: 2.5rem;
  transform: translateY(-10px);
  width: auto;
}
/*@end nav branding logo*/

/*@start primary nav list*/
.primary-nav-list {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -100%;
  width: 100vw;
  height: 100vh;
  transition: 150ms ease-in-out;
  background-color: var(--tertiary-color);
  text-align: left;
  margin-top: $nav-height;
}

.menu-checkbox:checked ~ .primary-nav-list {
  left: 0;
}

@media only screen and (min-width: variables.$break-point) {
  .primary-nav-list {
    height: auto;
    width: auto;
    left: auto;
    right: variables.$default-padding;
    top: variables.$default-padding;
    margin-top: 0;
    background-color: transparent;
  }
}
/*@end primary nav list*/

/*@start primary nav list li*/
.primary-nav-list > li:not(:last-child) {
  margin-bottom: 1.5rem;
}

.primary-nav-list > li:first-child {
  margin-top: $nav-height;
}

@media only screen and (min-width: variables.$break-point) {
  .primary-nav-list > li {
    display: inline-block;
  }

  .primary-nav-list > li:first-child {
    margin-top: 0;
  }

  .primary-nav-list > li:not(:last-child) {
    padding-right: variables.$default-padding;
  }

  .primary-nav-list > li:not(:last-child):after {
    content: "|";
    padding-left: variables.$default-padding;
  }
}
/*@end primary nav list li*/

/*@start primary nav link*/
.primary-nav-link {
  font-size: 1.5rem;
  padding-left: variables.$default-padding;
}

@media only screen and (min-width: variables.$break-point) {
  .primary-nav-link {
    font-size: 1rem;
    padding-left: 0;
    font-weight: 100;
  }
}
/*@end primary nav link*/

/*@start menu checkbox*/
// hide the actual input[type="checkbox"] element
.menu-checkbox {
  display: none;
}
/*@end menu checkbox*/

/* @start menu toggle */
.menu-toggle {
  display: block;
  width: 30px;
  height: 30px;
  position: absolute;
  top: variables.$default-padding;
  right: variables.$default-padding;
  cursor: pointer;
  z-index: 100;
}

// the lines that make up the hamburger
.menu-toggle > span {
  width: 30px;
  height: 2px;
  background: var(--primary-font-color);
  margin: 0 0 8px;
  display: block;
}

.top-line,
.bottom-line {
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transform-origin: 94% 6%;
  -ms-transform-origin: 94% 6%;
  transform-origin: 94% 6%;
  -webkit-transition: transform 400ms;
  -moz-transition: transform 400ms;
  -o-transition: transform 400ms;
  transition: transform 400ms;
}

// hide the collapsable menu checkbox and the custom menu-toggle at breakpoint
@media only screen and (min-width: variables.$break-point) {
  .menu-checkbox,
  .menu-toggle {
    display: none;
  }
}
/* @end menu toggle */

/*@start menu toggle on check/uncheck transform*/
// rotate the top and bottom line to form a 'X'
.menu-checkbox:checked + .menu-toggle .top-line {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: 94% 6%;
  -ms-transform-origin: 94% 6%;
  transform-origin: 94% 6%;
}

// fade out the middle line
.middle-line {
  opacity: 1;
  transition: 0.5s;
}

.menu-checkbox:checked + .menu-toggle .middle-line {
  opacity: 0;
  transition: 200ms;
}

.menu-checkbox:checked + .menu-toggle .bottom-line {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: 100%;
  -ms-transform-origin: 100%;
  transform-origin: 100%;
}
/*@end nav toggle on check/uncheck transform*/
</style>
