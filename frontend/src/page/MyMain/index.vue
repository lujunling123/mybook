<template>
  <div id="main-bg">
    <div class="content">
      <div class="left-header">
        <div class="top-ul">
          <div class="ulstyle"  v-for="item in leftTable">
            <router-link  :to="{ name:item.linkpath}">
              <div style="width: 150px;height:34px" class="lve" >
                <span>{{item.tyname}}</span>
              </div>
            </router-link>
          </div>
          <div style="width:150px; border-bottom: 1px solid rgba(255,255,255,0.2)"></div>
          <div class="ulstyle" v-for="item in leftTable2">
            <router-link  :to="{ name:item.linkpath}">
              <div style="width: 150px;height:34px" class="lve" >
                <span>{{item.tyname}}</span>
              </div>
            </router-link>
          </div>
          <div style="width:150px; border-bottom: 1px solid rgba(255,255,255,0.2)"></div>
          <div class="ulstyle" v-for="item in leftTable3">
            <router-link  :to="{ name:item.linkpath}">
              <div style="width: 150px;height:34px" class="lve" >
                <span>{{item.tyname}}</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="conter-header">
        <router-view>
        </router-view>
      </div>
    </div>
    <div>
  <!--<div class="imgclass">-->
    <!--<div class="con">-->
      <!--<el-container style="margin: 10px 300px;min-width: 936px">-->
        <!--<el-header style="height: 300px; min-width: 300px;padding: 0px">-->
          <!--<div class="topimg" style="text-align: center;height: 100px;">-->
            <!--<el-upload imageUrl="static/imgs/he.jpg"-->
                       <!--style="width: 100px;height: 100px;margin-top: 30px;text-align: center;margin-left: 415px;border-radius: 50%" :toUpdate=true id="img">-->
            <!--</el-upload>-->
            <!--<div><span class="s">&俊姑娘</span></div>-->
            <!--<div><span class="su">湖北-随州</span></div>-->
            <!--<div class="but">-->
              <!--<el-button type="primary">+ 添加</el-button>-->
              <!--<el-button type="info">私信</el-button>-->
            <!--</div>-->
            <!--<div class="foot-hea">-->
              <!--<router-link class="linkActiveClass" :to="{ name: 'main'}">主页</router-link>-->
              <!--<router-link class="linkActiveClass" :to="{ name: 'index'}">相册</router-link>-->
              <!--<router-link class="linkActiveClass" :to="{ name: 'index'}">管理中心</router-link>-->
            <!--</div>-->
          <!--</div>-->
        <!--</el-header>-->
        <!--<el-container  width="300px"style="height: 930px">-->
          <!--<el-aside width="320px" height="800px" style="text-align: inherit;">-->
            <!--<div class="center">-->
              <!--<div class="onze">-->
                <!--<div class="thear_g">-->
                  <!--<div class="WB_innerwrap">-->
                    <!--<tbody>-->
                    <!--<tr>-->
                      <!--<td class="S_line1">-->
                        <!--<a class="t_link S_txt1" href=""><strong class="W_f18">41</strong><span class="S_txt2">关注</span></a></td>-->
                      <!--<td class="S_line1">-->
                        <!--<a class="t_link S_txt1" href=""><strong class="W_f18">13</strong><span class="S_txt2">粉丝</span></a></td>-->
                      <!--<td class="S_line1">-->
                        <!--<a class="t_link S_txt1" href=""><strong class="W_f18">89</strong><span class="S_txt2">微博</span></a></td>-->
                    <!--</tr>-->
                    <!--</tbody>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="center-cen">-->
                <!--<div class="rz" style="height: 62px">-->
                  <!--<span class="zt" style="line-height: 62px;float: left;">申请认证</span>-->
                  <!--<i class="el-icon-share" style="line-height: 62px;"></i>-->
                <!--</div>-->
                <!--<div class="zl" style="height: 58px">-->
                  <!--<div class="block">-->
                    <!--<span class="demonstration">个人资料完整程度</span>-->
                    <!--<el-progress :percentage="70"></el-progress>-->
                    <!--<div style="border: 1px #b4bccc solid;margin: 10px 2px"></div>-->
                    <!--<div style="height: 36px">-->
                      <!--<router-link :to="{name: 'publictis'}">编辑个人资料</router-link>-->
                      <!--<i class="el-icon-arrow-right"></i>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="foot-cen">-->
                <!--赞-->
                <!--<div class="line"></div>-->
                <!--<div style="height:98px;width:288px;margin: auto;border: 1px;background-color: #f0f0f4">-->
                  <!--<div class="line"></div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</el-aside>-->
          <!--<el-main style="padding: inherit">-->
            <!--<el-menu :default-active="activeIndex" class="el-menu-demo" style="height: 46px;border-radius: 5px 5px 0 0;" mode="horizontal" @select="handleSelect">-->
              <!--<el-menu-item index="1">全部</el-menu-item>-->
              <!--<el-menu-item index="3">热门</el-menu-item>-->
              <!--<el-submenu index="2">-->
                <!--<template slot="title">更多</template>-->
                <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
                <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
                <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
              <!--</el-submenu>-->
            <!--</el-menu>-->
            <!--<div class="div" style="height: 571px;background-color: #f0f0f4">-->
              <!--<img src="../../../static/imgs/wb.png" width="571px"/>-->
            <!--</div>-->

          <!--</el-main>-->
        <!--</el-container>-->
      <!--</el-container>-->
    <!--</div>-->

  <!--</div>-->

    </div>
  </div>
</template>
<script>
  import elUpload from '../../components/elUpload.vue'
  export default {
    components: {elUpload},
    data () {
      return {
        activeIndex: '',
        leftTable:[
          {tyname:'首页', linkpath:'shouye'},
          {tyname:'我的收藏', linkpath:'wodeshoucang'},
          {tyname:'我的赞', linkpath:'wodezan'}
        ],
        leftTable2:[
          {tyname:'热门微博', linkpath:'remenweibo'},
          {tyname:'热门视频', linkpath:'remenshipin'}
        ],
        leftTable3:[
          {tyname:'好友圈', linkpath:'haoyouquan'},
          {tyname:'特别关注', linkpath:'tebieguanzhu'},
          {tyname:'V+微博', linkpath:'vweibo'},
          {tyname:'我的相册', linkpath:'shouye'},
          {tyname:'我的美图', linkpath:'wodeshoucang'},
          {tyname:'我的段子', linkpath:'wodezan'},
          {tyname:'热门微博', linkpath:'remenweibo'},
          {tyname:'高校', linkpath:'remenshipin'}
        ]

      }
    },
    methods: {
      handleSelect () {
      }
    }
  }
</script>
<style lang="less" scoped>
  #main-bg{
    width: 1020px;
    margin: 0 auto;
    height:100%;
    background-color: rgba(70,149,194,0.2);
    .content{
      width: 100%;
      min-height: 600px;
      margin: 0 auto;
      margin-top: 54px;
      .left-header{
        width: 150px;
        min-height: 600px;
        margin-top: 9px;
        float: left;
        .top-ul{
          border-color: #82b9dc;
          border-color: rgba(255,255,255,0.2);
          .ulstyle{
            .lve{
              height: 34px;
              line-height: 34px;
              display: block;
              font-size: 14px;
              font-weight: bold;
              text-decoration: none;
              overflow: hidden;
              color: white;
              padding-left: 12px;
              background:transparent;
              &:hover{
                background-color: #b4daf0;
              }
            }

          }
        }
      }
      .conter-header{
        float: left;
        width: 600px;
        margin-top: 9px;
        border-radius: 2px;
      }
    }



  }

</style>
<!--<style lang="less" scoped>-->
  <!--@import "../../common/stylus/base.less";-->
  <!--.imgclass{-->
    <!--margin:0 auto;-->
    <!--background-image: url("../../../static/imgs/bgimg.jpg");-->
    <!--background-size: cover;-->
    <!--.con{-->
      <!--width: 936px;-->
      <!--.topimg{-->
        <!--.uplode{-->
          <!--width: 100px;-->
          <!--height: 100px;-->
          <!--margin-top: 30px;-->
        <!--}-->
        <!--.s {-->
          <!--color: white;-->
          <!--font-size: 16px;-->
        <!--}-->
        <!--.su {-->
          <!--color: #f4f4f4;-->
          <!--font-size: 14px;-->
        <!--}-->
        <!--.but{-->
          <!--margin-top: 10px;-->
        <!--}-->
        <!--.foot-hea {-->
          <!--height: 36px;-->
          <!--border-radius: 3px;-->
          <!--color: #000;-->
          <!--border: 1px snow;-->
          <!--background-color: seashell;-->
          <!--.linkActiveClass{-->
            <!--color: #fd9827;-->
            <!--line-height: 36px;-->
          <!--}-->
          <!--.pass{-->
            <!--color: #888888;-->
            <!--margin: 0 20px;-->
          <!--}-->
          <!--.gl {-->
            <!--padding: 0 5%;-->
            <!--font-size: 1.09em;-->
            <!--margin-top: 20px;-->
            <!--color: #888888;-->
          <!--}-->
        <!--}-->
      <!--}-->
      <!--.center{-->
        <!--.onze{-->
          <!--border-radius: 3px;-->
          <!--width: 88%;-->
          <!--height: 60px;-->
          <!--background-color: white;-->
          <!--min-width: 300px;-->
          <!--text-align: inherit !important;-->
          <!--.thear_g {-->
            <!--height: 60px;-->
            <!--.WB_innerwrap {-->
              <!--height: 60px;-->

              <!--.S_line1 {-->
                <!--width: 100px;-->
                <!--height: 60px;-->
                <!--border: 1px;-->
                <!--border-right-color: #888888;-->
                <!--.S_txt1{-->
                  <!--width: 100px;-->
                  <!--height: 36px;-->

                  <!--.S_txt2 {-->
                    <!--width: 99px;-->
                    <!--height: 60px;-->
                  <!--}-->

                <!--}-->
              <!--}-->

            <!--}-->
          <!--}-->
        <!--}-->
        <!--.center-cen{-->
          <!--margin: 30px 0px;-->
          <!--border-radius: 3px;-->
          <!--width: 300px;-->
          <!--height: 156px;-->
          <!--background-color: white;-->
        <!--}-->
        <!--.foot-cen{-->
          <!--margin: 30px 0px;-->
          <!--border-radius: 3px;-->
          <!--width: 300px;-->
          <!--height: 179px;-->
          <!--background-color: white;-->
          <!--text-align: inherit !important;-->
        <!--}-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</style>-->

