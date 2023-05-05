<template>
    <MazDialog v-model="$isCartOpen" title="Dialog Title" :scrollable="false">
        <VideoPlayer />
        <template #footer="{ close }">
            <MazBtn @click="closeDialog">
                Confirm
            </MazBtn>
        </template>
    </MazDialog>
</template>

<script lang="ts" setup>
import MazDialog from 'maz-ui/components/MazDialog'
import MazBtn from 'maz-ui/components/MazBtn'


import { useStore } from '@nanostores/vue';
import {isCartOpen} from "../store/global";
import VideoPlayer from "./VideoPlayer.vue";
const closeDialog = () => {
    isCartOpen.set(false);
}

const $isCartOpen = useStore(isCartOpen);
</script>

<style scoped lang="scss"></style>
