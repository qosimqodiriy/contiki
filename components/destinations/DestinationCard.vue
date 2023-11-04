<script lang="ts" setup>
const props = defineProps({
    item: { type: Object, required: true }
})


</script>


<template>
    <NuxtLink :to="`/destinations/${item.id}`" class="card aspect-3/2 flex flex-col items-center justify-center bg-white w-full border rounded-6 overflow-hidden border-grey shadow-lg relative">
        <img v-if="item.image" class="absolute top-0 left-0 w-full h-full object-cover object-center" :src="`https://contiki.uz/files/${item.image}`" alt="">

        <div class="relative flex flex-col items-center p-20">
            <h2 class="text-28 md:text-32 lg:text-36 xl:text-42 font-bold text-white mb-15 lg:mb-30 uppercase text-center leading-110">{{ item.name ? item.name[$i18n.locale] : '' }}</h2>
            <div class="button inline-block mx-auto py-8 pt-10 px-20 lg:py-10 lg:pt-12 lg:px-30 xl:py-12 xl:pt-14 xl:px-35 rounded-30 bg-white text-15 text-center font-bold">FIND OUT MORE</div>
        </div>
        <!-- <p class="text-18 font-space_grotesk font-semibold mb-15">{{ item.name[$i18n.locale] }}</p> -->
    </NuxtLink>
</template>




<style scoped>
* {
    transition: 0.5s;
}

.card {
    background: linear-gradient(180deg, rgba(29, 35, 79, 0.56) 0%, rgba(29, 35, 79, 0.34) 50%, rgba(29, 35, 79, 0.56) 100%);
}
</style>