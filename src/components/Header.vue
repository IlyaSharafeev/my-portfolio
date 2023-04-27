<template>
    <div class="header">
        <div class="logo">
            <img src="https://ilya-sharafeev-portfolio.s3.us-east-1.amazonaws.com/logo-portfolio.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaDGV1LWNlbnRyYWwtMSJGMEQCIBGPWdUXVcPbxvE%2FTqMBF0zfkcm%2FzQIwu6kYw0EAV5u8AiBf%2BYSk92I734I6ZZmRte90sCaATyX1QWk2Aw3hGhBqDiroAghFEAAaDDEzNTc3NjA5OTkyOCIMmxm6vcneFaqNyljvKsUCPk%2FPROVJleNPKLwdHxg23wLSVJLEOathcN12h7ZkJh8yRFdM0dEMbm7xXnxOJB7NSDaosLCZMARJKYXgfGX35HsZ8Un4TEQmVjD47DF9%2FuxJeehDj71sm0P0uwowtLg%2Bw2iJUpJdOcsjzqFL6QgWEko4Qh3IIbIZhTHyZlnSPuVjYDYKkxwTZuj6Mtx6zGtx4d8NftD3CNO%2FWMxfHUuYWjCf6Bv9q%2FZl6RsemKrBdjOsHgtXIgjLxsK4lDMJuA%2FbBxzdgyl90Jk02%2FujE0y29A%2FOFoUF7yKMwmaH6qsV8HieiVaSVWADpiZZDdBybS%2FLUxegBpkd6Kgbf4wdLheT7nwykWXMh3D%2FGUSLrOhJ%2BcK0S0UmwuIVBWtB%2BzXqu5Qu5kxCu84x8ZHSRS8gILf7Ts5lX9oDTgM4%2BwEz3AVfN3JacLZ19TDGuqmiBjq0AmGQf6F%2FdLRjbuW6NAdS%2B9ON6XHBjHwezoIvGnQuxdwMF6MTkJCWNuteoXfSOva8FsOKM%2B%2FBLLF6qosBzb%2BZdVZWPFs7u2OEzCioo7NInOAnEb6f%2F%2BL9nLVJypynjCnrNsIDzNl3WAqIOyFThNPN3ZsDgvE1utGtdFKSmlI9uvcsF0urUYqUsdLYAxcQ1cHjuQ5dpwtdVA8aAHvKDwP4mc1vyIVtGvagfcE%2FTEi1dBKDE%2Bhh4vVUrFcVUfvizhRzuFiMPm8r7%2BB0PnxiBbuftqzA2hWaDn2VNKr6XBSWnEpPK%2FEp%2FHVH0JUTSlgbiJpq3lnwhJn37IJ%2FLLMhUig0cJ6Hy5FbvyjibDMxtDnWZzg6J%2FOUd7v7x8Pe9hwEif%2FIDBE%2FN4ziSIFnu0m7UVBpFKl47Sts&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230427T115828Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAR7HHC3ZMFYHC3GJC%2F20230427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cc7946624c79ef0436a4f8eb2bb59918e3896b19ef1f2bb88f4ca9ca49b5ad31" alt="logo">
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
import SwitcherTheme from "./SwitcherTheme.vue";
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
