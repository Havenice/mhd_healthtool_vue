<template>
  <div class="content">
    <div class="columns">
      <div class="column is-6">
        <div class="box has-text-white has-background-primary">
          <article class="columns has-text-centered-mobile">
            <div class="column is-full-mobile is-one-quarter-tablet">
              <figure class="image is-128x128">
                <img src="../assets/bmi.svg" alt="Image" />
              </figure>
            </div>
            <div class="column is-full-mobile is-three-quarters-tablet">
              <div class="content">
                <h1 class="title is-size-4 has-text-white">{{$t('home.bmi_title')}}</h1>
                <p>{{$t('home.bmi_desc')}}</p>
                <router-link to="/bmi-check"  class="button is-primary is-inverted is-outlined is-rounded">Goto Link</router-link>
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
                <img src="../assets/intestinal.svg" alt="Image" />
              </figure>
            </div>
            <div class="column is-full-mobile is-three-quarters-tablet">
              <div class="content">
                <h1 class="title is-size-4 has-text-white">{{$t('home.intestinal_title')}}</h1>
                <p>{{$t('home.intestinal_desc')}}</p>
                <router-link to="/intestinal-age-check"  class="button is-primary is-inverted is-outlined is-rounded">Goto Link</router-link>
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
                <img src="../assets/pasi.png" alt="Image" />
              </figure>
            </div>
            <div class="column is-full-mobile is-three-quarters-tablet">
              <div class="content">
                <h1 class="title is-size-4">{{$t('home.pasi_title')}}</h1>
                <p>{{$t('home.pasi_desc')}}</p>
                <router-link to="/pasi-check"  class="button is-inverted has-background-danger-light is-outlined is-rounded">Goto Link</router-link>
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
