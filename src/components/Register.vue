<template lang="pug">
  .content.col-12.col-md-6.offset-md-3
    form
      h2.text-center Register
      .form-group
        label Email
        input.form-control(type='email', v-model='email')
      .form-group
        label Password
        input.form-control(type='password', v-model='password')
      .form-group
        label Confirm Password
        input.form-control(type='password', v-model='passwordConfirm')
      button.btn.btn-primary(:disabled='loading || !this.email || !this.password || !this.passwordConfirm', @click.prevent='submit()') Register
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
      loading: false
    }
  },
  methods: {
    async submit () {
      if (this.password !== this.passwordConfirm) {
        alert('Passwords do not match')
        return
      }

      this.loading = true

      try {
        const response = await axios.post('https://flightfares.herokuapp.com/api/register', {
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
