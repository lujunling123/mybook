<template>
  <div class="imgclass">
  <div class="con">
      <el-container style="margin: 10px 300px;min-width: 936px">
        <el-header style="height: 300px; min-width: 300px;padding: 0px">
          <div class="topimg" style="text-align: center;height: 100px;">
              <el-upload imageUrl="static/imgs/he.jpg"
                         style="width: 100px;height: 100px;margin-top: 30px;text-align: center;margin-left: 415px;border-radius: 50%" :toUpdate=true id="img">
              </el-upload>
            <div><span class="s">&俊姑娘</span></div>
            <div><span class="su">湖北-随州</span></div>
            <div class="but">
              <el-button type="primary">+ 添加</el-button>
              <el-button type="info">私信</el-button>
            </div>
            <div class="foot-hea">
              <router-link class="pass" :to="{ name: '/'}">主页</router-link>
              <router-link class="gl" :to="{ name: '/'}">相册</router-link>
              <router-link class="pass" :to="{ name: '/'}">管理中心</router-link>
            </div>
          </div>
        </el-header>
        <el-container  width="300px"style="height: 930px">
          <el-aside width="300px" height="800px" style="text-align: inherit;">
            <div class="center">
              <div class="onze">
              <span class="gz">
                关注
              </span>
                <span class="gz">粉丝</span>
                <span class="gz">
                微博
                <span class="gz">1028</span>
              </span>
                <span class='gz'>
                  1028
                <span class="gz">1028</span>
              </span>
              </div>
              <div class="center-cen">
                <div class="rz" style="height: 62px">
                  <span class="zt">申请认证</span>
                  <i class="el-icon-share"></i>
                </div>
                <div class="zl" style="height: 58px">
                  <div class="block">
                    <span class="demonstration">个人资料完整程度</span>
                    <el-progress :percentage="70"></el-progress>
                    <div style="border: 1px #b4bccc solid;margin: 10px 2px"></div>
                    <div style="height: 36px">
                      <router-link :to="{name: 'publictis'}">编辑个人资料</router-link>
                      <i class="el-icon-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="foot-cen">
                赞
                <div class="line"></div>
                <div style="height:98px;width:288px;margin: auto;border: 1px;background-color: #f0f0f4">
                  <div class="line"></div>
                </div>
              </div>
            </div>
          </el-aside>
          <el-main>
            <el-menu :default-active="activeIndex" class="el-menu-demo" style="height: 46px" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">全部</el-menu-item>
              <el-menu-item index="3">热门</el-menu-item>
              <el-submenu index="2">
                <template slot="title">更多</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-submenu>
            </el-menu>
            <div class="div" style="height: 100px;background-color: #f0f0f4">

            </div>
          </el-main>
        </el-container>
      </el-container>
  </div>
  </div>
</template>
<style lang="less" scoped>
  @import "../../common/stylus/base.less";
  .imgclass{
    margin:0 auto;
    background-image: url("../../../static/imgs/bgimg.jpg");
    background-size: cover;
    .con{
      width: 936px;
      .topimg{
        .uplode{
          width: 100px;
          height: 100px;
          margin-top: 30px;
        }
        .s {
          color: white;
          font-size: 16px;
        }
        .su {
          color: #f4f4f4;
          font-size: 14px;
        }
        .but{
          margin-top: 10px;
        }
        .foot-hea {
          height: 10px;
          border-radius: 3px;
          padding:18px;
          color: #000;
          border: 1px snow;
          background-color: seashell;
          .pass{
            padding: 0 5%;
            font-size: 1.09em;
            margin: 20px 20px;
            color: #888888;
          }
          .gl {
            padding: 0 5%;
            font-size: 1.09em;
            margin-top: 20px;
            color: #888888;
          }
        }
      }
      .center{
        .onze{
          margin-top: 20px;
          border-radius: 3px;
          width: 88%;
          height: 60px;
          background-color: white;
          min-width: 300px;
          text-align: inherit !important;
          .gz {
            padding: 0 3px;
          }
        }
        .center-cen{
          margin: 30px 0px;
          border-radius: 3px;
          width: 300px;
          height: 156px;
          background-color: white;
        }
        .foot-cen{
          margin: 30px 0px;
          border-radius: 3px;
          width: 300px;
          height: 179px;
          background-color: white;
          text-align: inherit !important;
        }
      }
    }
  }
</style>
<script>
  import elUpload from '../../components/elUpload.vue'
  export default {
    components: {elUpload},
    data () {
      return {
        activeIndex: ''
      }
    },
    methods: {
      handleSelect () {
      }
    }
  }
</script>
