<template>
    <div class="b-table">
         <div class="table-wrapper has-mobile-cards">
       <table class="table is-bordered is-fullwidth is-narrow">
           <thead>
               <th>{{$t('pasi.pasi_label_factors')}}</th>
               <th class="has-text-centered has-background-success-dark has-text-white">0</th>
               <th class="has-text-centered has-background-success">1</th>
               <th class="has-text-centered has-background-warning">2</th>
               <th class="has-text-centered has-background-danger has-text-white">3</th>
               <th class="has-text-centered has-background-danger-dark has-text-white">4</th>
           </thead>
           <tbody>
               <tr>
                   <td :data-label="$t('pasi.pasi_label_factors')" class=" has-text-weight-bold">{{$t('pasi.label_redness')}}</td>
                   <td data-label="0">
                       <figure class="image is-96x96">
                           <img :src="`${publicPath}img/pasi/intensity_redness/red-0.JPG`" alt="Redness Score 0">
                       </figure>
                   </td>
                   <td data-label="1">
                       <figure class="image is-96x96">
                           <img :src="`${publicPath}img/pasi/intensity_redness/red-1.JPG`" alt="Redness Score 0">
                       </figure>
                   </td>
                   <td data-label="2">
                       <figure class="image is-96x96">
                           <img :src="`${publicPath}img/pasi/intensity_redness/red-2.JPG`" alt="Redness Score 0">
                       </figure>
                   </td>
                   <td data-label="3">
                       <figure class="image is-96x96">
                           <img :src="`${publicPath}img/pasi/intensity_redness/red-3.JPG`" alt="Redness Score 0">
                       </figure>
                   </td>
                   <td data-label="4">
                       <figure class="image is-96x96">
                           <img :src="`${publicPath}img/pasi/intensity_redness/red-4.JPG`" alt="Redness Score 0">
                       </figure>
                   </td>
               </tr>
               <!--  -->
               <tr>
                   <td :data-label="$t('pasi.pasi_label_factors')" class=" has-text-weight-bold">{{$t('pasi.label_thickness')}}</td>
                   <td data-label="0">
                       <figure class="image is-96x96">
                           <img :src="`${publicPath}img/pasi/intensity_thickness/thick-0.JPG`" alt="Thickness Score 0">
                       </figure>
                   </td>
                   <td data-label="1">
                       <figure class="image is-96x96">
                           <img :src="`${publicPath}img/pasi/intensity_thickness/thick-1.JPG`" alt="Thickness Score 0">
                       </figure>
                   </td>
                   <td data-label="2">
                       <figure class="image is-96x96">
                           <img :src="`${publicPath}img/pasi/intensity_thickness/thick-2.JPG`" alt="Thickness Score 0">
                       </figure>
                   </td>
                   <td data-label="3">
                       <figure class="image is-96x96">
                           <img :src="`${publicPath}img/pasi/intensity_thickness/thick-3.JPG`" alt="Thickness Score 0">
                       </figure>
                   </td>
                   <td data-label="4">
                       <figure class="image is-96x96">
                           <img :src="`${publicPath}img/pasi/intensity_thickness/thick-4.JPG`" alt="Thickness Score 0">
                       </figure>
                   </td>
               </tr>
               <!--  -->
               <tr>
                   <td :data-label="$t('pasi.pasi_label_factors')" class=" has-text-weight-bold">{{$t('pasi.label_scaling')}}</td>
                   <td data-label="0">
                       <figure class="image is-96x96">
                           <img :src="`${publicPath}img/pasi/intensity_scaling/scale-0.JPG`" alt="Scaling Score 0">
                       </figure>
                   </td>
                   <td data-label="1">
                       <figure class="image is-96x96">
                           <img :src="`${publicPath}img/pasi/intensity_scaling/scale-1.JPG`" alt="Scaling Score 0">
                       </figure>
                   </td>
                   <td data-label="2">
                       <figure class="image is-96x96">
                           <img :src="`${publicPath}img/pasi/intensity_scaling/scale-2.JPG`" alt="Scaling Score 0">
                       </figure>
                   </td>
                   <td data-label="3">
                       <figure class="image is-96x96">
                           <img :src="`${publicPath}img/pasi/intensity_scaling/scale-3.JPG`" alt="Scaling Score 0">
                       </figure>
                   </td>
                   <td data-label="4">
                       <figure class="image is-96x96">
                           <img :src="`${publicPath}img/pasi/intensity_scaling/scale-4.JPG`" alt="Scaling Score 0">
                       </figure>
                   </td>
               </tr>
           </tbody>
       </table>
    </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>
