<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">

    <router-link to="/">
      <b-navbar-brand href="/">My dApp</b-navbar-brand>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link to="/stats"><b-nav-item href="/stats">Stats</b-nav-item></router-link>
        <router-link to="/account"><b-nav-item href="/account">Account</b-nav-item></router-link>
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