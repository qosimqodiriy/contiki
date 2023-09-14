<template>
    <div class="bg-white py-40 lg:py-52 xl:py-64 2xl:py-72 mb-40">
        <div class="my_container">
            <h2 class="text-32 lg:text-40 text-center font-prosto_one mb-32 text-black">{{ $t('about_text_1') }}</h2>
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
                class="mySwiper mb-60 lg:mb-76 xl:mb-90">

                <swiper-slide v-for="item in data" :key="item.id">
                    <card-one :item="item" bg="grey" />
                </swiper-slide>
                

            </swiper>

            <div class="w-full mb-24 lg:mb-32 xl:mb-40 overflow-hidden relative">
                <img class="w-full h-auto" src="../../assets/images/bg_img_3.png" alt="">
                <img class="w-150 md:w-200 lg:w-300 xl:w-400 2xl:w-500 absolute bottom-0 right-0 translate-x-30% translate-y-40% rotate-3" src="../../assets/images/img_vector.png" alt="">
            </div>

            <h2 class="text-32 lg:text-40 text-center font-prosto_one mb-32 text-black">{{ $t('about_text_2') }}</h2>
            <img class="h-4 lg:h-5 2xl:h-6 mx-auto my-36" src="../../assets/images/line_img.png" alt="">

            <p class="max-w-850 mx-auto text-18 font-interfaces text-grey_64" v-html="$t('about_text_3')"></p>
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
            loading: false,
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
            const { offset = 0 } = this.$route.query
            const response = await axios.get('https://api.contiki.uz/user/advantages/all');
            this.loading = false;
            // console.log("Advantae");
            // console.log(response.data.body);
            this.data = response.data.body.data;
            this.data_count = response.data.body.total;
        },
    },

    mounted() {
        this.getItems()
    }
}
</script>