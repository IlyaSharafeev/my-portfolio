<template>
  <div class="projects">
      <div class="title">{{title}}</div>
      <div class="border"></div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
    title: String
})
</script>

<style scoped lang="scss">
.projects {
  display: flex;
  gap: 27px;
  flex-direction: column;

  .title {
    margin-top: 282px;
    font-weight: 400;
    font-size: 45.0633px;
    line-height: 52px;
    color: var(--color);
    text-transform: uppercase;
  }

  .border {
    border: 2px solid var(--border);
    margin-bottom: 102.58px;
  }
}
</style>
