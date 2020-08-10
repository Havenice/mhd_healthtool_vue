<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="'/'+lang">
        <img src="https://myhealthdriver.com/images/logo.png" alt="MHD Logo" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="'/'+lang">{{$t('navigation.menu_title_home')}}</b-navbar-item>
      <b-navbar-item
        tag="router-link"
        :to="'/'+lang+'/intestinal-age-check'"
      >{{$t("navigation.menu_title_intestinal")}}</b-navbar-item>
      <b-navbar-item
        tag="router-link"
        :to="'/'+lang+'/bmi-check'"
      >{{$t("navigation.menu_title_bmi")}}</b-navbar-item>
      <b-navbar-item tag="router-link" :to="'/'+lang+'/about'">{{$t("navigation.menu_title_about")}}</b-navbar-item>
      <b-dropdown v-model="lang" aria-role="list" id="languageSelect">
        <button class="button" type="button" slot="trigger">
          <template>
            <span>{{$t('navigation.languages.title')}}</span>
          </template>
          <b-icon icon="menu-down"></b-icon>
        </button>
        <b-dropdown-item
          :value="lang"
          aria-role="listitem"
          v-for="(lang, i) in languageArray"
          :key="`lang${i}`"
        >
          <div class="media">
            <div class="media-content">
              <h3>
                <span v-if="lang === 'en'">{{$t('navigation.languages.title_en')}}</span>
                <span v-else-if="lang === 'zh'">{{$t('navigation.languages.title_cn')}}</span>
                ({{lang}})
              </h3>
            </div>
          </div>
        </b-dropdown-item>
      </b-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a
            class="button is-primary is-rounded"
            href="https://myhealthdriver.com/estore"
            target="blank"
            referrer="noopener noreferrer"
          >
            {{$t('navigation.estore_title')}}
            <svg
              class="v-center"
              id="estore"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </a>
          <a
            class="button is-info is-rounded"
            href="https://myhealthdriver.com"
            referrer="noopener noreferrer"
          >{{$t('navigation.homepage_title')}}</a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
import { languages } from '@/plugins/i18n'
export default {
  name: 'HealthtoolNavbar',
  data () {
    return {
      languageArray: languages
    }
  },
  computed: {
    lang: {
      get: function () {
        return this.$store.state.locale
      },
      set: function (newVal) {
        this.$store.dispatch('changeLocale', newVal)
      }
    }
  }
}
</script>
<style lang="scss">
@import "../assets/scss/_variables.scss";
#languageSelect {
  align-items: center;
  .button {
    border: none;
    font-family: 'Lexend Deca';
  }
}
.country-icon {
  vertical-align: middle;
  margin-right: 0.5rem;
}
a.navbar-item.is-active.router-link-active {
  color: $primary;
}
nav.navbar {
  padding: 0.8rem 0;
  border-bottom: #e1e1e1 solid 1px;
}
#estore {
  margin-left: 0.5rem;
}
</style>
