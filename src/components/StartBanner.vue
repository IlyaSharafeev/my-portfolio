<template>
<div class="start-banner">
  <div class="title" data-aos="fade-left">I’m Ilya Sharafeev, a web-developer based in Ukraine.I love turning your ideas into reality. </div>
  <div class="photo" data-aos="fade-right">
      <img :src="imageSRC" alt="ilya-sharafeev photo"/>
  </div>
</div>
</template>

<script lang="ts" setup>
import imageSRC from "../../assets/ilya_square.png";
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
    }
  }

  .photo {
    width: 606px;
    position: absolute;
    top: 380px;
    right: 74px;
    margin-top: 130px;

    @include mobile-lg {
      position: initial;
      margin: 75px auto;
    }
  }
}
</style>
