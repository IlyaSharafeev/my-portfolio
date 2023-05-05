<template>
    <video ref="video" />
    <button class="button" @click="playing = !playing">Play / Pause</button>
    <span>{{ currentTime }} / {{ duration }}</span>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMediaControls } from '@vueuse/core'

const video = ref()
const { playing, currentTime, duration, volume } = useMediaControls(video, {
    src: "https://ilya-sharafeev-portfolio.s3.us-east-1.amazonaws.com/video.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJGMEQCIAJ5XcvLMGOeFh3V2ai9pOlK2%2Bxn7byl9C8eK7xgbeeKAiBkF82qOyh%2B%2BB39jWgf6KotZBOGSklpZZfDBSt48RPa4CroAggWEAAaDDEzNTc3NjA5OTkyOCIMseYFJTXuIimlI5urKsUCvB3OvIxsVsto%2BJwZklXsU7HVGQfW8wPuH7ZLlY6Ez%2Fgd%2BVlqVG2Wweanis0aLOn5DHB7MRRL2xSNctxe7adgDN%2FjFgNSp%2FwqGRUMT%2FmOiw0DXb85iwEw6h7m77NqLC%2F8GC2q%2FUCh68keAzWPf0jDFT%2FSr3iDV%2BYwQrHIdTYM0y4wjRWFiiaHjpT09LzwULYSD%2B5vrFjNmDuVDtl3E51Wbd6ppxQvbbAg59UQ8gb%2FOroF27dnUI4RA3nemEllOBb6n4DAmZgKozdsJjT0JdsMpSX%2F1fhzWJWurkw8LnRcJ%2FTicNfMfrdHqTxj992Y%2BVJX7XKQij2SbRkNOcTVvFo29kwKTAObxPOxTa42y9esk1fiPvDv3waMbMXCUF3xItrlCNZn0l4uU7aNL4EYPVoG9PMtGtxmX7qvl2no8sXyewr%2BLYn%2FczDcgNSiBjq0Aj%2F53bWUcmHL%2FcwQS0OC2aNSI%2BLzEFEVLAYc3booP2vxiIIYjHinawghdmLPMGYNb3ESfXiGEmx9sipikGQZwHCX1GyDtYUUBta%2FWqBJiyQeL9017ohoTwgnX2SoC1vQe%2FDwKTZexzGRp5%2FlLZ4oE%2BENscxxTmjAfRxGQc4dCrV2nNR%2BJBWjM2lRlKazi08AqIelISaeGqMl5gmEHhrI3ZGqIkXMi2BgcveJaADTNVhYFpsHww0MvJZiScLORX740lBkggoSDuUjaC36Pgg%2B%2Fuekxe0LiwY2yJ3wJ4JTciwMZFXlPqIkaiRS%2BqhXqJIqviq9wquMh2Hu3rzTdNowUDhQk4u7vCmdSHyh1wtLNr0LoLNpInhJQGfGvHsfTVJscevr5%2BAl5pFvXtpqO2PYlk0CigPc&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230505T134236Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAR7HHC3ZMNFKHACFT%2F20230505%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7f73fe300258e41895c2a67d0f0fac47d06b8c2c8f3ec1fb598be1ee1150534c"
})

// Change initial media properties
onMounted(() => {
    volume.value = 0.5
    currentTime.value = 60
})
</script>

<style scoped lang="scss">
.button {

}
</style>
