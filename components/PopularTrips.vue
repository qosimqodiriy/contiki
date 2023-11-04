<template>
    <div class="bg-white py-50 lg:py-62 xl:py-76">
        <div class="my_container">
            <div class="flex items-center justify-between gap-20 mb-32">
                <h2 class="title_text">Most popular trips</h2>

                <div class="flex items-center gap-15 border border-grey_40 p-10 py-5 shrink-0">
                    <img @click="clickPrev()" class="w-30 h-30 lg:w-36 lg:h-36 p-2 lg:p-4 cursor-pointer" src="../assets/icons/arrow-left.png" alt="">
                    <div class="w-1 h-24 bg-grey_40"></div>
                    <img @click="clickNext()" class="w-30 h-30 lg:w-36 lg:h-36 p-2 lg:p-4 cursor-pointer" src="../assets/icons/arrow-right.png" alt="">
                </div>
            </div>
            

            <swiper 
                :speed="1000"
                :autoplay="{
                    delay: 3700,
                    disableOnInteraction: false,
                }"
                :pagination="{
                    clickable: true,
                    dynamicBullets: true,
                }"
                :loop="true"
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
                class="popular_box mySwiper pb-40">

                <swiper-slide v-for="item in data" :key="item.id">
                    <card-two :item="item" />
                </swiper-slide>
                

            </swiper>

            <NuxtLink to="/tours" class="flex justify-center mt-50">
                <button class="btn_red">{{ $t('text_9') }}</button>
            </NuxtLink>
        </div>
    </div>
</template>


<script>
import 'swiper/css';
import axios from 'axios'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Keyboard, FreeMode, Autoplay, Navigation, Pagination } from 'swiper/modules';


let prev, next;
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
            modules: [Keyboard, FreeMode, Autoplay, Navigation, Pagination ],
        };
    },

    methods: {
        clickPrev() {
            prev.click();
        },
        
        clickNext() {
            next.click()
        },

        async getItems() {
            this.loading = true;
            const response = await axios.get('https://api.contiki.uz/user/tour');
            this.loading = false;
            console.log("Popular trios");
            console.log(response.data.body);
            this.data = response?.data?.body?.data;
            this.data_count = response?.data?.body?.total;
        },
    },

    mounted() {
        this.getItems();

        setTimeout(() => {
            let element = document.querySelector('.popular_box');
            prev = element.children[1];
            next = element.children[2];

            prev.style.display = 'none';
            next.style.display = 'none';
        }, 50);
    }
};
</script>


<style scoped>
.popular_box {
    padding-bottom: 50px;
}
</style>