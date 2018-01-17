<template lang="pug">
  .content.col-12.col-md-6.offset-md-3
    form
      h2.text-center Login
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
  methods: {
    async login () {
      this.loading = true
      try {
        const response = await axios.post('https://flightfares.herokuapp.com/api/login', {
          email: this.email,
          password: this.password
        })
        localStorage.setItem('token', response.data.token)
        window.location.href = '/'
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
