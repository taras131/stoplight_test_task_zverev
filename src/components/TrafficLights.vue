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
    prevRoute: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      timer: 0,
      red: COLOR_RED,
      yellow: COLOR_YELLOW,
      green: COLOR_GREEN,
    }
  },

  methods: {
    setTimer() {
      const isPrevComponentFinish = sessionStorage.getItem('isPrevComponentFinish')
      if (isPrevComponentFinish) {
        this.timer = this.timeLimit
        sessionStorage.setItem('isPrevComponentFinish', '')
        return
      }
      const sessionTimer = +sessionStorage.getItem('timer')
      if (sessionTimer) {
        this.timer = sessionTimer
      } else {
        this.timer = this.timeLimit
      }
    },
    downTimer() {
      setTimeout(() => {
        this.timer--
        this.downTimer()
      }, 1000)
    },
    pushNextPath() {
      switch (this.activeColor) {
        case COLOR_RED:
          this.$router.push(ROUTE_YELLOW)
          break
        case COLOR_YELLOW:
          let sessionPrevRoute
          if (this.prevRoute && this.prevRoute.path.length > 1) {
            sessionPrevRoute = this.prevRoute.path
          } else {
            sessionPrevRoute = sessionStorage.getItem('prevRoute')
          }
          if (sessionPrevRoute === ROUTE_RED) {
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
  },
  watch: {
    timer(newValue) {
      sessionStorage.setItem('timer', newValue)
      if (newValue === -1) {
        this.pushNextPath()
      }
    },
    prevRoute(newValue) {
      if (newValue && newValue.path.length > 1) {
        sessionStorage.setItem('prevRoute', newValue.path)
      }
    }
  },
  mounted() {
    this.setTimer()
    this.downTimer()
  },
  destroyed() {
    sessionStorage.setItem('isPrevComponentFinish', 'true')
  }
}
</script>
