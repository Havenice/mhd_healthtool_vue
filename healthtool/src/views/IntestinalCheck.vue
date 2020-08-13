<template>
<div class="px-2">
  <h1 class="title has-text-primary is-size-4">{{$t('intestinal.intestinal_title')}}</h1>
  <p class="subtitle has-text-grey-dark is-size-6">{{$t('intestinal.intestinal_desc')}}</p>
      <iframe :src="url" frameborder="0" width="100%" id="morinagaHTML" ref="iframeMori" v-if="windowWidth > 1080"></iframe>
      <div class="unsupported_area px-4 py-4 mt-4 has-background-warning" v-if="windowWidth < 1080">
      <h2 class="title is-size-4">
        <b-icon icon="alert" class="mr-4" size="is-medium"></b-icon>{{$t('intestinal.label_not_supported_title')}}</h2>
      <p>{{$t('intestinal.label_not_supported_desc')}}</p>
    </div>
      <legend class="mb-4 has-text-centered">
        {{$t('intestinal.label_source')}} : <a :href="url" target="_blank" ref="noreferrer noopener">{{url}} <b-icon
                icon="launch ml-2"
                size="is-small"></b-icon></a>
      </legend>
       <recommended-product name="Probiotic" id="51" />
</div>
</template>
<script>
import RecommendedProduct from '../components/RecommendedProduct'

export default {
  components: { RecommendedProduct },
  metaInfo () {
    return {
      title: this.$t('navigation.menu_title_intestinal'),
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.$t('meta.meta_keywords_intestinal')
      },
      {
        vmid: 'keywords',
        name: 'keywords',
        content: this.$t('meta.meta_keywords_intestinal')
      }]
    }
  },
  data () {
    return {
      windowWidth: window.innerWidth,
      url: 'https://www.bb536.jp/english/check/'
    }
  },
  methods: {
    showContents () {
    }
  },
  mounted () {
    this.showContents()
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>
<style scoped>
    #morinagaHTML{
        min-height: 100vh;
        border-radius: 1rem;
    }
    .unsupported_area{
      border-radius: 1rem;
    }
</style>
<style>
  iframe #header{
      display: none;
    }
</style>
