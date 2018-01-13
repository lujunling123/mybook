<template>
  <div id="hearder">
    <div class="header-conter">
      <div class="logo">
        <span class="imgsrc"></span>
      </div>
      <div class="search">
        <span class="search-sp">
          <input class="search-input" placeholder="大家正在搜"/>
          <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
        </span>
      </div>
      <div class="header-right">
        <div class="header-ng">
          <ul>
            <li v-for=" liv in livalue">
              <span class="glyphicon" :class="[liv.glicon, liv.bcolor]" aria-hidden="true"></span>
              <span :class="[liv.bcolor]">{{liv.glspan}}</span>
            </li>
          </ul>
          <span style="float: left;height: 28px;line-height: 28px">|</span>
          <div class="header-rg" v-for="rgv in rgvalue">
            <span class="glyphicon" :class="rgv" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data:function () {
      return{
        livalue:[
          {glicon:'glyphicon-home',glspan:'首页',bcolor:'fcolor'},
          {glicon:'glyphicon-expand',glspan:'视频',bcolor:'fcolor'},
          {glicon:'glyphicon-screenshot',glspan:'发现',bcolor:'hcolor'},
          {glicon:'glyphicon-sunglasses',glspan:'游戏',bcolor:'hcolor'},
          {glicon:'glyphicon-user',glspan:'个人中心',bcolor:'hcolor'}
        ],
        rgvalue:[
          'glyphicon-envelope',
          'glyphicon-cog',
          'glyphicon-edit'
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
  #hearder{
    width: 100%;
    height: 48px;
    background-color: #fff;
    border-top: 2px solid #fa7d3c;
    /*下拉页面定位不动*/
    position: fixed;
    box-shadow: 0 0 1px rgba(0,0,0,0.15);
    .header-conter{
      position: relative;
      width: 1000px;
      height: 48px;
      margin: 0 auto;
      .logo{
        top: auto;
        left: auto;
        margin: 0;
        background: none;
        float: left;
        .imgsrc{
          width: 140px;
          height: 48px;
          top: auto;
          /*光标*/
          cursor: pointer;
          display: block;
          /*no-repeat使图片居中*/
          background: url("../../../static/imgs/WB_logo.png") no-repeat 0 40%;
          /*图片去重复*/
          background-repeat: no-repeat;
        }
      }
      .search{
        /*设置div水平排列  也可以是display:inline-block;*/
        float: left;
        width: 218px;
        height: 30px;
        margin: 9px 0 0 10px;
        .search-sp{
          display: block;
          background-color: #f2f2f5;
          border: 1px solid #ccc;
          .search-input{
            background:none;
            outline: none;
            border:0;
            height: 28px;
            width: 175px;
            padding: 4px 33px 4px 10px;
            line-height: 28px;
            font-size: 12px;
            box-shadow: none;
            color: #808080;
            overflow: hidden;
            white-space: nowrap;
          }
          .glyphicon-search{
            width: 33px;
            height: 27px;
            line-height: 27px;
            left: 4px;
            top: 4px;
          }
        }
      }
      .header-right{
        width: 600px;
        float: right;
        .header-ng{
          float: left;
          height: 25px;
          margin: 11px 20px 11px 20px;
          ul{
            display: inline-block;
            float:left;
          }
          ul li {
            display: inline-block;
            list-style: none;
            margin-right: 26px;
            height: 30px;
            line-height: 30px;
            .hcolor{
              color: #330;
            }
            .fcolor{
              color: #fa7d3c;
            }
            .glyphicon-home {
              color: #696e78;
            }
          }
          .header-rg{
            display: inline;
            float: left;
            margin-left: 26px;
            height: 30px;
            line-height: 30px;
          }
        }
      }
    }
  }
</style>
