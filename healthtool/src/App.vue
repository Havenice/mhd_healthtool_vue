<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/bmi-check">BMI</router-link>
    </div> -->
  <HealthtoolNavbar/>
  <div class="container" id="content">
    <router-view/>
    </div>
  </div>
</template>
<script>
import HealthtoolNavbar from './components/HealthtoolNavbar'
export default {
  components: { HealthtoolNavbar }
}
</script>
<style>
  body{
    background:#f2f2f2;
  }
  #content{
    margin-top:2rem;
  }
</style>
<style lang="scss">
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #ff9800;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
