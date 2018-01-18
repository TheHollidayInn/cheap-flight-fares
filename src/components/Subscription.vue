<template lang="pug">
  .content.col-12.col-md-6.offset-md-3
    h2 Subscribe
    h5 Powered by Stripe
    p When you subscribe you will receive
    ul
      li Unlimited departure cities
      li Unlimited destinations
      li Support for travel tech :D
    stripe-checkout(stripe-key='pk_test_H2UTCXDnMnLk4fenwedAlFty', product='product', on-success='broadcast')
</template>

<script>
import axios from 'axios'
import { Bus } from 'vue-stripe'

export default {
  name: 'Subscription',
  data () {
    return {
      load: true,
      product: {
        name: '1 Year Subscription to Flight Fares',
        description: '1 Year Subscription to Flight Fares',
        amount: 60000
      }
    }
  },
  mounted () {
    Bus.$on('vue-stripe.success', async payload => {
      this.loading = true
      try {
        const response = await axios.post('https://flightfares.herokuapp.com/api/purchase-subscription', {
          email: payload.email,
          id: payload.token
        })
        this.$store.commit('setUserStripe', response.data.charge.id)
        this.$router.push({name: 'HelloWorld'})
      } catch (e) {
        alert(e.response.data.error)
        this.loading = false
      }
    })
  },
  destroyed () {
    Bus.$off('vue-stripe.success')
  }
}
</script>

<style scoped>
  .content {
    margin-top: 4em;
  }
</style>
