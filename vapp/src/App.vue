<template>
  <div v-if="isDrizzleInitialized" id="app">
    <Navbar />
    <router-view />
  </div>

  <div v-else>Loading...</div>
</template>

<script>
import Navbar from "./components/Navbar";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Navbar
  },
  computed: mapGetters("drizzle", ["isDrizzleInitialized"])
}
</script>

<style>
</style>
