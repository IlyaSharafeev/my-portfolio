<template>
    <div class="frame">
        <ul class="tabbar shadow-2xl">
            <li @click="clickOnItem">
                <a href="#" class="box">
                    <div>
                        <svg>
                            <use xlink:href="#box"/>
                        </svg>
                        <em></em>
                    </div>
                </a>
            </li>
            <li class="active" @click="clickOnItem">
                <a href="#" class="home">
                    <div>
                        <svg>
                            <use xlink:href="#home"/>
                        </svg>
                    </div>
                </a>
            </li>
            <li @click="clickOnItem">
                <a href="" class="calendar">
                    <div>
                        <svg>
                            <use xlink:href="#calendar"/>
                        </svg>
                        <em></em>
                    </div>
                </a>
            </li>
        </ul>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="box">
            <path
                d="M4.2715356,6.86557078 C3.79533783,7.1301251 3.5,7.63205601 3.5,8.1768067 L3.5,15.8231933 C3.5,16.367944 3.79533783,16.8698749 4.2715356,17.1344292 L11.2715356,21.0233181 C11.7245694,21.2750036 12.2754306,21.2750036 12.7284644,21.0233181 L19.7284644,17.1344292 C20.2046622,16.8698749 20.5,16.367944 20.5,15.8231933 L20.5,8.1768067 C20.5,7.63205601 20.2046622,7.1301251 19.7284644,6.86557078 L12.7284644,2.97668189 C12.2754306,2.72499645 11.7245694,2.72499645 11.2715356,2.97668189 L4.2715356,6.86557078 Z"></path>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="home">
            <path
                d="M3.66781808,10.0753614 C3.5610739,10.1702451 3.5,10.3062472 3.5,10.4490661 L3.5,20 C3.5,20.8284271 4.17157288,21.5 5,21.5 L19,21.5 C19.8284271,21.5 20.5,20.8284271 20.5,20 L20.5,10.4490661 C20.5,10.3062472 20.4389261,10.1702451 20.3321819,10.0753614 L12.9965458,3.55479593 C12.4282167,3.04961457 11.5717833,3.04961457 11.0034542,3.55479593 L3.66781808,10.0753614 Z"></path>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="calendar">
            <path
                d="M5,4.5 C4.17157288,4.5 3.5,5.17157288 3.5,6 L3.5,19 C3.5,19.8284271 4.17157288,20.5 5,20.5 L19,20.5 C19.8284271,20.5 20.5,19.8284271 20.5,19 L20.5,6 C20.5,5.17157288 19.8284271,4.5 19,4.5 L5,4.5 Z"></path>
        </symbol>
    </svg>

    <!-- dribbble -->
    <a class="dribbble" href="https://dribbble.com/shots/7030278-Tab-bar-animation" target="_blank"><img
        src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg"
        alt=""></a>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";

onMounted(() => {
    const ul = document.querySelector(".tabbar") as HTMLElement;
    const tempLi = document.querySelector("li.active") as HTMLElement;
    ul.style.setProperty('--x', tempLi.getBoundingClientRect().left + tempLi.offsetWidth / 2 + 'px')
})
const clickOnItem = (e: any) => {
    e.preventDefault();

    const ul = document.querySelector(".tabbar") as HTMLElement;
    const li = e.target.closest('li') as HTMLElement;
    const liItems = ul.querySelectorAll("li");

    ul.style.setProperty('--x-n', li.getBoundingClientRect().left + li.offsetWidth / 2 + 'px')

    if(!ul.classList.contains('move') && !li.classList.contains('active')) {
        for(let i = 0; i < liItems.length; i++) {
            liItems[i].classList.remove('active');
        }

        ul.style.setProperty('--x-n', li.getBoundingClientRect().left + li.offsetWidth / 2 + 'px')
        ul.style.left = li.style.left + 'px';
        li.classList.add('move');
        ul.classList.add('move');

        setTimeout(() => {
            ul.classList.remove('move');
            li.classList.remove('move');
            li.classList.add('active');
            ul.style.setProperty('--x', li.getBoundingClientRect().left + li.offsetWidth / 2 + 'px')


        }, 1200)
    }
}
</script>

<style scoped lang="scss">
@import "../styles/media-mixins";

.tabbar {
    --primary: #275EFE;
    --background: #e7e7e7;
    --icon-active: #fff;
    --x: 64px;
    width: 100%;
    z-index: 999;
    margin: 0;
    padding: 0 16px;
    border-radius: 0 0 28px 28px;
    list-style: none;
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    background: var(--background);

    &:before,
    &:after {
        content: '';
        position: absolute;
        left: 0;
        border-radius: 50%;
        transform: translateX(var(--x));
    }

    &:before {
        width: 64px;
        height: 64px;
        margin-left: -32px;
        background: var(--primary);
        top: -16px;
        z-index: 1;
    }

    &:after {
        width: 84px;
        height: 84px;
        margin-left: -42px;
        background: rgba(255, 255, 255, .08);
        top: -26px;
    }

    li {
        a {
            display: block;
            padding: 24px 0;
            backface-visibility: hidden;
            transition: transform .2s ease;
            -webkit-tap-highlight-color: transparent;

            div {
                --y: 0;
                width: 32px;
                height: 32px;
                margin: 0 auto;
                position: relative;
                z-index: 1;
                backface-visibility: hidden;
                transform: translateY(var(--y));

                svg {
                    display: block;
                    width: 32px;
                    height: 32px;
                    fill: rgba(255, 255, 255, 0);
                    stroke-width: 1px;
                    stroke: var(--primary);
                }

                &:before {
                    --s-x: 1;
                    --s-y: 1;
                    content: '';
                    display: block;
                    position: absolute;
                    z-index: 1;
                    transform: scaleX(var(--s-x)) scaleY(var(--s-y));
                }
            }

            &.box {
                div {
                    &:before {
                        --s-x: .75;
                        left: 50%;
                        margin-left: -1px;
                        width: 2px;
                        height: 12px;
                        bottom: 4px;
                        border-radius: 1px;
                        background: var(--primary);
                    }

                    em {
                        --s-x: 1;
                        --s-y: 1;
                        display: block;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        z-index: 1;

                        &:before,
                        &:after {
                            --r: 0deg;
                            content: '';
                            display: block;
                            height: 2px;
                            border-radius: 1px;
                            width: 13px;
                            background: var(--primary);
                            position: absolute;
                            bottom: -1px;
                            transform: rotateZ(var(--r)) translateY(1px) scaleY(.75);
                        }

                        &:before {
                            --r: 30deg;
                            right: -1px;
                            transform-origin: 100% 50%;
                        }

                        &:after {
                            --r: -30deg;
                            left: -1px;
                            transform-origin: 0% 50%;
                        }
                    }
                }
            }

            &.home {
                div {
                    &:before {
                        --s-x: .75;
                        --s-y: .75;
                        border: 2px solid var(--primary);
                        border-bottom: 0;
                        width: 12px;
                        height: 17px;
                        border-radius: 2px 2px 0 0;
                        left: 50%;
                        bottom: 1px;
                        margin-left: -6px;
                        transform: scale(.75);
                    }
                }
            }

            &.calendar {
                div {
                    &:before {
                        --s-y: .75;
                        height: 2px;
                        width: 22px;
                        background: var(--primary);
                        left: 50%;
                        top: 12px;
                        margin-left: -11px;
                    }

                    em {
                        display: block;
                        position: absolute;
                        top: 3px;
                        left: 50%;

                        &:before,
                        &:after {
                            content: '';
                            display: block;
                            width: 2px;
                            border-radius: 1px;
                            height: 7px;
                            background: var(--primary);
                            position: absolute;
                            top: 0;
                            backface-visibility: hidden;
                            transform: scaleX(.75);
                            transition: background .4s ease;
                        }

                        &:before {
                            right: -6px;
                        }

                        &:after {
                            left: -6px;
                        }
                    }
                }
            }
        }

        &.active {
            a {
                div {
                    --y: -24px;

                    svg {
                        fill: var(--icon-active);
                    }
                }

                &.calendar {
                    em {
                        &:before,
                        &:after {
                            background: var(--icon-active);
                        }
                    }
                }
            }
        }

        &:not(.active) {
            a {
                div {
                    transition: transform .4s ease;

                    svg {
                        transition: fill .4s ease;
                    }
                }

                &:active {
                    transform: scale(.92);
                }
            }
        }

        &.move {
            a {
                div {
                    animation: icon 1.2s linear forwards;

                    svg {
                        animation: svg 1.2s linear forwards;
                    }
                }

                &.box {
                    div {
                        &:before {
                            animation: element-far 1.2s linear forwards;
                        }

                        em {
                            animation: element-close 1.2s linear forwards;
                        }
                    }
                }

                &.home {
                    div {
                        &:before {
                            animation: element-close 1.2s linear forwards;
                        }
                    }
                }

                &.calendar {
                    div {
                        &:before {
                            animation: element-close 1.2s linear forwards;
                        }

                        em {
                            animation: calendar-2 1.2s linear forwards;

                            &:before,
                            &:after {
                                animation: calendar-3 1.2s linear forwards;
                            }
                        }
                    }
                }
            }
        }
    }

    &.move {
        &:before {
            animation: move 1.2s linear forwards;
        }

        &:after {
            animation: move-after 1.2s linear forwards;
        }
    }
}

.frame {
    width: 100%;
    height: 240px;
    overflow: hidden;
    display: none;
    align-items: flex-end;
    z-index: 999;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;

    @include mobile-lg {
        display: flex;
    }
}

@keyframes move {
    10%,
    15% {
        transform: translate(var(--x), 84px);
    }
    30% {
        transform: translate(var(--x-n), 84px);
    }
    42%,
    70% {
        transform: translate(var(--x-n), -16px);
    }
    85% {
        transform: translate(var(--x-n), 4px);
    }
    100% {
        transform: translate(var(--x-n), 0);
    }
}

@keyframes move-after {
    10%,
    15% {
        transform: translate(var(--x), 84px) scale(.82);
    }
    30% {
        transform: translate(var(--x-n), 84px) scale(.82);
    }
    42% {
        transform: translate(var(--x-n), -16px) scale(.82);
    }
    60% {
        transform: translate(var(--x-n), -16px) scale(1);
    }
    70% {
        transform: translate(var(--x-n), -16px) scale(1);
    }
    85% {
        transform: translate(var(--x-n), 4px) scale(1);
    }
    100% {
        transform: translate(var(--x-n), 0) scale(1);
    }
}

@keyframes icon {
    30% {
        transform: translateY(0px);
    }
    40%,
    70% {
        transform: translateY(-100px);
    }
    85% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(-24px);
    }
}

@keyframes svg {
    30% {
        fill: rgba(255, 255, 255, 0);
        transform: translateY(0);
    }
    40% {
        fill: rgba(255, 255, 255, 0);
        transform: translateY(-36px);
    }
    70% {
        fill: rgba(255, 255, 255, 0);
        transform: translateY(-56px);
    }
    80% {
        fill: rgba(255, 255, 255, 0);
    }
    85% {
        fill: var(--icon-active);
        transform: translateY(0);
    }
    100% {
        fill: var(--icon-active);
        transform: translateY(0);
    }
}

@keyframes element-close {
    30% {
        transform: translateY(0) scaleX(var(--s-x)) scaleY(var(--s-y));
    }
    40% {
        transform: translateY(-16px) scaleX(var(--s-x)) scaleY(var(--s-y));
    }
    70% {
        transform: translateY(-28px) scaleX(var(--s-x)) scaleY(var(--s-y));
    }
    85% {
        transform: translateY(0) scaleX(var(--s-x)) scaleY(var(--s-y));
    }
    100% {
        transform: translateY(0) scaleX(var(--s-x)) scaleY(var(--s-y));
    }
}

@keyframes element-far {
    30% {
        transform: translateY(0) scaleX(var(--s-x)) scaleY(var(--s-y));
    }
    40% {
        transform: translateY(-4px) scaleX(var(--s-x)) scaleY(var(--s-y));
    }
    70% {
        transform: translateY(-12px) scaleX(var(--s-x)) scaleY(var(--s-y));
    }
    85% {
        transform: translateY(0) scaleX(var(--s-x)) scaleY(var(--s-y));
    }
    100% {
        transform: translateY(0) scaleX(var(--s-x)) scaleY(var(--s-y));
    }
}

@keyframes calendar-2 {
    30% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(0px);
    }
    70% {
        transform: translateY(-8px);
    }
    85% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes calendar-3 {
    75% {
        background: var(--primary);
    }
    80%,
    100% {
        background: var(--icon-active);
    }
}

html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}

* {
    box-sizing: inherit;

    &:before,
    &:after {
        box-sizing: inherit;
    }
}

// Center & dribbble
body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #242836;

    .dribbble {
        position: fixed;
        display: block;
        right: 20px;
        bottom: 20px;

        img {
            display: block;
            height: 28px;
        }
    }
}
</style>
