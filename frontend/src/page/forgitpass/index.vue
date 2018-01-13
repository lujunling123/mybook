<template>
  <div class="forgit" style="z-index: -1;position: absolute;">
    <el-row >
      <el-col :span="7"><div class="grid-content"></div></el-col>
      <el-col :span="10">
        <div class="grid-content ">
          <div class="tit_heard">
            <div class="huluwsign">
              <span  style="float: right"><b><font color="white">已有帐号,</font>&nbsp&nbsp&nbsp
                <router-link to='/login' style="color: #ffd100">马上登录</router-link>
                &nbsp&nbsp&nbsp&nbsp<font color="#ffd100">|</font>&nbsp&nbsp&nbsp&nbsp
                <router-link to='/home' style="color: #ffd100">返回</router-link></b>
              </span>
            </div>
          </div>
          <div class="radius_bg">
          <div class="center_tit">忘记密码</div>
            <bginput></bginput>
          </div>
        </div>
      </el-col>
      <el-col :span="7"><div class="grid-content"></div></el-col>
    </el-row>
  </div>
</template>
<style lang="less" scoped>
  @import "../../common/stylus/base.less";
  .forgit {

    background-image: url("https://huluwa-ec.oss-cn-beijing.aliyuncs.com/static/imgs/bg2.png");
    height: 99.8%;
    width: 99.85%;
    border: 1px solid #101013;
    margin: 0 auto;
    background-size: cover;

    .grid-content {
      border-radius: 4px;
      min-height: 900px;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .tit_heard {
      margin-top: 5%;
      height: 100%;
      z-index: 100;
      .huluwsign{
        width: 100%;
        height: 29.9px;
        margin: 0 auto;
      }
    }
    .bg_center {
      width: 100%;
      height: 925px;
      margin: 0 auto;
      border-radius: 4px;
      background-color: white;
      margin-top: 8%;
    }
  .radius_bg{

    .center_tit {
      width: 90%;
      height: 45px;
      text-align:center;
      line-height:45px;
      font-size: 15px;
      border: 1px solid #ffd100;
      background-color: #ffd100;
      margin: 0 auto;
      margin-top: 7%;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      .text-lg
    }
    }
  }
</style>
<script>
  import bginput from './bginput.vue'
  export default {
    components: {bginput}
  }
</script>
