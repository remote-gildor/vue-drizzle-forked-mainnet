<template>
  <section></section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters("drizzle", ["drizzleInstance"])
  },
  methods: {
    ...mapActions("profile", ["fetchDaiBalance"])
  },
  mounted() {
    const contractEventHandler = ({ contractName, eventName, data }) => {
      let display = `${contractName}(${eventName}) - ${data}`;

      if(eventName === 'Completed') {
        this.$store.dispatch("profile/fetchDaiBalance"); // update the user's DAI balance in vuex store
        display = "We've got you some DAI! :)";
      }

      const subOptions = {
        theme: "bubble",
        position: "top-center", 
        duration: 5000,
        type: "success"
      };

      this.$toasted.show(display, subOptions);
    };

    this.$drizzleEvents.$on('drizzle/contractEvent', payload => {
      contractEventHandler(payload);
    });
  }
}
</script>
