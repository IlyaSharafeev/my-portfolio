<template>
    <div class="header">
        <div class="logo">
            <img :src="headerLogo" alt="logo">
        </div>
        <div class="menu">
            <a href="#About" class="menu__item hover-underline-animation">About me</a>
            <a href="#Projects" class="menu__item hover-underline-animation">Projects</a>
            <a href="#experience" class="menu__item hover-underline-animation">Experience</a>
            <a href="#Feedback" class="menu__item hover-underline-animation">Feedback</a>
            <SwitcherTheme client:only="vue"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import SwitcherTheme from "./SwitcherTheme.vue";
import headerLogo from "../../assets/logo-portfolio.jpg"
</script>

<style scoped lang="scss">
//.hover-underline-animation (class)
@import "../styles/animations-underline";
@import "../styles/media-mixins";

.header {
    min-height: 110px;
    padding: 40px 28px 160px;
    display: none;
    justify-content: space-between;
    align-items: center;

    @include desktop-sm {
        display: flex;
    }

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
