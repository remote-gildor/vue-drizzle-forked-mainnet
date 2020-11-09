<template>
  <b-jumbotron header="Welcome to DaiBuyer!" lead="Buy some DAI through a smart contract" class="text-center">
    <router-link to="/buy">
      <b-button variant="primary" href="/buy">Buy DAI</b-button>
    </router-link>
  </b-jumbotron>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style>

</style>