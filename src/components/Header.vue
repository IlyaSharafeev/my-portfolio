<template>
    <div class="header">
        <div class="logo">
            <img v-if="isDark" src="../../assets/logo-portfolio.jpg" alt="logo">
            <img v-else src="../../assets/logo-portfolio-white.jpg" alt="logo">
        </div>
        <div class="menu">
            <div class="menu__item hover-underline-animation">Work</div>
            <div class="menu__item hover-underline-animation">About</div>
            <div class="menu__item hover-underline-animation">Contact</div>
            <div class="menu__item hover-underline-animation">Other</div>
            <SwitcherTheme client:only="vue"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import SwitcherTheme from "./SwitcherTheme.vue";

const isDark = ref(localStorage.getItem('dark'));
</script>

<style scoped lang="scss">
//.hover-underline-animation (class)
@import "../styles/animations-underline";

.header {
    min-height: 110px;
    padding: 40px 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        width: 110px;
    }

    .menu {
        display: flex;
        gap: 27.35px;

        .menu__item {
            font-family: 'Ysabeau', sans-serif;
            color: var(--color);
            font-weight: 400;
            font-size: 24.8668px;
            line-height: 28px;

            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>
