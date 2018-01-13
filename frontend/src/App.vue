<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
  background-image: url("../static/imgs/body_bg_page.jpg") ;
  background-size: 100% 1500px;
  /*图片定位不动*/
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
