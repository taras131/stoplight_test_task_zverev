<template>
  <traffic-lights :active-color="color" :time-limit="timer"/>
</template>

<script>
import TrafficLights from "../components/TrafficLights";
import {COLOR_GREEN, TIMER_GREEN} from "../const";

export default {
  components: {TrafficLights},
  data() {
    return {
      timer: TIMER_GREEN,
      color: COLOR_GREEN
    }
  },
}
</script>

<style scoped>

</style>
