<template>
  <div class="content px-2">
    <div class="columns">
      <div class="column is-6">
        <div class="box has-text-white has-background-primary">
          <article class="columns has-text-centered-mobile">
            <div class="column is-full-mobile is-one-quarter-tablet">
              <figure class="image is-128x128">
                <img src="../assets/bmi.svg" alt="BMI Calculator" />
              </figure>
            </div>
            <div class="column is-full-mobile is-three-quarters-tablet">
              <div class="content">
                <h1 class="title is-size-4 has-text-white">{{$t('home.bmi_title')}}</h1>
                <p>{{$t('home.bmi_desc')}}</p>
                <router-link :to="'/'+this.$store.state.locale+'/bmi-check'"  class="button is-primary is-inverted is-outlined is-rounded">{{$t('home.label_button_goto')}}</router-link>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="column is-6">
        <div class="box has-text-white has-background-info">
          <article class="columns has-text-centered-mobile">
            <div class="column is-full-mobile is-one-quarter-tablet">
              <figure class="image is-128x128">
                <img src="../assets/intestinal.svg" alt="Intestinal Aging" />
              </figure>
            </div>
            <div class="column is-full-mobile is-three-quarters-tablet">
              <div class="content">
                <h1 class="title is-size-4 has-text-white">{{$t('home.intestinal_title')}}</h1>
                <p>{{$t('home.intestinal_desc')}}</p>
                <router-link :to="'/'+this.$store.state.locale+'/intestinal-age-check'"  class="button is-primary is-inverted is-outlined is-rounded">{{$t('home.label_button_goto')}}</router-link>
              </div>
            </div>
          </article>
        </div>
      </div>
      </div>
      <div class="columns">
        <div class="column is-6">
        <div class="box has-background-danger-light">
          <article class="columns has-text-centered-mobile">
            <div class="column is-full-mobile is-one-quarter-tablet">
              <figure class="image is-128x128 has-text-centered-mobile">
                <img src="../assets/pasi.png" alt="Psoriasis Pasi" />
              </figure>
            </div>
            <div class="column is-full-mobile is-three-quarters-tablet">
              <div class="content">
                <h1 class="title is-size-4">{{$t('home.pasi_title')}}</h1>
                <p>{{$t('home.pasi_desc')}}</p>
                <router-link :to="'/'+this.$store.state.locale+'/pasi-check'"  class="button is-inverted has-background-danger-light is-outlined is-rounded">{{$t('home.label_button_goto')}}</router-link>
              </div>
            </div>
          </article>
      </div>
      </div>
      <div class="column is-6">
        <div class="box">
          <article class="columns has-text-centered-mobile">
            <div class="column is-full-mobile is-one-quarter-tablet">
              <figure class="image is-128x128 has-text-centered-mobile">
                <img src="../assets/shop.svg" alt="Estore" />
              </figure>
            </div>
            <div class="column is-full-mobile is-three-quarters-tablet">
              <div class="content">
                <h1 class="title is-size-4">{{$t('home.estore_title')}}</h1>
                <p>{{$t('home.estore_desc')}}</p>
                <a href="https://myhealthdriver.com/estore/" target="_blank" ref="noopener noreferrer" class="button is-outlined is-rounded">
                {{$t('home.label_button_external')}} eStore<b-icon
                icon="launch ml-2"
                size="is-small"></b-icon></a>
              </div>
            </div>
          </article>
      </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.image{
  display: inline-block;
  margin: 0 auto;
}
</style>
<script>
export default {
  // metaInfo () {
  //   return {
  //     title: this.$t('navigation.menu_title_home') + ' | MHD Healthtool',
  //     meta: [
  //       {
  //         vmid: 'og:title',
  //         name: 'og:title',
  //         content: this.$t('navigation.menu_title_home')
  //       },
  //       {
  //         vmid: 'description',
  //         name: 'description',
  //         content: this.$t('meta.meta_description')
  //       },
  //       {
  //         vmid: 'og:description',
  //         name: 'og:description',
  //         content: this.$t('meta.meta_description')
  //       },
  //       {
  //         vmid: 'keywords',
  //         name: 'keywords',
  //         content: this.$t('meta.meta_keywords_home')
  //       },
  //       {
  //         vmid: 'og:image',
  //         name: 'og:image',
  //         content: 'https://myhealthdriver.com/healthtool/img/ht_cover.jpg'
  //       },
  //       {
  //         vmid: 'og:type',
  //         name: 'og:type',
  //         content: 'website'
  //       },
  //       {
  //         vmid: 'og:url',
  //         name: 'og:url',
  //         content: 'https://myhealthdriver.com/healthtool'
  //       }
  //     ]
  //   }
  // }
}
</script>
