<template lang="pug">
.row.main-banner
  .overlay
  .col-12.col-md-3.offset-2.message
    h1 Welcome
    h5 Get alerts for cheap flights across the world
    a.btn.btn-primary(href='#/signup') Get Started
  .col-12.col-md-6.text-center.cards
    boarding-pass
</template>

<script>
import BoardingPass from './BoardingPass'

export default {
  components: {
    BoardingPass
  }
}
</script>

<style scoped>
  h1, h5 {
    color: #7f7f81;
  }

  .message {
    margin-top: 2em;
  }

  .cards {
    margin-top: -8em;
  }

  .btn-primary {
    background-image: linear-gradient(-180deg,#fd7054 0,#ff3b6a 100%);
    border: none;
    box-shadow: 0 7px 29px 0 rgba(254,89,105,.3);
    margin-right: 10px;
    color: #fff;
    padding: 1em;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    outline: 0;
    transition: all .25s ease;
  }

  .main-banner {
    position: relative;
    /* background: url('http://eskipaper.com/images/awesome-berlin-wallpaper-1.jpg'); */
    background-size: cover;
    background-position: center;
    color: #fff;
    padding-top: 8em;
    padding-bottom: 8em;
  }

  .overlay {
    position: absolute;
    background: #fff;
    top:0;
    left:0;
    width:100%;
    height:100%;
    opacity: .5;
  }
</style>
