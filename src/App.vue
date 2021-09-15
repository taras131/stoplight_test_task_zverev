<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
