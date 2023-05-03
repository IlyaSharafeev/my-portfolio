<template>
    <div class="wrapper">
        <div class="menu" id="menu" ref="menu">
            <SwitcherTheme class="switcher-theme"/>
            <div class="close-button"></div>
            <nav class="menu-list">
                <div @click="clickOnListItem" id="about">About</div>
                <div @click="clickOnListItem" id="projects">Projects</div>
                <div @click="clickOnListItem" id="experience">Experience</div>
                <div @click="clickOnListItem" id="feedback">Feedback</div>
            </nav>
        </div>
    </div>
</template>

<script lang="ts" setup>
import SwitcherTheme from "./SwitcherTheme.vue";
import {ref} from "vue";

const menu = ref(null) as any;

const clickOnListItem = (e: any) => {
    menu.value.classList.remove("menu_active");

    const aboutBlock = document.querySelector("#about") as HTMLElement;
    const projectsBlock = document.querySelector("#projects") as HTMLElement;
    const experienceBlock = document.querySelector("#experience") as HTMLElement;
    const feedbackBlock = document.querySelector("#feedback") as HTMLElement;

    console.log(e.target.id);


    switch (e.target.id) {
        case "about": {
            setTimeout(() => {
                aboutBlock.scrollIntoView( {block: "start", inline: "start", behavior: "smooth"});
            }, 700)
            break;
        }
        case "projects": {
            setTimeout(() => {
                projectsBlock.scrollIntoView( {block: "start", inline: "start", behavior: "smooth"});
            }, 700)
            break;
        }
        case "experience": {
            console.log('123');
            setTimeout(() => {
                experienceBlock.scrollIntoView( {block: "start", inline: "start", behavior: "smooth"});
            }, 700)
            break;
        }
        case "feedback": {
            console.log('123');
            setTimeout(() => {
                feedbackBlock.scrollIntoView( {block: "start", inline: "start", behavior: "smooth"});
            }, 700)
            break;
        }
    }
}
</script>

<style scoped lang="scss">
@import "../styles/media-mixins";

.wrapper {
    position: relative;
    overflow-x: hidden;
    display: none;

    @include mobile-lg {
        display: initial;
    }
}

.menu {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background);
    transition: 0.5s;
    transform: translateX(-100%);
}

.menu_active {
    transform: translateX(0%);
}

.menu-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50%;
    flex-direction: column;
    margin-bottom: 110px;
    font-size: 26px;
    font-weight: bold;
    letter-spacing: 5px;
    z-index: 3;
}

.menu-list a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 900;
    color: var(--color);
}

.switcher-theme {
    position: absolute !important;
    top: 25px;
    left: 30px;
}
</style>
