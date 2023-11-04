<template>
    <div class="bg-white py-40 lg:py-52 xl:py-64 2xl:py-72 mb-40">
        <div class="my_container">

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