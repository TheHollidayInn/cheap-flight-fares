<template lang="pug">
  .content.col-12.col-md-6.offset-md-3
    h2 You are currently subcribed!
    h5 Thank you :D
    button.btn.btn-danger(@click='unsubscribe()') Unsubscribe
</template>

<script>
import axios from 'axios'
import { Bus } from 'vue-stripe'

export default {
  name: 'Account',
  data () {
    return {
      loading: true,
    }
  },
  methods: {
    async unsubscribe () {
      if (!confirm('Are you sure you want to unsubscribe?')) return
      this.loading = true
      try {
        const response = await axios.post('http://flightfares.herokuapp.com/api/cancel-subscription')
        window.location.href = '/'
      } catch (e) {
        alert(e.response.data.error)
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
