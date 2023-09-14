<template>
    <div class="bg-white py-56 md:py-64 lg:py-74 xl:py-95 2xl:py-112">
        <div class="my_container">
            <h2 class="text-32 lg:text-40 text-center font-prosto_one mb-8 text-black">{{ $t('text_10') }}</h2>
            <p class="text-18 text-center text-grey_64">{{ $t('text_11') }}</p>
            <img class="h-4 lg:h-5 2xl:h-6 mx-auto mt-16 lg:mt-24 mb-24 lg:mb-40" src="../../assets/images/line_img.png" alt="">

            <swiper 
                :speed="1000"
                :autoplay="{
                    delay: 3700,
                    disableOnInteraction: false,
                }"
                :loop="true"
                :spaceBetween="8" 
                :slidesPerView="1" 
                :slidesPerGroupSkip="1" 

                :breakpoints="{
                    '769': {
                        spaceBetween: 12,
                        slidesPerView: 1.5,
                        slidesPerGroup: 1,
                    },
                    '1025': {
                        spaceBetween: 16,
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                    },
                    '1337': {
                        spaceBetween: 20,
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                    },
                }" 
                :modules="modules" 
                class="article_swiper mySwiper">

                <swiper-slide v-for="item in data" :key="item.id">
                    <news-card :item="item" />
                </swiper-slide>
                

            </swiper>
        </div>
    </div>
</template>


<script>
import 'swiper/css';
import axios from 'axios'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Keyboard, FreeMode, Autoplay } from 'swiper/modules';

export default {
    data() {
        return {
            data: [],
            data_count: 0,
            download: false,
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
            const response = await axios.get('http://176.96.241.124:8081/user/article/all');
            this.loading = false;
            // console.log("Article/all");
            // console.log(response.data.body);
            this.data = response?.data?.body?.data;
            this.data_count = response?.data?.body?.total;

            setTimeout(() => {
                this.remoteCard()
            }, 100);

        },

        remoteCard() {
            let max_height = 400;
            let swiper = document.querySelector('.article_swiper .swiper-wrapper');


            for (let i of swiper.children) {
                if(i.offsetHeight > max_height) {
                    max_height = i.offsetHeight;
                }
            }

            for (let i of swiper.children) {
                i.style.minHeight = max_height + 'px';
                i.children[0].style.height = max_height + 'px';
            }
        }
    },

    mounted() {
        this.getItems();
    }
};
</script>