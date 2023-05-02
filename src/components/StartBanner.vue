<template>
<div class="start-banner">
  <div class="title" data-aos="fade-left" v-html="title"></div>
  <div class="photo" data-aos="fade-right">
      <img :src="imageSRC" alt="ilya-sharafeev photo"/>
  </div>
</div>
</template>

<script lang="ts" setup>
import imageSRC from "../../assets/ilya_square.png";
import {ref} from "vue";

const title = ref(`Greetings! My name is Ilya, I'm from Ukraine! At the age of 18, I started to implement the simple ideas of my friends with the help of web programming, and now <br> I am already a web developer in the company <a href="https://onix-systems.com/" target="_blank" style="font-weight: bold">Onix Systems</a>`);
</script>

<style scoped lang="scss">
@import "../styles/media-mixins";

.start-banner {
  .title {
    font-weight: 400;
    font-size: 69px;
    line-height: 79px;
    font-family: 'Ysabeau', sans-serif;
    color: var(--color);
    width: 773px;
    position: relative;
    z-index: 2;

    @include mobile-lg {
      margin-top: initial;
      margin-left: auto;
      margin-right: auto;
      font-size: 24px;
      line-height: 47px;
      text-align: center;
      width: initial;
    }
  }

  .photo {
    max-width: 606px;
    position: absolute;
    top: 380px;
    right: 74px;
    margin-top: 130px;

    img {
      border-radius: 50%;
    }

    @include mobile-lg {
      max-width: 400px;
      position: initial;
      margin: 75px auto;
    }
  }
}
</style>
