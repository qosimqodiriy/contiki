<script setup lang="ts">
import 'swiper/css';
import axios from 'axios'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { defineAsyncComponent, onMounted, ref } from 'vue';
import { Keyboard, FreeMode, Autoplay, Navigation } from 'swiper/modules';


let prev: any, next: any;
const modules = [Keyboard, FreeMode, Autoplay, Navigation ];
const SectioneOneCard = defineAsyncComponent(() => import('./SectioneOneCard.vue'))

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
    const response = await axios.get('https://api.contiki.uz/user/discount');
    data.value.loading = false;

    // console.log("Chegirmalar");
    // console.log(response.data.body);
    
    data.value.list = response?.data?.body?.data;
    data.value.count = response?.data?.body?.total;


    setTimeout(() => {
        let element = document.querySelector('.main_box') as any;
        prev = element.children[1];
        next = element.children[2];

        prev.style.display = 'none';
        next.style.display = 'none';



        // Header height
        let header = document.querySelector('header') as any;
        let main_section = document.querySelector('.main_section') as any;
        main_section.style.height = 'calc(100vh - ' +  header.offsetHeight + 'px)';

        window.addEventListener('resize', () => main_section.style.height = 'calc(100vh - ' +  header.offsetHeight + 'px)', true);
    }, 50);

}




getItems();
</script>


<template>
    <div v-if="data.loading" class="loading flex flex-col items-center justify-center pb-50 relative border-t border-grey">
        <img class="w-80% md:w-500 mb-50" src="../../assets/images/logo.png" alt="">
        <span class="loader"></span>
    </div>


    <div v-else class="main_section relative">
        <!-- vertical -->
        <swiper 
            :speed="1500"
            :autoplay="{
                delay: 7000,
                disableOnInteraction: false,
            }"
            :pagination="{
                clickable: true,
            }"
            :loop="true"
            :navigation="true"
            :spaceBetween="5" 
            :slidesPerView="1" 
            :direction="'horizontal'"
            :slidesPerGroupSkip="1" 

            :modules="modules" 
            class="main_box mySwiper bg-grey">

            <swiper-slide v-for="(item, index) in data.list" :key="index">
                <sectione-one-card :item="item" />
            </swiper-slide>
        </swiper>

        <div class="change_box absolute bottom-20 right-20 lg:bottom-40 lg:right-40 z-10 flex items-center gap-15 lg:gap-25 border border-white p-10 lg:p-20 py-5 lg:py-10 shrink-0">
            <img @click="clickPrev()" class="w-32 h-32 lg:w-40 lg:h-40 p-5 lg:p-7 cursor-pointer" src="../../assets/icons/arrow-left-2-white.png" alt="">
            <div class="w-1 h-24 lg:h-30 bg-white"></div>
            <img @click="clickNext()" class="w-32 h-32 lg:w-40 lg:h-40 p-5 lg:p-7 cursor-pointer" src="../../assets/icons/arrow-right-2-white.png" alt="">
        </div>
    </div>
</template>





<style scoped>
.main_section {
    width: 100%;
    height: calc(100vh - 71px);
    background: linear-gradient(180deg, rgba(29, 35, 79, 0.56) 0%, rgba(29, 35, 79, 0.34) 50%, rgba(29, 35, 79, 0.56) 100%);
}

.change_box {
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.6);
}

.loading {
    width: 100%;
    height: calc(100vh - 71px);
}



/* loader anime */
.loader {
    transform: rotateZ(45deg);
    perspective: 1000px;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    color: #020105;
}

.loader:before,
.loader:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    transform: rotateX(70deg);
    animation: 1s spin linear infinite;
}

.loader:after {
    color: #FF3D00;
    transform: rotateY(70deg);
    animation-delay: .4s;
}



@keyframes rotate {
    0% {
        transform: translate(-50%, -50%) rotateZ(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotateZ(360deg);
    }
}

@keyframes rotateccw {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(-360deg);
    }
}

@keyframes spin {
    0%,
    100% {
        box-shadow: .2em 0px 0 0px currentcolor;
    }
    12% {
        box-shadow: .2em .2em 0 0 currentcolor;
    }
    25% {
        box-shadow: 0 .2em 0 0px currentcolor;
    }
    37% {
        box-shadow: -.2em .2em 0 0 currentcolor;
    }
    50% {
        box-shadow: -.2em 0 0 0 currentcolor;
    }
    62% {
        box-shadow: -.2em -.2em 0 0 currentcolor;
    }
    75% {
        box-shadow: 0px -.2em 0 0 currentcolor;
    }
    87% {
        box-shadow: .2em -.2em 0 0 currentcolor;
    }
}
   


@media (max-width: 767px) {
    .loading {
        width: 100%;
        height: calc(100vh - 56px);
    }
}

</style>