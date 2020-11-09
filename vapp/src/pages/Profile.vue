<template>
  <b-container class="mt-3">
      <b-row class="mt-4">
          <b-col md="4" offset-md="4" class="text-center">
              <h1>Profile</h1>

              <b-card class="mb-2">
                  <Gravatar class="img-fluid" :email="activeAccount" default-img="robohash" :size=200 />

                  <b-card-text class="mt-2">
                      <p>{{ activeAccount }}</p>
                      <p><strong>Your ETH balance:</strong> {{ Number(getEthBalance).toFixed(4) }} ETH</p>
                      <p><strong>Your DAI balance:</strong> {{ Number(getDaiBalance).toFixed(2) }} DAI</p>
                  </b-card-text>

                  <router-link to="/buy">
                      <b-button variant="primary" href="/buy">Buy DAI!</b-button>
                  </router-link>
              </b-card>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Gravatar from "vue-gravatar";

export default {
  name: "Account",
  components: {
      Gravatar
  },
  computed: {
      ...mapGetters("accounts", ["activeAccount", "activeBalance"]),
      ...mapGetters("drizzle", ["isDrizzleInitialized", "drizzleInstance"]),
      ...mapGetters("profile", ["getDaiBalance"]),
      userAccount() {
          return this.activeAccount
      },
      getEthBalance() {
          return this.drizzleInstance.web3.utils.fromWei(this.activeBalance, "ether");
      }
  },
  created() {
      this.$store.dispatch("profile/fetchDaiBalance");
  },
  methods: {
      ...mapActions("profile", ["fetchDaiBalance"])
  }
}
</script>

<style>

</style>