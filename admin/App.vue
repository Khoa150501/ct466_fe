<style scoped>

</style>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <AppFooter /> 
  </footer>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

