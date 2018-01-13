<template>
  <div id="mainTop">
      <headered></headered>
    <div class="maincss">
      <mained></mained>
    </div>

  </div>
</template>
<script>
  import headered from '../header'
  import mained from '../MyMain'
  export default {
    data:function () {
      return {

      }
    },
    components:{headered, mained}
  }
</script>
<style lang="less" scoped>
  #mainTop{
    .maincss{
      margin: 0 auto;
      width:1020px;
      min-height: 600px;
      height: 100%;
      display: flex;
    }

    /*background-color: #b4daf0;*/
    /*background-image: url("../../../static/imgs/body_bg_page.jpg");*/
    /*background-size: 100% 100%;*/
    /*height:2000px;*/
  }
</style>

