<template lang="pug">
  .content.col-12.col-md-6.offset-md-3
    h2 You are currently subcribed!
    h5 Thank you :D
    button.btn.btn-danger(@click='unsubscribe()') Unsubscribe
</template>

<script>
import axios from 'axios'

export default {
  name: 'Account',
  data () {
    return {
      loading: true
    }
  },
  methods: {
    async unsubscribe () {
      if (!confirm('Are you sure you want to unsubscribe?')) return
      this.loading = true
      try {
        await axios.post('https://flightfares.herokuapp.com/api/cancel-subscription')
        this.$store.commit('setUserStripe', '')
        this.$router.push({name: 'Home'})
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
