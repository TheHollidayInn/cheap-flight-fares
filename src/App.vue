<template lang="pug">
  div(id="app")
    nav.navbar.navbar-light.bg-light
      .container
        .col-9
          a.navbar-brand(href='#/')
            img.d-inline-block.align-top(src='/assets/brand/bootstrap-solid.svg', width='30', height='30', alt='')
            | FlightNotifications
        .col-3
          a(href='#/login', v-if='!isLoggedIn') Login
          a(href='#/register', v-if='!isLoggedIn') Register
          a.btn.btn-primary(href='#/account', v-if='isLoggedIn && hasSub') Account
          a.btn.btn-primary(href='#/subscribe', v-if='!hasSub') Subscribe
          a(href='/', v-if='isLoggedIn', @click.prevent='logout()') Logout
    router-view
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  async mounted () {
    try {
      const token = localStorage.getItem('token')
      if (!token) return
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      const response = await axios.get('https://flightfares.herokuapp.com/api/me')
      this.$store.commit('setUser', response.data.user)
    } catch (e) {

    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    isLoggedIn () {
      return Boolean(this.user._id)
    },
    hasSub () {
      return this.user && Boolean(this.user.stripeSubscriptionId)
    }
  },
  methods: {
    logout () {
      this.$store.commit('setUser', {})
      localStorage.setItem('token', '')
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style>
  #app {
    /* font-family: 'Open Sans', Helvetica, Arial, sans-serif; */
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    color: rgba(0,0,0,.9);
    margin-right: .5em;
    text-transform: uppercase;
  }

  a.btn.btn-primary {
    color: #fff;
  }
</style>
