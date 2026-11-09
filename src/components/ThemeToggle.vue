<script setup lang="ts">
import { onMounted, ref } from 'vue';

const dark = ref(false);

onMounted(() => {
  dark.value = document.documentElement.classList.contains('dark');
});

function toggle() {
  dark.value = !dark.value;
  document.documentElement.classList.toggle('dark', dark.value);
  try {
    localStorage.setItem('theme', dark.value ? 'dark' : 'light');
  } catch {
    // storage can be unavailable (private mode) — the theme still switches
  }
}
</script>

<template>
  <button
    type="button"
    class="rounded-full border border-zinc-300 px-3 py-1.5 text-sm text-zinc-700 transition hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-400"
    :aria-label="dark ? 'Switch to light theme' : 'Switch to dark theme'"
    @click="toggle"
  >
    {{ dark ? 'Light' : 'Dark' }}
  </button>
</template>
