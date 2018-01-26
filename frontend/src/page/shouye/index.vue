<template>
  <div id="masonry">
    <div class="content-top">
      <div class="item">
        <div class="item__content">
            <img class="con" src="../../../static/imgs/WechatIMG91.jpeg"/>
          <span class="con-left">
            <router-link class='router-link-active' :to="{name:'/'}">{{atitle}}</router-link>
            <router-link class='router-link-active margin-left' :to="{name:'/'}">{{a2title}}</router-link>
          </span>
        </div>
        <div class="item-content">
          <textarea class="OwO-textarea text-content">aa</textarea>
        </div>
        <div class="OwO Oclass"></div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  #masonry{
    .content-top{
      column-count: 1;
      column-gap: 10px;
      height:165px;
      background-color: white;
      border-radius: 2px;
      .item {
        break-inside: avoid;
        box-sizing: border-box;
        padding: 10px;
        .con{
          background-repeat: no-repeat;
        }
        .con-left{
          display: inline-block;
          float: right;
          height:23px;
          line-height: 23px;
          .router-link-active{
            color: #eb7350;
            font-size: 10px;
            &:hover{
              text-decoration: none;
            }
          }
          .margin-left{
            margin-left: 8px;
          }
        }
      }
      .item-content{
        clear: both;
        margin: 7px 0 0;
        padding: 5px;
        border: 1px solid #cccccc;
        height:80px;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.15) inset;
        text-align: center;
        .text-content{
          background: transparent;
          width: 100%;
          height: 68px;
          font-size: 14px;
          line-height: 18px;
          overflow-x: hidden;
          overflow-y: auto;
          word-wrap: break-word;
          outline: none;
          border: none;
          padding: 0;
          box-shadow: none;
          &:focus{
            background: white;
          }
        }
      }
      .Oclass{
        width: 20px;
        height: 20px;
      }
    }
  }

  @media (min-width: 400px) { .masonry { column-count: 2;  } }
  @media (min-width: 1200px) { .masonry { column-count: 3;} }
</style>
<script>
  export default {
    data(){
      return{
        atitle:'微博网友举报男子猥亵儿童，官方通报：依法刑事拘留>>',
        a2title:'热门微博',
        textcontent:'',
        OwO:{
          logo: 'OωO表情',
          container: document.getElementsByClassName('OwO')[0],
          target: document.getElementsByClassName('OwO-textarea')[0],
          api: './OwO.json',
          position: 'down',
          width: '100%',
          maxHeight: '250px'
        }
      }
    }
  }
</script>
