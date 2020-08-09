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
    <HealthtoolFooter/>
  </div>
</template>
<script>
import HealthtoolNavbar from './components/HealthtoolNavbar'
import HealthtoolFooter from './components/HealthtoolFooter'
import { mapState } from 'vuex'

export default {
  components: { HealthtoolNavbar, HealthtoolFooter },
  computed: mapState(['locale']),
  watch: {
    locale () {
      this.$router.replace({ params: { lang: this.locale } }).catch(() => {})
    }
  },
  mounted () {
    this.setDefaultLocale()
  },
  methods: {
    async accept () {
      this.showUpgradeUI = false
      await this.$workbox.messageSW({ type: 'SKIP_WAITING' })
    },
    setDefaultLocale () {
      // if (this.$route.params.lang !== 'en') {
      this.$root.$i18n.locale = this.$route.params.lang
      // }
    }
  }
}
</script>
<style>
  body{
    background:#f2f2f2;
    min-height: 600px;
    font-family: 'Lexend Deca', sans-serif !important;
  }
  #content{
    margin:2rem auto;
  }
</style>
<style lang="scss">
@import './assets/css/bulma.min.css';
@import "./assets/scss/_variables.scss";
</style>
