<template>
  <div>
    <traffic-lights-section
      :current-color="red"
      :active-color="activeColor"
      :timer="timer"/>
    <traffic-lights-section
      :current-color="yellow"
      :active-color="activeColor"
      :timer="timer"/>
    <traffic-lights-section
      :current-color="green"
      :active-color="activeColor"
      :timer="timer"/>
  </div>
</template>

<script>
import TrafficLightsSection from "../components/TrafficLightsSection";
import {COLOR_GREEN, COLOR_RED, COLOR_YELLOW, ROUTE_GREEN, ROUTE_RED, ROUTE_YELLOW} from "../const";

export default {
  components: {TrafficLightsSection},
  props: {
    activeColor: {
      type: String,
      required: true
    },
    timeLimit: {
      type: Number,
      required: true
    },
    prevRoute:{
      type: Object,
      default: null
    }
  },
  data() {
    return {
      timer: 0,
      red: 'red',
      yellow: 'yellow',
      green: 'green',
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
  },
  methods: {
    decrementTimer() {
      this.timer -= 1
      if (this.timer === 0) {
        switch (this.activeColor) {
          case COLOR_RED:
            this.$router.push(ROUTE_YELLOW)
            break
          case COLOR_YELLOW:
            if (this.prevRoute.path === ROUTE_RED) {
              this.$router.push(ROUTE_GREEN)
            } else {
              this.$router.push(ROUTE_RED)
            }
            break
          case COLOR_GREEN:
            this.$router.push(ROUTE_YELLOW)
            break
          default:
            this.$router.push(ROUTE_RED)
        }
      }
    }
  },
  mounted() {
    const sessionTimer = +sessionStorage.getItem('timer')
    if(sessionTimer>1){
      this.timer = sessionTimer
    } else {
      this.timer = this.timeLimit
    }
    setInterval(this.decrementTimer, 1000)
  },
  updated: function () {
    this.$nextTick(function () {
     sessionStorage.setItem('timer',this.timer)
    })
  }
}
</script>
