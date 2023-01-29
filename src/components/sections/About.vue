<template>
  <section class="section theme-primary" role="region">
    <div class="grid">
      <div class="column">
        <div class="column">
          <div class="content">
            <h2>What is MoMo?</h2>
          </div>
        </div>
        <div class="column">
          <div class="column two">
            <div class="content">
              <h3 class="font-semi-bold">Purpose</h3>
              <p class="font-semi-bold">
                MoMo is a Vue.js demo app for an application of the job kind. I
                did not have a Vue project at hand that I could share, so I did
                a little hackaton over the weekend instead.
              </p>
              <p>
                Due to time restrictions I had to prioritise some aspects over
                others, this is not a finished product. However, I hope this
                project gives you a bit of an indication of my code style and
                capabilities.
              </p>
              <p>
                Please find a list of the stack / tools I used in the footer
                below.
              </p>
            </div>
            <div class="content">
              <h4></h4>
              <ul class="btn-group">
                <li v-for="link in externalLinks" :key="link.title">
                  <a
                    tabindex="0"
                    class="btn btn-primary btn-compact"
                    target="_blank"
                    v-bind:href="link.href"
                  >
                    {{ link.title }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="column two">
            <div class="content">
              <h3>Okay, but what is it though?</h3>
              <p>
                Every spring and summer I have monarch eggs on my milkweed and
                religiously track everything that's happening on the plants. On
                a notepad...
              </p>
              <p>
                Manually writing these notes is kind of annoying and so I've
                wanted to create this simple app for a while now. Thus I took
                this opportunity to just get started on it :)
              </p>
            </div>
            <div class="content">
              <ul class="btn-group">
                <li v-for="link in routerLinks" :key="link.title">
                  <RouterLink
                    tabindex="0"
                    class="btn btn-primary btn-compact"
                    :to="link.path"
                  >
                    {{ link.title }}
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  data() {
    return {
      routerLinks: [
        { title: "New observation", path: "/observations/new" },
        { title: "Observations", path: "/observations" },
      ],
      externalLinks: [
        {
          title: "MoMo on GitHub",
          href: "https://github.com/valdelaseras/monarch-monitor",
        },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/in/robin-scholtes-488964115",
        },
      ],
    };
  },
};
</script>
