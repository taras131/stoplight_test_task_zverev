<template>
  <div class="section_wrapper">
    <div
      class="section_lights"
      :class="{
            'red': currentColor === 'red',
            'yellow': currentColor === 'yellow',
            'green': currentColor === 'green',
            'active': activeColor === currentColor
    }">
      <div v-if="activeColor === currentColor" class="timer">{{timer}}</div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    currentColor: {
      type: String,
      required: true
    },
    timer:{
      type: Number,
      default: null
    },
    activeColor: String,
    default: false
  },
}
</script>

<style scoped>
.section_wrapper {
  height: 150px;
  width: 150px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section_lights {
  height: 130px;
  width: 130px;
  border-radius: 100%;
  opacity: 0.3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.red {
  background-color: red;
}

.yellow {
  background-color: yellow;
}

.green {
  background-color: green;
}
.active {
  opacity: 1;
}
.timer{
  font-size: 60px;
  color: white;
}
</style>
