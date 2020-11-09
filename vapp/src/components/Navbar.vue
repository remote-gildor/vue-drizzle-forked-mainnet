<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">

    <router-link to="/">
      <b-navbar-brand href="/">DaiBuyer dApp</b-navbar-brand>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link to="/buy"><b-nav-item href="/buy">Buy DAI</b-nav-item></router-link>
        <router-link to="/profile"><b-nav-item href="/profile">Profile</b-nav-item></router-link>
      </b-navbar-nav>
    </b-collapse>
    
  </b-navbar>
</template>

<script>
export default {
 name: "Navbar"
}
</script>

<style>

</style>