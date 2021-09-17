<template>
  <div class="section_wrapper">
    <div
      class="section_lights"
      :class="setStyleClass()">
      <div v-if="activeColor === currentColor" class="timer">{{ timer }}</div>
    </div>
  </div>
</template>

<script>
import {BLINKING_INTERVAL, COLOR_GREEN, COLOR_RED, COLOR_YELLOW} from "../const";

export default {
  props: {
    currentColor: {
      type: String,
      required: true
    },
    timer: {
      type: Number,
      default: null
    },
    activeColor: String,
    required: true
  },
  data() {
    return {
      isBlinking: false,
      red: COLOR_RED,
      yellow: COLOR_YELLOW,
      green: COLOR_GREEN
    }
  },
  methods: {
    setStyleClass(){
      return{
        'red': this.currentColor === COLOR_RED,
        'yellow': this.currentColor === COLOR_YELLOW,
        'green': this.currentColor === COLOR_GREEN,
        'active': this.activeColor === this.currentColor,
        'blinking': this.isBlinking
      }
    },
    setBlinking() {
      this.isBlinking = !this.isBlinking
    }
  },
  updated: function () {
    this.$nextTick(function () {
      if (this.activeColor === this.currentColor && this.timer <= 3) {
        setInterval(this.setBlinking, BLINKING_INTERVAL)
      }
    })
  }
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
  border-radius: 3px;
  box-shadow: 0.4em 0.4em 5px rgba(122, 122, 122, 0.5);
}

.section_lights {
  height: 130px;
  width: 130px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: brightness(40%);
}

.red {
  background-color: red;
}


.yellow {
  background-color: #FFD700;
}


.green {
  background-color: green;
}


.active {
  filter: none;
  animation: shadow 0.5s infinite alternate;
}


@keyframes shadow {
  from {
    box-shadow: 0 0 55px 3px lightgrey;
  }
  to {
    box-shadow: 0 0 56px 4px lightgrey;
  }
}

.blinking {
  filter: brightness(75%);
  animation: none;
}

.timer {
  font-size: 80px;
  color: white;
  font-family: 'Iceberg';
}

</style>
