<template>
  <div class="container">
    <header-component class="header" />
    <router-view class="main"></router-view>
    <footer-component class="footer" />
  </div>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  components: { HeaderComponent, FooterComponent },
  name: "App",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
div {
  box-sizing: border-box;
}

.container {
  display: grid;
  height: 95vh;
  grid-template-rows: 1fr 7fr 10px 1fr;
  grid-template-areas:
    "header header header"
    " main   main   main "
    "   .     .      .   "
    "footer footer footer";
}

.header {
  grid-area: header;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
  margin-top: auto;
}

@media screen and (min-height: 1000px) {
  .container {
    height: 95vh;
  }
}
</style>
