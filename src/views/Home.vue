<template>
  <div class="home">
    <Topnav />
    <div class="banner">
      <h1>Spike UI</h1>
      <h2>热爱可抵岁月漫长</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>

    <div class="features">
      <div class="item">
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <div class="item-desc">
          <div class="title">基于Vue3</div>
          <div class="d-x">使用了Vue3 Composition API</div>
        </div>
      </div>

      <div class="item">
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <div class="item-desc">
          <div class="title">基于Typescript</div>
          <div class="d-x">源代码采用Typescript书写（非常严格）</div>
        </div>
      </div>

      <div class="item">
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-tubiao06"></use>
        </svg>
        <div class="item-desc">
          <div class="title">代码易读</div>
          <div class="d-x">每个组件的源代码都极其简洁</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav
  },
}
</script>

<style lang="scss" scoped>
$h1_color: #590089;
$bg: #6e02c3;
$btn_color: #fff;
$border_radius: 4px;
.banner {
  padding: 150px 0 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  clip-path: ellipse(80% 60% at 50% 40%);
  background: linear-gradient(145deg, #efe4ff 0%, #cebbe8 100%);

  > h1 {
    text-align: center;
    font-size: 34px;
    line-height: 52px;
    color: $h1_color;
  }
  > h2 {
    font-size: 24px;
    line-height: 26px;
    color: $h1_color;
    margin: 12px 0 20px;
  }

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $bg;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 15px;
      color: $btn_color;
    }
  }
}

.features {
  display: flex;
  padding-top: 70px;
  .item {
    flex: 1;
    display: flex;
    justify-content: center;
    padding-left: 10px;
    > svg {
      width: 60px;
      height: 60px;
      margin-right: 15px;
    }
    .title {
      font-size: 28px;
      margin-bottom: 12px;
    }
    .d-x {
      font-size: 20px;
    }
  }
}

@media screen and (max-width: 500px) {
  .banner {
    padding: 100px 0 50px 0;
    > h2 {
      padding-right: 0;
      text-align: center;
      margin-bottom: 15px;
    }
    .btn {
      display: block;
      text-align: center;
      margin: 0 auto;
      width: 300px;
      padding: 0 40px 30px;
      .git {
        margin-right: 0;
        margin-bottom: 15px;
      }
      > a {
        display: inline-block;
        min-width: 8em;
      }
    }
  }
  .features {
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    .item {
      display: flex;
      text-align: left;
      justify-content: flex-start;
      width: 75%;
      padding: 30px 0px 0;

      > svg {
        margin-bottom: 10px;
        margin-right: 10px;
        height: 60px;
        width: 60px;
      }

      > .item-desc {
        .title {
          font-size: 16px;
        }
        .d-x {
          font-size: 14px;
          // line-height: 20px;
        }
      }
    }
  }
}
</style>
