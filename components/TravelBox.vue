<script setup lang="ts">
import 'swiper/css';
import { ref } from 'vue';
import axios from 'axios';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Keyboard, FreeMode, Autoplay, Navigation } from 'swiper/modules';




let prev: any, next: any;
const modules = [Keyboard, FreeMode, Autoplay, Navigation ];

const data = ref<{ list: [], count: number, loading: Boolean }>({ 
    list: [],
    count: 0,
    loading: false,
})



function clickPrev() {
    prev.click();
}

function clickNext() {
    next.click()
}


async function getItems() {
    data.value.loading = true;
    const response = await axios.get('https://api.contiki.uz/user/continent');
    data.value.loading = false;

    // console.log("Travel box");
    // console.log(response.data.body);
    data.value.list = response?.data?.body?.data;
    data.value.count = response?.data?.body?.total;


    setTimeout(() => {
        let element = document.querySelector('.travel_box') as any;
        prev = element.children[1];
        next = element.children[2];

        prev.style.display = 'none';
        next.style.display = 'none';
    }, 50);

}




getItems();
</script>



<template>
    <div class="my_container">
        <div class="mb-32">
            <div class="flex items-center justify-between gap-20 mb-15">
                <h2 class="title_text mb-5">Where we go</h2>

                <div class="flex items-center gap-15 border border-grey_40 p-10 py-5 shrink-0">
                    <img @click="clickPrev()" class="w-30 h-30 lg:w-36 lg:h-36 p-2 lg:p-4 cursor-pointer" src="../assets/icons/arrow-left.png" alt="">
                    <div class="w-1 h-24 bg-grey_40"></div>
                    <img @click="clickNext()" class="w-30 h-30 lg:w-36 lg:h-36 p-2 lg:p-4 cursor-pointer" src="../assets/icons/arrow-right.png" alt="">
                </div>
            </div>
            
            <p class="font-raleway">Trips for anyone to explore the world</p>
        </div>

        <!-- :freeMode="false" -->
        <swiper 
            :speed="700"
            :autoplay="{
                delay: 3700,
                disableOnInteraction: false,
            }"
            :pagination="{
                clickable: true,
            }"
            :loop="false"
            :navigation="true"
            :spaceBetween="8" 
            :slidesPerView="2" 
            :slidesPerGroupSkip="1" 

            :breakpoints="{
                '769': {
                    spaceBetween: 12,
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
                '1025': {
                    spaceBetween: 16,
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                },
                '1337': {
                    spaceBetween: 20,
                    slidesPerView: 5,
                    slidesPerGroup: 1,
                },
                '1536': {
                    spaceBetween: 24,
                    slidesPerView: 6,
                    slidesPerGroup: 1,
                },
            }" 
            :modules="modules" 
            class="travel_box mySwiper">

            <swiper-slide v-for="(item, index) in data.list" :key="index">
                <travel-card :item="item" />
            </swiper-slide>
        </swiper>
    </div>
</template>