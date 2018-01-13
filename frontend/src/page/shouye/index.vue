<template>
  <div id="masonry">
    <div class="item">
      <div class="item__content">
        这是一个首页（瀑布流式布局）
        <img style="width: 100px;height: 100px" src="../../../static/imgs/bgimg.jpg"/>
      </div>
    </div>
    <div class="item">
      <div class="item__content">
        这是一个首页（瀑布流式布局2）
        <img style="width: 100px;height: 100px" src="../../../static/imgs/bgimg.jpg"/>
      </div>
    </div>
    <div class="item">
      <div class="item__content">
        这是一个首页（瀑布流式布局3）\
        <img style="width: 100px;height: 100px" src="../../../static/imgs/bgimg.jpg"/>
      </div>
    </div>

  </div>
</template>
<style lang="less" scoped>
  #masonry{
    column-count: 1;
    column-gap: 10px;
    .item {
      /**/
      break-inside: avoid;
      box-sizing: border-box;
      padding: 10px;
    }
  }

  @media (min-width: 400px) { .masonry { column-count: 2;  } }
  @media (min-width: 1200px) { .masonry { column-count: 3;} }
</style>
