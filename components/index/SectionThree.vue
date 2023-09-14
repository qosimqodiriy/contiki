<template>
    <div class="bg-white py-56 md:py-64 lg:py-74 xl:py-95 2xl:py-112">
        <div class="my_container">
            <h2 class="text-32 lg:text-40 text-center font-prosto_one mb-8 text-black">{{ $t('text_7') }}</h2>
            <p class="text-18 text-center text-grey_64">{{ $t('text_8') }}</p>
            <img class="h-4 lg:h-5 2xl:h-6 mx-auto mt-16 lg:mt-24 mb-24 lg:mb-40" src="../../assets/images/line_img.png" alt="">

            <swiper 
                :speed="1000"
                :autoplay="{
                    delay: 3700,
                    disableOnInteraction: false,
                }"
                :pagination="{
                    clickable: true,
                }"
                :navigation="true"
                :spaceBetween="8" 
                :slidesPerView="1" 
                :slidesPerGroupSkip="1" 

                :breakpoints="{
                    '769': {
                        spaceBetween: 12,
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                    },
                    '1025': {
                        spaceBetween: 16,
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                    },
                    '1337': {
                        spaceBetween: 20,
                        slidesPerView: 4,
                        slidesPerGroup: 1,
                    },
                }" 
                :modules="modules" 
                class="mySwiper">

                <swiper-slide v-for="item in data" :key="item.id">
                    <card-two :item="item" />
                </swiper-slide>
                

            </swiper>

            <NuxtLink to="/tours" class="flex justify-center mt-24 lg:mt-48">
                <div class="w-full md:w-auto p-5 border border-orange">
                    <p class="text-12 md:text-14 lg:text-16 font-prosto_one text-center py-14 px-52 lg:py-16 lg:px-50 bg-orange text-white">{{ $t('text_9') }}</p>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>


<script>
import 'swiper/css';
import axios from 'axios'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Keyboard, FreeMode, Autoplay, Navigation } from 'swiper/modules';

export default {
    data() {
        return {
            data: [],
            data_count: 0,
        }
    },
    
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        return {
            modules: [Keyboard, FreeMode, Autoplay, Navigation ],
        };
    },

    methods: {
        async getItems() {
            this.loading = true;
            const response = await axios.get('https://api.contiki.uz/user/tour/all');
            this.loading = false;
            // console.log("Tour/all");
            // console.log(response.data.body);
            this.data = response?.data?.body?.data;
            this.data_count = response?.data?.body?.total;
        },
    },

    mounted() {
        this.getItems()
    }
};
</script>