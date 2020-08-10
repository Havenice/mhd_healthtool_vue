<template>
  <div id="recommendedProduct" class="box" :class="{'sperfect-background': this.id == 50, 'original-background': this.id == 54, 'probiotic-background': this.id == 51}">
    <div class="columns is-vcentered">
      <div class="column is-narrow">
        <img src="https://via.placeholder.com/150x150" alt />
      </div>
      <div class="column has-text-white">
        <h1 class="has-text-white is-size-6">{{$t('products.label_recommended')}}</h1>
        <p class="title has-text-white is-size-4">EnerFlex®
         <slot name="product-title">{{product_name}}</slot>
        </p>
        <p class="subtitle has-text-light is-size-5">{{$t('products.label_consumption')}} : {{$t('products.daily_unit')}} 2 {{$t('products.sachet_unit')}} </p>
        <slot name="desc"></slot>
        <p>
          <a
            class="button is-primary is-inverted is-outlined is-rounded"
            :href="product_url"
            target="_blank"
            referrer="noopener noreferrer"
          >{{$t('products.label_buynow')}}</a>
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
</style>
<script>
export default {
  props: ['name', 'id'],
  data () {
    return {
      product_id: this.id,
      product_name: this.name,
      product_url: 'https://myhealthdriver.com/estore/index.php?route=product/product&product_id=' + this.id
    }
  }
}
</script>
