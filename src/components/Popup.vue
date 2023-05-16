<template>
    <MazDialog v-model="$isCartOpen" title="Dialog Title" :scrollable="false" @close="closeDialog">
        <VideoPlayer />
    </MazDialog>
</template>

<script lang="ts" setup>
import MazDialog from 'maz-ui/components/MazDialog'


import { useStore } from '@nanostores/vue';
import {isCartOpen} from "../store/global";
import VideoPlayer from "./VideoPlayer.vue";
const closeDialog = () => {
    isCartOpen.set(false);
}

const $isCartOpen = useStore(isCartOpen);
</script>
