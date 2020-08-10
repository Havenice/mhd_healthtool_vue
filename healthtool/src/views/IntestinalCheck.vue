<template>
<div class="">
  <h1 class="title has-text-primary is-size-4">{{$t('intestinal.intestinal_title')}}</h1>
  <p class="subtitle has-text-grey-dark is-size-6">{{$t('intestinal.intestinal_desc')}}</p>
      <iframe :src="url" frameborder="0" width="100%" id="morinagaHTML" ref="iframeMori"></iframe>
       <recommended-product name="Probiotic" id="51" />
</div>
</template>
<script>
import RecommendedProduct from '../components/RecommendedProduct'

export default {
  components: { RecommendedProduct },
  data () {
    return {
      url: 'https://www.bb536.jp/english/check/#contents'
    }
  },
  methods: {
    showContents () {
    }
  },
  mounted () {
    this.showContents()
  }
}
</script>
<style scoped>
    #morinagaHTML{
        min-height: 100vh;
        border-radius: 1rem;
    }
</style>
<style>
  iframe #header{
      display: none;
    }
</style>
