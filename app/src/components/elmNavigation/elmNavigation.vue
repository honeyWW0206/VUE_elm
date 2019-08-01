<template>
  <div class="elmNavigation">
    <!--      导航-->
    <van-nav-bar title="" left-text="ele.me">
      <span slot="right" class="right-text">登录</span>
      <span slot="right" class="right-text">|</span>
      <span slot="right" class="right-text">注册</span>
    </van-nav-bar>

    <!--      main-->
    <div class="container">
      <div class="local">
        <span class="md-body-1">当前定位城市：</span>
        <span class="md-caption">定位不准时，请在城市列表中选择</span>
      </div>
      <div class="localCity">
        <span class="guess-city">{{guessCity || '未定位'}}</span>
        <van-icon name="arrow" color="#3190e8" tag="span" class="arrow-icon"></van-icon>
      </div>
      <!--        <section class="hot_city_container">-->
      <!--          <p class="city_title">热门城市</p>-->
      <!--          <ul class="citylistul clear">-->
      <!--            <li v-for="city in hotCity" :key="city.id">{{city.name}}</li>-->
      <!--            <div class="empty"></div>-->
      <!--          </ul>-->
      <!--        </section>-->

      <!--        <section class="group_city_container" v-for="(group, index) in groupCity" :key="index">-->
      <!--          <p class="city_title">{{index}}</p>-->
      <!--          <ul class="group-citylistul clear">-->
      <!--            <li v-for="city in group" :key="city.id">{{city.name | omitEd}}</li>-->
      <!--            <div class="empty"></div>-->
      <!--          </ul>-->
      <!--        </section>-->
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: "elmNavigation",
    created() {
      this.getCity();
    },
    data() {
      return {
        guessCity: null, // 定位城市
        hotCity: [], // 热门城市
        groupCity: [] // 所有城市
      }
    },
    methods: {
      getCity() {
        // 定位城市
        this.getGuessCity('guess');
        // 热门城市
        this.getGuessCity('hot');
        // 所有城市
        this.getGuessCity('group');
      },
      async getGuessCity(type) {
        if (type === 'guess') {
          let city = (await Vue.axios.get('/v1/cities', {params: {type: type}})).data;
          this.guessCity = city.name;
        } else if (type === 'hot') {
          let hot = (await Vue.axios.get('/v1/cities', {params: {type: type}})).data;
          this.hotCity = hot;
        } else if (type === 'group') {
          let group = (await Vue.axios.get('/v1/cities', {params: {type: type}})).data;

          // 排序
          const ordered = {};
          Object.keys(group).sort().forEach((key) => ordered[key] = group[key]);
          this.groupCity = ordered;
        }
      }
    },
    filters: {
      omitEd(value) {
        if (value.length > 5) {
          return value.replace(value.substr(5), '...');
        } else {
          return value;
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .elmNavigation {
    .van-nav-bar {
      color: #fff;
      background: #3190e8;

      .van-nav-bar__text {
        color: #fff;
        font-size: 0.164rem;
      }

      .van-nav-bar__right {
        .right-text {
          font-size: 0.152rem;
          font-weight: 300;
        }
      }
    }

    .container {
      margin-top: 0.0457rem;

      .local {
        padding: 0.18rem 0 0.05rem;
        display: flex;
        justify-content: space-around;
        align-content: center;
        background: #ffffff;

        .md-body-1 {
          font-size: 0.13rem;
          color: #666;
          padding-left: 0.1rem;
        }

        .md-caption {
          color: #9f9f9f;
          font-size: 0.12rem;
          padding-right: 0.1rem;
        }
      }

      .localCity {
        height: 0.42rem;
        /*padding: 0 0.105rem;*/
        width: 100%;
        background: #ffffff;
        border-top: 1px solid #e4e4e4;
        line-height: 0.42rem;
        font-size: 0.17rem;
        display: flex;
        justify-content: space-between;
        color: #3190e8;

        .guess-city {
          padding-left: 0.15rem;
        }
        .arrow-icon{
          padding-top: 0.12rem;
          padding-right: 0.15rem;
        }
      }

      .hot_city_container {
        width: 100%;

        .citylistul {
          list-style: none;
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          color: #3190e8;
          background: #ffffff;

          li {
            float: left;
            width: 25%;
            border: .025rem solid #e4e4e4;
            text-align: center;
            line-height: 0.41rem;
            background: #ffffff;
          }
        }
      }

      .city_title {
        margin: 0.14rem 0 0;
        padding-left: 0.05rem;
        color: #666;
        font-weight: 400;
        line-height: 0.36rem;
        text-indent: .45rem;
        border-top: 2px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        background: #ffffff;
      }

      .group-citylistul {
        list-style: none;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        color: #666666;
        background: #ffffff;

        li {
          float: left;
          width: 25%;
          border-left: .01rem solid #e4e4e4;
          border-bottom: .01rem solid #e4e4e4;
          text-align: center;
          line-height: 0.41rem;
          background: #ffffff;
        }
      }

      .empty {
        clear: both;
      }
    }
  }
</style>
