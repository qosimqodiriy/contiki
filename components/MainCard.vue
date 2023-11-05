<script setup lang="ts">
import { reactive, ref } from 'vue'



const _hover = ref(false);
const props = defineProps({
    item: { type: Object, required: true }
})


</script>


<template>
    <div class="card flex flex-col bg-white w-full relative border rounded-6 border-grey shadow-md">
    <!-- <NuxtLink :to="`/tours/${item.id}`" class="card flex flex-col bg-white w-full relative border rounded-6 overflow-hidden border-grey shadow-md"> -->
        <img v-if="item.image && item.image[0] != null && item.image.length > 1" class="w-full aspect-5/4 shrink-0 object-cover object-center rounded-t-6 overflow-hidden" :src="`https://contiki.uz/files/${item.image[0]}`" alt="">
        <div v-else class="w-full aspect-5/4 bg-grey animate-pulse shrink-0"></div>

        <div class="content flex flex-col w-full h-full p-10 lg:p-16">
            <p class="text-18 font-space_grotesk font-semibold flex-auto mb-15 line-clamp-2 break-all">{{ item.name ? item.name[$i18n.locale] : '' }}</p>
            
            <div class="flex flex-nowrap items-center justify-between gap-5 lg:gap-10 mb-15 lg:mb-20 relative">
                <div class="flex items-center gap-2 2xl:gap-5">
                    <img class="w-22 h-22" src="../assets/icons/location.png" alt="">
                    <p class="text-14 leading-17 whitespace-nowrap">{{ item.countDay }} Days</p>
                </div>
                <div class="flex items-center gap-2 2xl:gap-5">
                    <img class="w-22 h-22" src="../assets/icons/location.png" alt="">
                    <p class="text-14 leading-17 whitespace-nowrap">{{ item.placesCount }} Places</p>
                </div>
                <div class="flex items-center gap-2 2xl:gap-5 relative cursor-pointer" @mouseenter="_hover = true" @mouseleave="_hover = false">
                    <img class="w-22 h-22" src="../assets/icons/location.png" alt="">
                    <p class="text-14 leading-17 whitespace-nowrap underline underline-offset-2 hover:no-underline">{{ item.country.length ? item.country.length : 0 }} Countries</p>
                </div>


                <div v-if="item.country.length && item.country.length > 0" class="absolute top-30 right-0 w-auto px-10 py-8 flex flex-wrap gap-10 gap-y-5 rounded-5 items-center bg-white border border-grey_40" :class="_hover ? 'country_active' : 'country_not_active'">
                    <p v-for="country in item.country" class="text-15 leading-120">{{ country.name[$i18n.locale] }}</p>

                    <div class="select_icon w-12 h-12 absolute -top-7 right-16 rotate-45 bg-white border-t border-l border-grey_40"></div>
                </div>
            </div>

            <div class="mb-15">
                <p class="line-clamp-2 break-all">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, blanditiis dolor. Dignissimos praesentium earum magnam natus, pariatur accusamus, rerum saepe amet neque dolorem culpa ex, molestias dolores impedit corrupti odio.</p>
            </div>

            <div class="flex flex-wrap items-center justify-between">
                <div class="">
                    <p class="leading-120 text-767676 text-13 font-semibold line-through mb-5">$1,945 pp</p>
                    <p class="leading-120 text-black text-15 font-bold">From $1,556 pp</p>
                </div>

                <NuxtLink :to="`/tours/${item.id}`" class="py-10 px-20 lg:py-12 lg:px-30 xl:px-35 rounded-30 bg-D73239 text-white text-14 text-center font-bold">VIEW TRIP</NuxtLink>
            </div>

                    
        </div>
    </div>
    <!-- </NuxtLink> -->
</template>



<style scoped>
* {
    transition: 0.5s;
}


.select_icon {
    clip-path: polygon(100% 0, 100% 15%, 15% 100%, 0 100%, 0 0);
}


/* Anime select box */
.country_active {
    opacity: 1;
    z-index: 20;
    transform: translateY(0);
}

.country_not_active {
    opacity: 0;
    z-index: -1;
    transform: translateY(10px);
}
</style>