<template>
    <div class="bg-grey py-40 lg:py-60 xl:py-80">
        <div class="my_container">
            <h2 class="text-32 lg:text-40 text-center font-prosto_one mb-8 text-black">Мы лучшие в своем деле</h2>
            <p class="text-18 text-center text-grey_64">Почему выбирают нас? Наши преимущества.</p>
            <img class="h-4 lg:h-5 2xl:h-6 mx-auto my-36" src="../../assets/images/line_img.png" alt="">

            <swiper 
                :speed="3000"
                :freeMode="true" 
                :spaceBetween="8" 
                :slidesPerView="1.2" 
                :slidesPerGroupSkip="1" 

                :autoplay="{
                    delay: 3700,
                    disableOnInteraction: false,
                }"

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

                <swiper-slide v-for="item in 4" :key="item">
                    <card-one title="" text="" />
                </swiper-slide>
                

            </swiper>
        </div>
    </div>
</template>


<script>
import 'swiper/css';
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Keyboard, FreeMode, Autoplay } from 'swiper/modules';

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
            modules: [Keyboard, FreeMode, Autoplay ],
        };
    },

    methods: {
        async getItems() {
            this.loading = true;
            const response = await axios.get('http://176.96.241.124:8081/user/tour/all');
            this.loading = false;
            console.log("Tour/all");
            console.log(response.data.body);
            this.data = response?.data?.body?.data;
            this.data_count = response?.data?.body?.total;
        },
    },

    mounted() {
        // this.getItems()
    }
};
</script>