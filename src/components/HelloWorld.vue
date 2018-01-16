<template lang="pug">
#container
  #email-pane.pane.col-12.col-md-6.offset-md-3(v-show='activePane === "email-pane"', key='email-pane')
    h2 What email would you like us to send notifications to?
    .row.content
      .col-12.col-md-6.offset-md-3
        .form-group
          input#exampleInputEmail1.form-control(type='email', aria-describedby='emailHelp', placeholder='Enter email', v-model='email')
    .row
      .col-12.col-md-6.offset-md-3
        button.btn.btn-primary(type='submit', @click='activePane = "leave-pane"', :disabled='!email') Next
  #leave-pane.pane.col-12.col-md-6.offset-md-3(v-show='activePane === "leave-pane"', key='leave-pane')
    h2 Where do you want to leave from? (Select Multiple for the Best Results)
    .col-12.col-md-6.offset-md-3
      .form-group
        input.form-control(type='text', placeholder='Search Airports', v-model='airportSearch')
    .row
      .col-12.col-md-6.offset-md-3
        button.btn.btn-secondary(type='submit', @click='activePane = "email-pane"') Prev
        button.btn.btn-primary(type='submit', @click='activePane = "to-pane"', :disabled='departureAirports.length === 0') Next
    .content
      .row(v-for='(airports, key) in departureAirportOptions')
        h5.col-12 {{key}}
        .col-3.form-check-wrapper(v-for='(departureOption, index) in airports')
          .form-check(:class="{active: departureAirports.indexOf(departureOption.faa) !== -1}", @click='toggleDepartureSelection(departureOption.faa)')
            label.form-check-label
              .form-check-input(type='checkbox', :value='departureOption.faa')
              | {{departureOption.airport}}
  #to-pane.col-12.col-md-6.offset-md-3(v-show='activePane === "to-pane"', key='to-pane')
    h2 Where would you live to travel to?
    .row.content
      .col-3.form-check-wrapper(v-for='(destinationOption, index) in destinationCitiesOptions')
        .form-check(:class="{active: destinationCities.indexOf(destinationOption.key+index) !== -1}", @click='toggleDestinationSelection(destinationOption.key+index)')
          label.form-check-label
            .form-check-input(type='checkbox', :value='destinationOption.key+index')
            | {{destinationOption.label}}
    button.btn.btn-secondary(type='submit', @click='activePane = "leave-pane"') Prev
    button.btn.btn-primary(type='submit', @click='activePane = "day-pane"', :disabled='destinationCities.length === 0') Next
  #day-pane.col-12.col-md-6.offset-md-3(v-show='activePane === "day-pane"', key='day-pane')
    h2 Select the date ranges you would like to travel for
    .row.content
      .col-3.form-check-wrapper(v-for='(travelTimeOption, index) in travelTimeOptions')
        .form-check(:class="{active: travelTimes.indexOf(travelTimeOption.key+index) !== -1}", @click='toggleTravelTimeSelection(travelTimeOption.key+index)')
          label.form-check-label
            .form-check-input(type='checkbox', :value='travelTimeOption.key+index')
            | {{travelTimeOption.label}}
    button.btn.btn-secondary(type='submit', @click='activePane = "to-pane"') Prev
    button.btn.btn-primary(type='submit', @click='done()', :disabled='travelTimes.length === 0') Done
  #done-pane.col-12.col-md-6.offset-md-3(v-show='activePane === "done-pane"', key='done-pane')
    h2 All done! You will receive notifications soon.
    p You can always reset your settings by visiting this page.
    button.btn.btn-primary(@click='activePane = "leave-pane"') Update
    br
    br
    br
    br
    h4 Would you like to subscribe to add more destinations to your notifications?
    button.btn.btn-primary Subscribe
</template>

<script>
import groupBy from 'lodash/groupBy'
import axios from 'axios'
import airports from '../content/airports'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activePane: 'email-pane',
      email: '',
      departureAirports: [],
      destinationCities: [],
      travelTimes: [],
      destinationCitiesOptions: [
        {
          key: 'paris',
          label: 'Paris'
        }
      ],
      travelTimeOptions: [
        {
          key: '1_3_days',
          label: '1-3 Days'
        }
      ],
      airportSearch: ''
    }
  },
  mounted () {
    this.email = localStorage.getItem('flighttravel-email') || ''
    this.departureAirports = JSON.parse(localStorage.getItem('flighttravel-departureAirports')) || []
    this.destinationCities = JSON.parse(localStorage.getItem('flighttravel-destinationCities')) || []
    this.travelTimes = JSON.parse(localStorage.getItem('flighttravel-travelTimes')) || []
  },
  computed: {
    departureAirportOptions () {
      const airportsGrouped = groupBy(airports, 'state')

      if (!this.airportSearch) return airportsGrouped

      const filteredAirports = airports.filter(airport => {
        const airportName = airport.airport.toLowerCase()
        const search = this.airportSearch.toLowerCase()
        return airportName.indexOf(search) !== -1
      })

      return groupBy(filteredAirports, 'state')
    }
  },
  methods: {
    toggleDepartureSelection (key) {
      console.log(this.departureAirports)
      const currentIndex = this.departureAirports.indexOf(key)
      if (currentIndex === -1) {
        this.departureAirports.push(key)
        return
      }
      this.departureAirports.splice(currentIndex, 1)
    },
    toggleDestinationSelection (key) {
      const currentIndex = this.destinationCities.indexOf(key)
      if (currentIndex === -1) {
        this.destinationCities.push(key)
        return
      }
      this.destinationCities.splice(currentIndex, 1)
    },
    toggleTravelTimeSelection (key) {
      const currentIndex = this.travelTimes.indexOf(key)
      if (currentIndex === -1) {
        this.travelTimes.push(key)
        return
      }
      this.travelTimes.splice(currentIndex, 1)
    },
    async done () {
      localStorage.setItem('flighttravel-email', this.email)
      localStorage.setItem('flighttravel-departureAirports', JSON.stringify(this.departureAirports))
      localStorage.setItem('flighttravel-destinationCities', JSON.stringify(this.destinationCities))
      localStorage.setItem('flighttravel-travelTimes', JSON.stringify(this.travelTimes))

      try {
        await axios.post('https://flightfares.herokuapp.com/api/subscribe', {
          email: this.email,
          departureAirports: this.departureAirports,
          destinationCities: this.destinationCities,
          travelTimes: this.travelTimes
        })
        this.activePane = 'done-pane'
      } catch (e) {
        alert(e.response.data.err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #container {
    margin-top: 4em;
  }

  h2, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

  .content {
    margin-top: 4em;
    margin-bottom: 4em;
  }

  .form-check, input {
    -webkit-box-shadow: 0 1px 3px rgba(77,71,81,.2);
    box-shadow: 0 1px 3px rgba(77,71,81,.2);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    padding: 1em;
    border-radius: 5px;
    background-color: #fff;
    color: #4d4751;
    cursor: pointer;
    font-size: 16px;
    line-height: normal;
    text-align: center;
    -webkit-transition: all .30s;
    -o-transition: all .30s;
    transition: all .30s;
    margin-bottom: 1em;
  }

  .form-check:hover, .form-check label:hover {
    cursor: pointer;
  }

  .form-check.active {
    background: #007bff;
    color: #fff;
  }

  .btn-primary, .btn-secondary {
    width: 6em;
    margin-left: 1em;
  }

  /* Transitoins */
</style>
