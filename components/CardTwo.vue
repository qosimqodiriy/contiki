<template>
    <NuxtLink :to="`/tours/5`" class="flex flex-col w-full relative">
        <p class="price text-12 md:text-14 xl:text-16 px-16 py-6 text-white font-interfaces absolute top-16 right-16 lg:top-20 lg:right-20 xl:top-24 xl:right-24">6.200.000</p>
        <img class="aspect-2/3 object-cover object-center" src="../assets/images/card_bg_img_1.png" alt="">

        <div class="absolute bottom-16 left-16 lg:bottom-20 lg:left-20 xl:bottom-24 xl:left-24">
            <p class="text-12 lg:text-14 font-prosto_one text-white">7 дней</p>
            <h2 class="text-18 lg:text-22 font-prosto_one text-white">Шарм-эш-Шейх</h2>
        </div>
    </NuxtLink>
</template>



<!-- <script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
}
</script> -->


<style scoped>
.price {
    backdrop-filter: blur(21px);
    background: rgba(29, 35, 79, 0.16);
}
</style>