<template lang="pug">
  .content.col-12.col-md-6.offset-md-3
    form
      h2.text-center Login
      h5.text-center(v-if='subscribing') Login, then we will set you up with a subscription :D
      .form-group
        label Email
        input.form-control(type='email', v-model='email')
      .form-group
        label Password
        input.form-control(type='password', v-model='password')
      button.btn.btn-primary(:disabled='loading || !this.email || !this.password', @click.prevent='login()') Login
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  computed: {
    subscribing () {
      return this.$route.query.subscribing
    }
  },
  methods: {
    async login () {
      this.loading = true
      try {
        const response = await axios.post('https://flightfares.herokuapp.com/api/login', {
          email: this.email,
          password: this.password
        })
        await this.$store.dispatch('setToken', {
          token: response.data.token
        })

        if (this.subscribing) {
          this.$router.push({name: 'Subscription'})
          return
        }

        this.$router.push({name: 'Home'})
      } catch (e) {
        alert(e.response.data.err)
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
  .content {
    margin-top: 4em;
  }
</style>
