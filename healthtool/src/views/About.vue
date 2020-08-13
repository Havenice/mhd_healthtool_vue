<template>
  <div class="about pl-2">
    <h1 class="title has-text-primary">About MHD Healthtool</h1>
    <p class="mb-4">
      MHD Healthtool is a <b>mobile-and-user friendly platform site</b> that provides multiple calculation tools for medical/clinical trial uses, paired accordingly with our
       recommended EnerFlex® products. Each tool is carefully referred and improvised from standards/classifications set by journals and medical sites.
    </p>
    <h2 class="title is-size-4">About MyHealthDriver.Com Sdn. Bhd</h2>
    <p class="mb-5">
      MYHEALTHDRIVER.COM PRIVATE LIMITED COMPANY is an established corporation since year 2000 with innovative functional nutrition by perfecting organically grown wholesome soybean and non-GMO isolated soy protein. Mr. Kim Lin- Keong (born January 1966, Nutritionist) is the brainchild behind the product innovation , had found a cure for his 26 years of chronic asthma suffering by EnerFlex® back in 5 December 1999.
      <br><br> In fact, EnerFlex® innovation was initiated in 1992 until the right formula was discovered on 19 November 1999 that subsequently cured its founder’s asthma 3 weeks later.
       From there, EnerFlex® is improvised and derived into multiple formulas to encounter certain use-cases such as chronic diseases and psoriasis.
    </p>
    <h2 class="title is-size-5">Credits</h2>
    <p class="mb-4">
      Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </p>
  </div>
</template>
<script>
export default {
  metaInfo () {
    return {
      title: this.$t('navigation.menu_title_about'),
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.$t('meta.meta_keywords_about')
      },
      {
        vmid: 'keywords',
        name: 'keywords',
        content: this.$t('meta.meta_keywords_about')
      }]
    }
  }
}
</script>
