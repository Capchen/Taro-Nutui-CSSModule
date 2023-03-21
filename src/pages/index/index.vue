<template>
  <view class="index">
    <nut-swiper height="200" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
      <nut-swiper-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </nut-swiper-item>
    </nut-swiper>
    <nut-row :gutter="10">
      <nut-col :span="6">
        <nut-avatar bg-color="#fff">
          <img
            :src="require('../../assets/images/tabbar/boluo.png')"
          />
        </nut-avatar>
      </nut-col>
      <nut-col :span="6">
        <nut-avatar bg-color="#fff">
          <img
            :src="require('../../assets/images/tabbar/juzi.png')"
          />
        </nut-avatar>
      </nut-col>
      <nut-col :span="6">
        <nut-avatar bg-color="#fff">
          <img
            :src="require('../../assets/images/tabbar/lanmei.png')"
          />
        </nut-avatar>
      </nut-col>
      <nut-col :span="6">
        <nut-avatar bg-color="#fff">
          <img
            :src="require('../../assets/images/tabbar/xigua.png')"
          />
        </nut-avatar>
      </nut-col>
    </nut-row>  
    <!-- <nut-grid>
      <nut-grid-item>
        <nut-avatar bg-color="#fff">
          <img
            :src="require('../../assets/images/tabbar/boluo.png')"
          />
        </nut-avatar>
      </nut-grid-item>
      <nut-grid-item>
        <nut-avatar bg-color="#fff">
          <img
            :src="require('../../assets/images/tabbar/juzi.png')"
          />
        </nut-avatar>
      </nut-grid-item>
      <nut-grid-item>
        <nut-avatar bg-color="#fff">
          <img
            :src="require('../../assets/images/tabbar/lanmei.png')"
          />
        </nut-avatar>
      </nut-grid-item>
      <nut-grid-item>
        <nut-avatar bg-color="#fff">
          <img
            :src="require('../../assets/images/tabbar/liulian.png')"
          />
        </nut-avatar>
      </nut-grid-item>
      <nut-grid-item>
        <nut-avatar bg-color="#fff">
          <img
            :src="require('../../assets/images/tabbar/xigua.png')"
          />
        </nut-avatar>
      </nut-grid-item>
      <nut-grid-item>
        <nut-avatar bg-color="#fff">
          <img
            :src="require('../../assets/images/tabbar/xiangjiao.png')"
          />
        </nut-avatar>
      </nut-grid-item>
    </nut-grid> -->
  </view>
</template>

<script setup>
import { reactive, toRefs } from 'vue';
import styles from './Index.module.scss';
import { Shop, Jdl, Comment } from '@nutui/icons-vue-taro';

const list = reactive([
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
])

</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
