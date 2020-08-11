<template>
  <div class="pasi px-2">
    <h1 class="title has-text-primary is-size-4">{{$t('navigation.menu_title_pasi')}}</h1>
    <p
      class="subtitle is-size-6"
    >{{$t('pasi.pasi_desc')}}</p>
    <div class="box">
      <!-- Steps -->
      <section>
        <b-steps
          v-model="activeStep"
          :animated="true"
          :rounded="true"
          :has-navigation="hasNavigation"
          :icon-prev="prevIcon"
          :icon-next="nextIcon"
          :label-position="labelPosition"
          :mobile-mode="mobileMode"
        >
        <!-- HEAD -->
          <b-step-item step="1" :label="$t('pasi.label_head')" :clickable="true">
            <h1 class="title has-text-centered has-text-primary">{{$t('pasi.label_head')}} 👨🏻</h1>
            <div class="columns">
              <div class="column is-half">
                <b-field :label="$t('pasi.label_area')+' (%)'">
            <b-slider size="is-medium" :min="0" :max="6" v-model="head.area">
                <template v-for="headArea in affectedAreas">
                    <b-slider-tick :value="headArea.value" :key="headArea.value">{{ headArea.name }}</b-slider-tick>
                </template>
            </b-slider>
        </b-field>
              </div>
              <div class="column is-half">
                <b-field :label="$t('pasi.label_redness')">
                  <b-slider  size="is-medium" :min="0" :max="4" v-model="head.redness">
                  <template v-for="value in [0,1,2,3,4]">
                    <b-slider-tick :value="value" :key="value">{{ value }}</b-slider-tick>
                </template>
                </b-slider>
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div class="column is-half">
                <b-field :label="$t('pasi.label_thickness')">
                  <b-slider  size="is-medium" :min="0" :max="4" v-model="head.thickness">
                  <template v-for="value in [0,1,2,3,4]">
                    <b-slider-tick :value="value" :key="value">{{ value }}</b-slider-tick>
                </template>
                </b-slider>
                </b-field>
              </div>

              <div class="column is-half">
                <b-field :label="$t('pasi.label_scaling')">
                  <b-slider  size="is-medium" :min="0" :max="4" v-model="head.scaling">
                  <template v-for="value in [0,1,2,3,4]">
                    <b-slider-tick :value="value" :key="value">{{ value }}</b-slider-tick>
                </template>
                </b-slider>
                </b-field>
              </div>
            </div>
          </b-step-item>

          <!-- Upper Limbs -->
            <b-step-item step="2" :label="$t('pasi.label_upper_limbs')" :clickable="true">
            <h1 class="title has-text-centered has-text-primary">{{$t('pasi.label_upper_limbs')}} 💪</h1>
            <div class="columns">
              <div class="column is-half">
                <b-field :label="$t('pasi.label_area')+' (%)'">
            <b-slider size="is-medium" :min="0" :max="6" v-model="upperLimbs.area">
                <template v-for="upperLimbsArea in affectedAreas">
                    <b-slider-tick :value="upperLimbsArea.value" :key="upperLimbsArea.value">{{ upperLimbsArea.name }}</b-slider-tick>
                </template>
            </b-slider>
        </b-field>
              </div>
              <div class="column is-half">
                <b-field :label="$t('pasi.label_redness')">
                  <b-slider  size="is-medium" :min="0" :max="4" v-model="upperLimbs.redness">
                  <template v-for="value in [0,1,2,3,4]">
                    <b-slider-tick :value="value" :key="value">{{ value }}</b-slider-tick>
                </template>
                </b-slider>
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div class="column is-half">
                <b-field :label="$t('pasi.label_thickness')">
                  <b-slider  size="is-medium" :min="0" :max="4" v-model="upperLimbs.thickness">
                  <template v-for="value in [0,1,2,3,4]">
                    <b-slider-tick :value="value" :key="value">{{ value }}</b-slider-tick>
                </template>
                </b-slider>
                </b-field>
              </div>

              <div class="column is-half">
                <b-field :label="$t('pasi.label_scaling')">
                  <b-slider  size="is-medium" :min="0" :max="4" v-model="upperLimbs.scaling">
                  <template v-for="value in [0,1,2,3,4]">
                    <b-slider-tick :value="value" :key="value">{{ value }}</b-slider-tick>
                </template>
                </b-slider>
                </b-field>
              </div>
            </div>
          </b-step-item>
<!-- Trunks -->
          <b-step-item step="3" :label="$t('pasi.label_trunk')" :clickable="true">
            <h1 class="title has-text-centered has-text-primary">{{$t('pasi.label_trunk')}} 🎽</h1>
            <div class="columns">
              <div class="column is-half">
                <b-field :label="$t('pasi.label_area')+' (%)'">
            <b-slider size="is-medium" :min="0" :max="6" v-model="trunk.area">
                <template v-for="trunkArea in affectedAreas">
                    <b-slider-tick :value="trunkArea.value" :key="trunkArea.value">{{ trunkArea.name }}</b-slider-tick>
                </template>
            </b-slider>
        </b-field>
              </div>
              <div class="column is-half">
                <b-field :label="$t('pasi.label_redness')">
                  <b-slider  size="is-medium" :min="0" :max="4" v-model="trunk.redness">
                  <template v-for="value in [0,1,2,3,4]">
                    <b-slider-tick :value="value" :key="value">{{ value }}</b-slider-tick>
                </template>
                </b-slider>
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div class="column is-half">
                <b-field :label="$t('pasi.label_thickness')">
                  <b-slider  size="is-medium" :min="0" :max="4" v-model="trunk.thickness">
                  <template v-for="value in [0,1,2,3,4]">
                    <b-slider-tick :value="value" :key="value">{{ value }}</b-slider-tick>
                </template>
                </b-slider>
                </b-field>
              </div>

              <div class="column is-half">
                <b-field :label="$t('pasi.label_scaling')">
                  <b-slider  size="is-medium" :min="0" :max="4" v-model="trunk.scaling">
                  <template v-for="value in [0,1,2,3,4]">
                    <b-slider-tick :value="value" :key="value">{{ value }}</b-slider-tick>
                </template>
                </b-slider>
                </b-field>
              </div>
            </div>
          </b-step-item>
<!-- Legs -->
          <b-step-item step="4" :label="$t('pasi.label_legs')" :clickable="true">
            <h1 class="title has-text-centered has-text-primary">{{$t('pasi.label_legs')}} 🦵</h1>
            <div class="columns">
              <div class="column is-half">
                <b-field :label="$t('pasi.label_area')+' (%)'">
            <b-slider size="is-medium" :min="0" :max="6" v-model="legs.area">
                <template v-for="legsArea in affectedAreas">
                    <b-slider-tick :value="legsArea.value" :key="legsArea.value">{{ legsArea.name }}</b-slider-tick>
                </template>
            </b-slider>
        </b-field>
              </div>
              <div class="column is-half">
                <b-field :label="$t('pasi.label_redness')">
                  <b-slider  size="is-medium" :min="0" :max="4" v-model="legs.redness">
                  <template v-for="value in [0,1,2,3,4]">
                    <b-slider-tick :value="value" :key="value">{{ value }}</b-slider-tick>
                </template>
                </b-slider>
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div class="column is-half">
                <b-field :label="$t('pasi.label_thickness')">
                  <b-slider  size="is-medium" :min="0" :max="4" v-model="legs.thickness">
                  <template v-for="value in [0,1,2,3,4]">
                    <b-slider-tick :value="value" :key="value">{{ value }}</b-slider-tick>
                </template>
                </b-slider>
                </b-field>
              </div>

              <div class="column is-half">
                <b-field :label="$t('pasi.label_scaling')">
                  <b-slider  size="is-medium" :min="0" :max="4" v-model="legs.scaling">
                  <template v-for="value in [0,1,2,3,4]">
                    <b-slider-tick :value="value" :key="value">{{ value }}</b-slider-tick>
                </template>
                </b-slider>
                </b-field>
              </div>
            </div>
          </b-step-item>
<!-- Results -->
          <b-step-item :step="5" :label="$t('pasi.label_pasi_score')" :clickable="true">
            <h1 class="title has-text-centered has-text-primary">{{$t('pasi.label_pasi_score')}}</h1>
            <h2 class="title has-text-centered has-text-grey is-size-1">
              <span :class="{'has-text-success': totalPASIComputedScore < 5, 'has-text-warning': totalPASIComputedScore > 5 && totalPASIComputedScore < 10,
              'has-text-danger': totalPASIComputedScore >= 10 }">{{totalPASIComputedScore}}</span></h2>
            <p class="subtitle has-text-centered is-size-6"><strong> {{$t('pasi.label_severity')}} :
              <span class="has-text-success" v-if="totalPASIComputedScore < 5">{{$t('pasi.lvl_mild')}}</span>
              <span class="has-text-warning" v-else-if="totalPASIComputedScore > 5 && totalPASIComputedScore < 10">{{$t('pasi.lvl_moderate')}}</span>
              <span class="has-text-danger" v-else-if="totalPASIComputedScore >= 10">{{$t('pasi.lvl_severe')}}</span>
              </strong>
            </p>
            <div class="b-table">
            <div class="table-wrapper has-mobile-cards">
              <table class="table is-fullwidth is-narrow">
                <thead>
                  <th>{{$t('pasi.label_part')}}</th>
                  <th>{{$t('pasi.label_area')}}</th>
                  <th>{{$t('pasi.label_redness')}}</th>
                  <th>{{$t('pasi.label_thickness')}}</th>
                  <th>{{$t('pasi.label_scaling')}}</th>
                  <th>{{$t('pasi.label_total_area_involvement')}}</th>
                </thead>
                <tbody>
                  <tr>
                    <td :data-label="$t('pasi.label_part')"><strong>{{$t('pasi.label_head')}}</strong></td>
                    <td :data-label="$t('pasi.label_area')">{{head.area}}</td>
                    <td :data-label="$t('pasi.label_redness')">{{head.redness}}</td>
                    <td :data-label="$t('pasi.label_thickness')">{{head.thickness}}</td>
                    <td :data-label="$t('pasi.label_scaling')">{{head.scaling}}</td>
                    <td :data-label="$t('pasi.label_total_area_involvement')">
                      <strong>{{headArea}}</strong>
                      </td>
                  </tr>
                  <tr>
                    <td :data-label="$t('pasi.label_part')"><strong>{{$t('pasi.label_upper_limbs')}}</strong></td>
                    <td :data-label="$t('pasi.label_area')">{{upperLimbs.area}}</td>
                    <td :data-label="$t('pasi.label_redness')">{{upperLimbs.redness}}</td>
                    <td :data-label="$t('pasi.label_thickness')">{{upperLimbs.thickness}}</td>
                    <td :data-label="$t('pasi.label_scaling')">{{upperLimbs.scaling}}</td>
                    <td :data-label="$t('pasi.label_total_area_involvement')">
                      <strong>{{upperLimbsArea}}</strong>
                      </td>
                  </tr>
                  <tr>
                    <td :data-label="$t('pasi.label_part')"><strong>{{$t('pasi.label_trunk')}}</strong></td>
                    <td :data-label="$t('pasi.label_area')">{{trunk.area}}</td>
                    <td :data-label="$t('pasi.label_redness')">{{trunk.redness}}</td>
                    <td :data-label="$t('pasi.label_thickness')">{{trunk.thickness}}</td>
                    <td :data-label="$t('pasi.label_scaling')">{{trunk.scaling}}</td>
                    <td :data-label="$t('pasi.label_total_area_involvement')">
                      <strong>{{trunkArea}}</strong>
                      </td>
                  </tr>
                  <tr>
                    <td :data-label="$t('pasi.label_part')"><strong>{{$t('pasi.label_legs')}}</strong></td>
                    <td :data-label="$t('pasi.label_area')">{{legs.area}}</td>
                    <td :data-label="$t('pasi.label_redness')">{{legs.redness}}</td>
                    <td :data-label="$t('pasi.label_thickness')">{{legs.thickness}}</td>
                    <td :data-label="$t('pasi.label_scaling')">{{legs.scaling}}</td>
                    <td :data-label="$t('pasi.label_total_area_involvement')">
                      <strong>{{legsArea}}</strong>
                      </td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
          </b-step-item>

          <template slot="navigation" slot-scope="{previous, next}">
            <div class="columns is-centered" id="navButtonGroup">
              <b-button
                outlined
                type="is-primary mr-2"
                icon-pack="mdi"
                icon-left="arrow-left"
                :disabled="previous.disabled"
                @click.prevent="previous.action"
              >{{$t('pasi.label_btn_prev')}}</b-button>
              <b-button
                outlined
                type="is-primary"
                icon-pack="mdi"
                icon-right="arrow-right"
                :disabled="next.disabled"
                @click.prevent="next.action"
              >{{$t('pasi.label_btn_next')}}</b-button>
            </div>
          </template>
        </b-steps>
      </section>
    </div>
     <recommended-product id="64" name="Psoriasis Pack" class="has-background-primary-dark">
       <template v-slot:desc>
         <p>Direction of use: Please refer further here </p>
       </template>
     </recommended-product>
  </div>
</template>
<script>
import RecommendedProduct from '../components/RecommendedProduct'
export default {
  components: { RecommendedProduct },
  data () {
    return {
      activeStep: 0,
      showSocial: false,
      isAnimated: true,
      isRounded: true,
      isStepsClickable: true,
      hasNavigation: true,
      customNavigation: false,
      isProfileSuccess: false,

      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right',
      labelPosition: 'bottom',
      mobileMode: 'minimalist',
      head: {
        area: 0,
        redness: 0,
        thickness: 0,
        scaling: 0
      },
      upperLimbs: {
        area: 0,
        redness: 0,
        thickness: 0,
        scaling: 0
      },
      trunk: {
        area: 0,
        redness: 0,
        thickness: 0,
        scaling: 0
      },
      legs: {
        area: 0,
        redness: 0,
        thickness: 0,
        scaling: 0
      },
      affectedAreas: [
        { name: '0', value: 0, id: 0 },
        { name: '10', value: 1, id: 1 },
        { name: '29', value: 2, id: 2 },
        { name: '49', value: 3, id: 3 },
        { name: '69', value: 4, id: 4 },
        { name: '89', value: 5, id: 5 },
        { name: '100', value: 6, id: 6 }
      ]
    }
  },
  computed: {
    totalPASIComputedScore: function () {
      return this.calcTotalPASIScore(
        this.headArea,
        this.upperLimbsArea,
        this.trunkArea,
        this.legsArea
      )
    },
    headArea: function () {
      return this.calculateAreaInvolvement(this.calculateSurfaceArea(this.head.redness, this.head.thickness, this.head.scaling, 0.1), this.head.area)
    },
    upperLimbsArea: function () {
      return this.calculateAreaInvolvement(this.calculateSurfaceArea(this.upperLimbs.redness, this.upperLimbs.thickness, this.upperLimbs.scaling, 0.2), this.upperLimbs.area)
    },
    trunkArea: function () {
      return this.calculateAreaInvolvement(this.calculateSurfaceArea(this.trunk.redness, this.trunk.thickness, this.trunk.scaling, 0.3), this.trunk.area)
    },
    legsArea: function () {
      return this.calculateAreaInvolvement(this.calculateSurfaceArea(this.legs.redness, this.legs.thickness, this.legs.scaling, 0.4), this.legs.area)
    }
  },
  methods: {
    calculateSurfaceArea (redness, thickness, scaling, factor) {
      var surfaceArea = factor * (parseInt(redness) + parseInt(thickness) + parseInt(scaling))
      return surfaceArea.toFixed(2)
    },
    calculateAreaInvolvement (surfaceArea, degInvolvement) {
      var areaInvolvement = surfaceArea * degInvolvement
      return areaInvolvement.toFixed(2)
    },
    calcTotalPASIScore (headScore, limbsScore, trunksScore, legsScore) {
      var totalScore = parseFloat(headScore) + parseFloat(limbsScore) + parseFloat(trunksScore) + parseFloat(legsScore)
      this.totalPASI = totalScore
      return totalScore.toFixed(2)
    }
  }
}
</script>
<style>
.b-slider.is-medium .b-slider-tick-label{
  top: .8rem;
}
#navButtonGroup{
  margin: 1rem 0;
  display: flex;
}
 span{
  font-family: 'Lexend Deca' ;
}
</style>
