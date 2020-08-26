<template>
  <div id="app">
  <HealthtoolNavbar/>
  <div class="container" id="content">
    <transition name="fade" mode="out-in">
    <router-view/>
    </transition>
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
  metaInfo () {
    return {
      title: this.$t('navigation.menu_title_home') + ' | MHD Healthtool',
      meta: [
        {
          vmid: 'og:title',
          name: 'og:title',
          content: this.$t('navigation.menu_title_home')
        },
        {
          vmid: 'description',
          name: 'description',
          content: this.$t('meta.meta_description')
        },
        {
          vmid: 'og:description',
          name: 'og:description',
          content: this.$t('meta.meta_description')
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: this.$t('meta.meta_keywords_home')
        },
        {
          vmid: 'og:image',
          name: 'og:image',
          content: 'https://myhealthdriver.com/healthtool/img/ht_cover.jpg'
        },
        {
          vmid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          vmid: 'og:url',
          name: 'og:url',
          content: 'https://myhealthdriver.com/healthtool'
        }
      ]
    }
  },
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
