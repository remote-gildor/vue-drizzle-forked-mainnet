<template>
  <b-container class="text-center">
    <h1 class="mt-3">Buy some DAI!</h1>

    <b-row class="mt-4">
      <b-col md="4" offset-md="4">
        <b-card title="Buy DAI" sub-title="Enter the amount of ETH">
          <b-form @submit.prevent="onSubmit">
            <b-form-group id="input-group-1" label-for="ether-field">

              <b-input-group append="ETH" class="mt-4 mb-2">
                <b-form-input 
                  id="ether-field" 
                  v-model="ethValue" 
                  type="text" 
                  required 
                  placeholder="0.0"
                  trim
                >
                </b-form-input>
              </b-input-group>
              <b-form-text id="ether-field-feedback">
                <small>Max: {{ Number(getEthBalance).toFixed(4) }} ETH</small>
              </b-form-text>

              <b-button class="mt-2" type="submit" variant="primary">Submit</b-button>
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Buy",
  computed: {
    ...mapGetters("accounts", ["activeAccount", "activeBalance"]),
    ...mapGetters("drizzle", ["isDrizzleInitialized", "drizzleInstance"]),
    getEthBalance() {
        return this.drizzleInstance.web3.utils.fromWei(this.activeBalance, "ether");
    }
  },
  data() {
    return {
      ethValue: "1"
    }
  },
  methods: {
    onSubmit() {
      let sender = this.activeAccount;
      let recipient = this.drizzleInstance.contracts["DaiBuyer"].address;
      let valueWei = this.drizzleInstance.web3.utils.toWei(this.ethValue, "ether");

      let component = this;

      this.drizzleInstance.web3.eth.sendTransaction({
          from: sender,
          to: recipient,
          value: valueWei
      }, function(error, hash){
        window.console.log("The transaction has been sent. Please wait for the block confirmation.");

        // create a waiting toast
        let waitingToast = component.$toasted.show('Waiting for transaction to complete...', {
          type: 'info',
          duration: null,
          theme: "bubble",
          position: "top-center"
        });

        if (error) {
          waitingToast.goAway(0); // remove the waiting toast

          // create an error toast
          component.$toasted.show('Your transaction has failed. Please try again, perhaps with a higher gas limit.', {
            type: 'error',
            duration: 9000,
            theme: "bubble",
            position: "top-center"
          });
        }

        if (hash) {
          waitingToast.goAway(0); // remove the waiting toast
        }
      });
    }
  }
}
</script>

<style>

</style>