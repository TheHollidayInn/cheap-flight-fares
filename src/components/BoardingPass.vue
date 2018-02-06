<template lang="pug">
.cards_wrapper
  .card
    .card_heading
      h2 Boarding Pass
    .card_thumbnail
      img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/553328/Egypt.jpg')
    .card_trip
      .trip_from
        h1 EGY
        h2 Egypt
      .trip_icon
        img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/553328/From.png')
      .trip_to
        h1 MIA
        h2 Miami
    .card_divider
      .divider_left.divider_hole
      .divider
      .divider_right.divider_hole
    .card_seating
      .seating_passenger
        h2 Passenger
        h3 Malik Shiakh
      .seating_seat
        h2 Seat
        h3 1A
    .card_details
      .details_flight
        h2 Flight
        h3 VX25
      .details_date
        h2 Depart
        h3 31 Jul, 16
      .details_time
        h2 Depart
        h3 06.25 am
  .card
    .card_heading
      h2 Boarding Pass
    .card_thumbnail
      img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/553328/Miami.jpg')
    .card_trip
      .trip_from
        h1 EGY
        h2 Egypt
      .trip_icon
        img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/553328/To.png')
      .trip_to
        h1 MIA
        h2 Miami
    .card_divider
      .divider_left.divider_hole
      .divider
      .divider_right.divider_hole
    .card_seating
      .seating_passenger
        h2 Passenger
        h3 Malik Shiakh
      .seating_seat
        h2 Seat
        h3 7b
    .card_details
      .details_flight
        h2 Flight
        h3 ZE42
      .details_date
        h2 Depart
        h3 2 aug, 16
      .details_time
        h2 Depart
        h3 07.30 pm
</template>

<script>

export default {
  name: 'BoardingPass',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: #c5d8e6;
  font-family: helvetica, arial;
  text-transform: uppercase;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

h1 {
  color: #c5d8e6;
  font-weight: 200;
  font-size: 2.1em;
  margin: 0px;
}

h2 {
  color: #c5d8e6;
  opacity: .5;
  font-weight: 100;
  font-size: .9em;
  margin: 0px;
}

h3 {
  color: #c5d8e6;
  opacity: .8;
  font-weight: 100;
  font-size: .9em;
  margin: 0px;
}

.cards_wrapper {
  text-align: center;
  padding-top: 20px;
}

.card {
  width: 320px;
  border-radius: 20px;
  background: #344451;
  display: inline-block;
  margin: 10px;
}
.card_heading {
  padding-top: 25px;
}
.card_heading h2 {
  text-align: center;
}
.card_thumbnail {
  min-height: 150px;
  margin-top: -15px;
}
.card_thumbnail img {
  width: 100%;
  height: auto;
}
.card_trip {
  text-align: center;
  width: 85%;
  margin: 30px auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.card_trip div {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.card_trip div h1 {
  margin: 0px;
}
.card_trip div h2 {
  margin: 0px;
  letter-spacing: 2px;
}
.card_trip div.trip_from {
  text-align: left;
  width: 35%;
}
.card_trip div.trip_from h2 {
  padding-left: 2px;
}
.card_trip div.trip_icon {
  width: 30%;
}
.card_trip div.trip_icon img {
  padding-top: 20px;
  opacity: 1;
  width: 25px;
}
.card_trip div.trip_to {
  text-align: right;
  width: 35%;
}
.card_trip div.trip_to h2 {
  padding-right: 3px;
}
.card_divider {
  position: relative;
  width: 100%;
}
.card_divider .divider_left {
  left: -15px;
}
.card_divider .divider_hole {
  position: absolute;
  top: -12px;
  padding: 0px;
  height: 25px;
  width: 25px;
  border-radius: 100%;
  background: #c5d8e6;
}
.card_divider .divider {
  width: 85%;
  margin: auto;
  height: 2px;
  background: -webkit-gradient(linear, left top, right top, color-stop(50%, #c5d8e6), color-stop(50%, transparent));
  background: linear-gradient(to right, #c5d8e6 50%, transparent 50%);
  background-size: 10px 8px, 100% 2px;
  opacity: .2;
}
.card_divider .divider_right {
  right: -15px;
}
.card_seating {
  width: 85%;
  margin: 30px auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.card_seating div {
  display: inline-block;
  width: 50%;
}
.card_seating div.seating_passenger {
  text-align: left;
}
.card_seating div.seating_seat {
  text-align: right;
}
.card_details {
  width: 85%;
  margin: 30px auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-bottom: 30px;
}
.card_details div {
  display: inline-block;
  width: 33%;
}
.card_details div.details_flight {
  text-align: left;
}
.card_details div.details_date {
  text-align: center;
}
.card_details div.details_time {
  text-align: right;
}
</style>
