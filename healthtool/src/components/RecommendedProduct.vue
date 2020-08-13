<template>
  <div id="recommendedProduct" class="box" :class="{'sperfect-background': this.id == 50, 'original-background': this.id == 54, 'probiotic-background': this.id == 51,
  'psoriasis-pack-background': this.id == 64}">
    <div class="columns is-vcentered is-centered">
      <div class="column is-narrow">
        <img class="img-thumbnail" :src="`${publicPath}img/products/enerflex_probiotic.png`" alt="enerflex Probiotic" v-if="this.id == 51">
        <img class="img-thumbnail" :src="`${publicPath}img/products/enerflex_sperfect.png`" alt="enerflex S-Perfect" v-else-if="this.id == 50">
        <img class="img-thumbnail" :src="`${publicPath}img/products/psoriasis_pack.png`" alt="enerflex AFA, Complexion, Probiotic PSORIASIS Pack" v-else-if="this.id == 64">
      </div>
      <div class="column has-text-white">
        <h1 class="has-text-white is-size-6">{{$t('products.label_recommended')}}</h1>
        <p class="title has-text-white is-size-4"><i>EnerFlex® </i>
         <slot name="product-title">{{product_name}}</slot>
        </p>
        <p v-if="!this.hideConsumption" class="subtitle has-text-light is-size-5">{{$t('products.label_consumption')}} : {{$t('products.daily_unit')}} 2 {{$t('products.sachet_unit')}} </p>
        <slot name="desc"></slot>
        <p>
          <a
            class="button is-primary is-inverted is-outlined is-rounded"
            :href="product_url"
            target="_blank"
            referrer="noopener noreferrer"
          >{{$t('products.label_buynow')}} <b-icon
                icon="cart"
                size="is-small ml-2"></b-icon></a>
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/_variables.scss";
.sperfect-background{
  background-color: $sperfect;
}
.original-background{
  background-color: $primary;
}
.probiotic-background{
  background-color: $probiotic;
}
.img-thumbnail{
max-width: 10rem;
}
.psoriasis-pack-background{
  background-color: #607d8b;
}
</style>
<script>
export default {
  props: ['name', 'id', 'hideConsumption'],
  data () {
    return {
      publicPath: process.env.BASE_URL,

      product_id: this.id,
      product_name: this.name,
      product_url: 'https://myhealthdriver.com/estore/index.php?route=product/product&product_id=' + this.id
    }
  }
}
</script>
