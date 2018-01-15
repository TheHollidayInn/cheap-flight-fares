<template lang="pug">
.row.main-banner
  .overlay
  .col-12
    h1 Welcome
    h5 Get alerts for cheap flights across the world
    a.btn.btn-primary(href='#/signup') Signup
</template>

<style scoped>
  .main-banner {
    position: relative;
    background: url('http://eskipaper.com/images/awesome-berlin-wallpaper-1.jpg');
    background-size: cover;
    background-position: center;
    color: #fff;
    padding-top: 8em;
    padding-bottom: 8em;
  }

  .overlay {
    position: absolute;
    background: #36454F;
    top:0;
    left:0;
    width:100%;
    height:100%;
    opacity: .5;
  }
</style>
