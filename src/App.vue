<template>
  <div class="app">
    <h1>Traffic lights</h1>
    <nav>
      <router-link :to="routeRed" class="nav_item">Red</router-link>
      |
      <router-link :to="routeYellow" class="nav_item">Yellow</router-link>
      |
      <router-link :to="routeGreen" class="nav_item">Green</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import {ROUTE_GREEN, ROUTE_RED, ROUTE_YELLOW} from "./const";

export default {
  name: 'app',
  data() {
    return {
      routeRed: ROUTE_RED,
      routeYellow: ROUTE_YELLOW,
      routeGreen: ROUTE_GREEN
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
nav{
  padding: 40px;
}
.nav_item{
  text-decoration: none;
}
.router-link-active{
  color: red;
}
</style>
