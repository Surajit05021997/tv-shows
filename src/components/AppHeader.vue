<template>
  <div class="app-header">
    <div class="nav">
      <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
        <router-link id="brand" to="/"><h4><b>TV MAZE</b></h4></router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link id="homeRoute" to="/">Home</router-link>
            <router-link id="searchRoute" to="/search">Search</router-link>
            <router-link id="aboutRoute" to="/about">About</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
#brand {
  color: rgb(221, 25, 25);
}
#brand h4 {
  margin: 0px;
}
a {
  color: grey;
  margin: 4px;
}
a:hover {
  color: lightgrey;
  text-decoration: none;
}
.router-link-exact-active {
  color: white;
}
</style>
