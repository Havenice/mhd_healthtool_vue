<template>
  <div class="bmi px-2">
    <div class="box">
      <div class="columns">
        <div class="is-full column">
          <p class="title has-text-primary is-size-3">{{$t("bmi.title")}}
          </p>
        </div>
      </div>
      <div class="columns">
        <div class="is-half column">
          <b-checkbox v-model="chkBoxKg"><span v-html="$t('bmi.choose_kg_desc')"></span></b-checkbox>
        </div>
      </div>
      <!-- race -->
      <div class="columns">
        <div class="is-half column">
          <label class="mr-4 label">{{$t('bmi.label_race')}}</label>
          <b-radio v-model="race" name="race" native-value="caucasian">{{$t('bmi.title_caucasian')}}</b-radio>
          <b-radio v-model="race" name="race" native-value="asian">{{$t('bmi.title_asian')}}</b-radio>
        </div>
        <!-- weight -->
        <div class="is-half column">
          <b-field :label="$t('bmi.label_weight')+' ('+$t('bmi.pound_unit')+')'"  v-if="!chkBoxKg">
            <b-numberinput v-model="weightLb" step="0.1"></b-numberinput>
          </b-field>
          <b-field :label="$t('bmi.label_weight')+' ('+$t('bmi.kilogram_unit')+')'" v-else-if="chkBoxKg">
            <b-numberinput v-model="weightKg" step="0.1"></b-numberinput>
          </b-field>
        </div>
      </div>
      <!-- height -->
      <div class="columns">
        <div class="is-half column">
          <b-field :label="$t('bmi.label_height')+' ('+$t('bmi.feet_unit')+')'" v-if="!chkBoxKg">
            <b-numberinput v-model="heightFt" max="12"></b-numberinput>
          </b-field>
          <b-field :label="$t('bmi.label_height')+' ('+$t('bmi.meter_unit')+')'" v-else-if="chkBoxKg">
            <b-numberinput v-model="heightMeter" max="12"></b-numberinput>
          </b-field>
        </div>
        <div class="is-half column">
          <b-field :label="$t('bmi.label_height')+' ('+$t('bmi.inch_unit')+')'" v-if="!chkBoxKg">
            <b-numberinput v-model="heightInch" max="11"></b-numberinput>
          </b-field>
          <b-field :label="$t('bmi.label_height')+' ('+$t('bmi.centimeter_unit')+')'" v-else-if="chkBoxKg">
            <b-numberinput v-model="heightCentimeter" max="99"></b-numberinput>
          </b-field>
        </div>
      </div>
      <!-- Result -->
      <section class="hero has-background-light">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              BMI :
              <span v-if="!chkBoxKg" :class="{'has-text-danger': category === $t('bmi.lvl_obese'), 'has-text-warning': category === $t('bmi.lvl_overweight'), 'has-text-success': category === $t('bmi.lvl_healthy')}">
                {{calcBMILb(this.heightFt, this.heightInch, this.weightLb)}}</span>
              <span v-else-if="chkBoxKg" :class="{'has-text-danger': category === $t('bmi.lvl_obese'), 'has-text-warning': category === $t('bmi.lvl_overweight'), 'has-text-success': category === $t('bmi.lvl_healthy')}">
                {{calcBMIKg(this.heightMeter, this.heightCentimeter, this.weightKg)}}</span>
            </h1>
            <h2 class="subtitle">
              {{$t('bmi.label_classification')}}:
              <strong v-if="!chkBoxKg" class="is-uppercase" :class="{'has-text-danger': category === $t('bmi.lvl_obese'), 'has-text-warning': category === $t('bmi.lvl_overweight'), 'has-text-success': category === $t('bmi.lvl_healthy')}">
              {{categorizeLb(this.heightFt, this.heightInch, this.weightLb, this.race)}}
              </strong>
              <strong v-else-if="chkBoxKg" class="is-uppercase" :class="{'has-text-danger': category === $t('bmi.lvl_obese'), 'has-text-warning': category === $t('bmi.lvl_overweight'), 'has-text-success': category === $t('bmi.lvl_healthy')}">
              {{categorizeKg(this.heightMeter, this.heightCentimeter, this.weightKg, this.race)}}
              </strong>
            </h2>
            <legend>{{$t('bmi.legend_result')}}</legend>
          </div>
        </div>
      </section>
    </div>
        <recommended-product id="50" name="S-Perfect">
          <template v-slot:desc>
              <p>I can add html element/tags flexibly in slot.</p>
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
      chkBoxKg: false,
      race: 'caucasian',
      weightLb: 130,
      weightKg: 60,
      heightFt: 5,
      heightMeter: 1,
      heightInch: 9,
      heightCentimeter: 55,
      category: 'healthy',
      bmiLb: 0,
      bmiKg: 0
    }
  },
  methods: {
    convertHeight (feet, inches) {
      return feet * 12 + inches
    },
    convertMeter (meter, centimeter) {
      return (centimeter / 100) + meter
    },
    calcBMILb (feet, inches, weightLb) {
      var fHeight = this.convertHeight(feet, inches)
      var bmi = (weightLb / Math.pow(fHeight, 2)) * 703
      this.bmiLb = bmi
      return this.bmiLb.toFixed(2)
    },
    calcBMIKg (meter, centimeter, weightKg) {
      var mHeight = this.convertMeter(meter, centimeter)
      var bmi = (weightKg / Math.pow(mHeight, 2))
      this.bmiKg = bmi
      return this.bmiKg.toFixed(2)
    },
    categorizeLb (feet, inches, weightLb, race) {
      // caucasian
      if (this.bmiLb >= 30 && race === 'caucasian') {
        this.category = this.$t('bmi.lvl_obese')
      } else if (this.bmiLb > 25 && this.bmiLb < 30 && race === 'caucasian') {
        this.category = this.$t('bmi.lvl_overweight')
      } else if (this.bmiLb > 18.5 && this.bmiLb < 25 && race === 'caucasian') {
        this.category = this.$t('bmi.lvl_healthy')
      } /* asian */ else if (this.bmiLb >= 25 && race === 'asian') {
        this.category = this.$t('bmi.lvl_obese')
      } else if (this.bmiLb >= 23 && this.bmiLb < 25 && race === 'asian') {
        this.category = this.$t('bmi.lvl_overweight')
      } else if (this.bmiLb > 18.5 && this.bmiLb < 23 && race === 'asian') {
        this.category = this.$t('bmi.lvl_healthy')
      } else {
        this.category = this.$t('bmi.lvl_underweight')
      }
      return this.category
    },
    categorizeKg (meter, centimeter, weightKg, race) {
      // caucasian
      if (this.bmiKg >= 30 && race === 'caucasian') {
        this.category = this.$t('bmi.lvl_obese')
      } else if (this.bmiKg > 25 && this.bmiKg < 30 && race === 'caucasian') {
        this.category = this.$t('bmi.lvl_overweight')
      } else if (this.bmiKg > 18.5 && this.bmiKg < 25 && race === 'caucasian') {
        this.category = this.$t('bmi.lvl_healthy')
      } /* asian */ else if (this.bmiLb >= 25 && race === 'asian') {
        this.category = this.$t('bmi.lvl_obese')
      } else if (this.bmiKg >= 23 && this.bmiKg < 25 && race === 'asian') {
        this.category = this.$t('bmi.lvl_overweight')
      } else if (this.bmiKg > 18.5 && this.bmiKg < 23 && race === 'asian') {
        this.category = this.$t('bmi.lvl_healthy')
      } else {
        this.category = this.$t('bmi.lvl_underweight')
      }
      return this.category
    }
  },
  mounted () {
  }
}
</script>
<style>
input[type=number] {
    text-align: center;
    font-family: 'Lexend Deca' !important;
}
</style>
