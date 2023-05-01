<template>
  <div class="projects">
      <div class="title" :id="title" :class="{'typing-demo': isVisible}" v-element-visibility="onElementVisibility" :style="{'margin-top': top + 'px'}">{{title}}</div>
      <div class="border"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { vElementVisibility } from '@vueuse/components'

const isVisible = ref(false)

function onElementVisibility(state: boolean) {
    isVisible.value = state
}

defineProps({
    title: String,
    top: {
        type: String,
        default: 282
    }
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
