<template lang="pug">
  div(id="app")
    nav.navbar.navbar-light.bg-light
      .container
        a.navbar-brand(href='#/')
          img.d-inline-block.align-top(src='/assets/brand/bootstrap-solid.svg', width='30', height='30', alt='')
          | FlightNotifications
    router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    /* font-family: 'Open Sans', Helvetica, Arial, sans-serif; */
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100%;
  }

  body {
    background-color: #efeef1;
  }

  .navbar {
    background: #fff !important;
    height: 70px;
  }

  .navbar a {
    font-family: 'Dosis', Helvetica, Arial,sans-serif;
    font-weight: bold;
    text-transform: uppercase;
  }
</style>
