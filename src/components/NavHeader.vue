<template>
  <div id="app">
  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">Darts App</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item href="#" disabled>History</b-nav-item>

        <b-nav-item-dropdown text="501" right>
          <b-dropdown-item href="#">1 Speler</b-dropdown-item>
          <b-dropdown-item><router-link to="/vijf2">2 Spelers</router-link></b-dropdown-item>
          <b-dropdown-item href="#">3 Spelers</b-dropdown-item>
          <b-dropdown-item href="#">4 Spelers</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Tactics" right>
          <b-dropdown-item href="#">1 Speler</b-dropdown-item>
          <b-dropdown-item href="#">2 Spelers</b-dropdown-item>
          <b-dropdown-item href="#">3 Spelers</b-dropdown-item>
          <b-dropdown-item href="#">4 Spelers</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
</b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
.navbar {
  height:4vh;
}
</style>
