<template>
  <div class="layout">
    <Topnav
      toggleMenuButtonVisible
      class="nav"
    />
    <div class="content">
      <aside :class="{'aside-menu' : menuVisible}">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/into">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/fast">快速上手</router-link>
          </li>
          <li>
            <router-link to="/doc/use">使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>


<script lang="ts">
import Topnav from "../../components/Topnav.vue";
import { inject, Ref } from "vue";

export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    return { menuVisible };
  },
}
</script>


<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 75px;
    padding-left: 200px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
    &.aside-menu {
      transform: translateX(-200px);
    }
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: lightgreen;
  }
}
aside {
  background: #fff;
  width: 200px;
  padding: 76px 0 16px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      > a {
        padding: 7px 16px;
        display: block;
      }

      // vue自带选中a标签增加的class
      .router-link-active {
        position: relative;
        background: linear-gradient(
          145deg,
          rgb(239, 228, 255) 0%,
          rgb(206, 187, 232) 100%
        );

        &:after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          border-right: 3px solid rgb(110, 2, 195);
        }
      }
    }
  }
}
main {
  overflow: auto;
}

@media (max-width: 500px) {
  .aside-menu {
    transform: translateX(0px) !important;
    z-index: 1;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
}
</style>