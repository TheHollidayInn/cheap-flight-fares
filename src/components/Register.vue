<template lang="pug">
  .content.col-12.col-md-6.offset-md-3
    form
      h2.text-center Register
      h5.text-center(v-if='subscribing') Let's get you an account first!
      div.text-center
        a(href='#/', @click.prevent='loginSubscribe()') Login Instead
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
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
      loading: false
    }
  },
  computed: {
    subscribing () {
      return this.$route.query.subscribing
    }
  },
  methods: {
    loginSubscribe () {
      this.$router.push({name: 'Login', query: {subscribing: true}})
    },
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
