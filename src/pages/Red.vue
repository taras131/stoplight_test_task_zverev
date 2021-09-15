<template>
  <traffic-lights :active-color="color" :time-limit="timer"/>
</template>
<script>
import TrafficLights from "../components/TrafficLights";
import {COLOR_RED, TIMER_RED} from "../const";

export default {
  components: {TrafficLights},
  data() {
    return {
      timer: TIMER_RED,
      color: COLOR_RED
    }
  }
}
</script>

