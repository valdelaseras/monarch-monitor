<!--@TODO: automatically close menu on mobile after navigation action-->
<template>
  <nav class="nav theme-primary" role="navigation">
    <div class="column">
      <div class="content">
        <div class="nav-branding">
          <img
            role="img"
            aria-label="icon of a butterfly"
            src="/img/logo/butterfly.svg"
            class="nav-branding-logo"
            alt="icon of a butterfly"
          />
          <RouterLink class="nav-branding-typography" to="/" tabindex="0"
            >MoMo</RouterLink
          >
        </div>
      </div>
    </div>
    <div class="column">
      <div class="content">
        <input
          type="checkbox"
          id="menu-checkbox"
          class="menu-checkbox"
          tabindex="0"
        />
        <!--        @TODO: open menu on enter key-->
        <label
          for="menu-checkbox"
          class="menu-toggle"
          id="menu-toggle"
          tabindex="0"
        >
          <span class="top-line"></span>
          <span class="middle-line"></span>
          <span class="bottom-line"></span>
        </label>
        <ul class="primary-nav-list" id="nav-list" role="menu">
          <li v-for="link in links" :key="link.title" role="menuitem">
            <RouterLink
              tabindex="0"
              @click="onClick"
              class="primary-nav-link"
              :to="link.path"
            >
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
        { title: "New observation", path: "/observations/new" },
        { title: "Observations", path: "/observations" },
        { title: "About momo", path: "/about" },
      ],
    };
  },
  methods: {
    onClick() {
      // do something
    },
  },
};
</script>
