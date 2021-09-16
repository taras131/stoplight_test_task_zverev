<template>
  <traffic-lights :active-color="color" :time-limit="timer" :prev-route="prevRoute"/>
</template>

<script>
import TrafficLights from "../components/TrafficLights";
import {COLOR_YELLOW, TIMER_YELLOW} from "../const";

export default {
  components: {TrafficLights},
  data() {
    return {
      timer: TIMER_YELLOW,
      color: COLOR_YELLOW,
      prevRoute: null
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
  },
}
</script>
