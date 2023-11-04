<script setup lang="ts">
import { reactive, ref } from 'vue'


const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    page: {
        type: Object,
        required: false,
    },
    index: {
        type: Number,
        required: true,
    },
    bg_img: {
        type: String,
        required: false,
    },
})


</script>


<template>
    <div class="min-h-400 md:min-h-500 flex items-center justify-center relative">
        <div class="absolute top-0 left-0 w-full h-full">
            <img v-if="bg_img" class="w-full h-full object-cover object-center" :src="`https://contiki.uz/files/${bg_img}`" alt="">
            <img v-else-if="index == 1" class="w-full h-full object-cover object-center" src="../assets/images/page_bg_img_1.png" alt="">
            <img v-else-if="index == 2" class="w-full h-full object-cover object-center" src="../assets/images/page_bg_img_2.png" alt="">
            <img v-else-if="index == 3" class="w-full h-full object-cover object-center" src="../assets/images/page_bg_img_3.png" alt="">
            <img v-else-if="index == 4" class="w-full h-full object-cover object-center" src="../assets/images/page_bg_img_4.png" alt="">
        </div>

        <div class="gradient absolute top-0 left-0 w-full h-full"></div>
        <div class="my_container">
            <p class="text-white font-prosto_one text-28 md:text-38 lg:text-48 xl:text-56 2xl:text-64 text-center mb-16 relative uppercase">{{ name }}</p>
            <div class="flex items-center justify-center relative">
                <NuxtLink to="/all-trips" class="py-10 px-20 lg:py-12 lg:px-30 2xl:py-16 xl:px-35 rounded-30 bg-D73239 text-white text-15 text-center font-bold">SEE TRIPS</NuxtLink>
            </div>
        </div>
    </div>
</template>



<style scoped>
.gradient {
    background: linear-gradient(180deg, rgba(29, 35, 79, 0.56) 0%, rgba(29, 35, 79, 0.34) 50%, rgba(29, 35, 79, 0.56) 100%);
}
</style>