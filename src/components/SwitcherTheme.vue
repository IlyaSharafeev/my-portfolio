<template>
    <label class="switch">
        <input @input="changeTheme" type="checkbox" :checked="checkedInput">
        <span class="slider round"></span>
    </label>
</template>

<script setup>
import {ref} from "vue";

const checkedInput = ref(localStorage.getItem('dark') || false);
const html = document.getElementsByTagName( 'html' )[0];

if(localStorage.getItem('dark') == 'true') {
    document.body.setAttribute('dark', '');
    html.setAttribute("class", "dark")
} else {
    document.body.removeAttribute('dark');
    html.removeAttribute("class", "dark");
}

const changeTheme = () => {
    if (checkedInput.value) {
        checkedInput.value = false
        document.body.removeAttribute('dark');
        html.removeAttribute("class", "dark");
        localStorage.removeItem('dark');
        window.location.reload();
    } else {
        checkedInput.value = true;
        document.body.setAttribute('dark', '');
        html.setAttribute("class", "dark")
        localStorage.setItem('dark', 'true');
        window.location.reload();
    }
}
</script>

<style scoped>
.switch {
    position: relative;
    display: inline-block;
    width: 65px;
    height: 30px;
    border-radius: 25px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}


.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(https://img.freepik.com/free-vector/illustration-beautiful-summer-fields-landscape-with-dawn_87946-774.jpg?size=626&ext=jpg);
    background-size: cover;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 3px;
    background: linear-gradient(145deg, #cdd2d4, #f4f9fd);
    box-shadow: 1px 1px 2px #c2c6c9,
    -1px -1px 2px #ffffff;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider {
    background-image: url(https://st.depositphotos.com/1954507/4659/v/450/depositphotos_46593545-stock-illustration-vector-night-scene-with-house.jpg);
    background-size: cover;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(36px);
    -ms-transform: translateX(36px);
    transform: translateX(36px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
