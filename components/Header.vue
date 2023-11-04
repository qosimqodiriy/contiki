<script setup lang="ts">
import axios from 'axios'
import i18n from '~/plugins/i18n';
import { defineAsyncComponent, onMounted, ref } from 'vue';



const x = ref(0);
const y = ref(0);
const burger = ref(false);
const page_window = ref(false);
const trip_active = ref(0);
const lang_active = ref(false);
const img_url = 'https://contiki.uz/files/'


const data = ref<{ list: any[], images: any[], count: number, loading: Boolean }>({ 
    list: [],
    images: [],
    count: 0,
    loading: false,
})


function changeLang(lang: string) {
    // @ts-ignore
    i18n.locale = lang;
    lang_active.value = false;
    localStorage.setItem('language', lang);
};

function bodyToggleActive() {
    let body = document.querySelector('body') as any;

    if(page_window.value) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'visible';
    }
};

function burgerClick() {
    burger.value = !burger.value;

    x.value = window.pageXOffset;
    y.value = window.pageYOffset;
};

function clickWindow() {
    window.scrollTo(0, 0);
    page_window.value = !page_window.value;

    bodyToggleActive();
};

function changeTrips(index: number) {
    trip_active.value = index;
};

function closeWindow() {
    bodyToggleActive();
    page_window.value = false;

    let body = document.querySelector('body') as any;
    body.style.overflow = 'visible';
};


async function getItems() {
    data.value.loading = true;
    const response = await axios.get('https://api.contiki.uz/user/continent');
    data.value.loading = false;

    // console.log("Header");
    // console.log(response.data.body);
    data.value.list = response?.data?.body?.data;
    data.value.count = response?.data?.body?.total;


    response?.data?.body?.data.forEach((el: any) => {
        data.value.images.push(img_url + el.image);
    });
}



setTimeout(() => {
    // Window height;
    let header = document.querySelector('header') as any;
    let header_height = document.querySelector('.header_height') as any;

    header_height.style.height = header.offsetHeight + 'px';


    window.addEventListener('resize', () => header_height.style.height = header.offsetHeight + 'px', true);
}, 50);


getItems();
</script>


<template>
    <header id="header" class="relative max-w-1920 mx-auto py-15 md:py-20 xl:py-24 bg-white shadow" :class="page_window ? 'pr-4 shadow-md z-20' : ''">
        <div class="container_1 flex items-center justify-between">
            <div class="flex items-center gap-50 z-30">
                <NuxtLink to="/" @click="closeWindow()"><img class="h-26 md:h-30" src="../assets/images/logo.svg" alt=""></NuxtLink>

                <div class="hidden md:flex items-center gap-30 lg:gap-40">
                    <div @click="clickWindow()" class="link_box cursor-pointer mt-3">
                        <div class="flex items-center gap-5 pb-1">
                            <p class="text-18 font-interfaces text-black leading-130">{{ $t('page_name_2') }}</p>
                            <img class="w-24 -rotate-90" src="../assets/icons/arrow-left-s-black.png" alt="">
                        </div>
    
                        <div class="link_anime w-95% h-2 bg-black"></div>
                    </div>
    
                    <div class="hidden md:flex items-center gap-30 lg:gap-40 2xl:gap-50 mt-3">
                        <NuxtLink to="/about" @click="closeWindow()" class="link_box">
                            <p class="text-18 font-interfaces text-black leading-130 mb-1">{{ $t('page_name_3') }}</p>
                            <div class="link_anime w-full h-2 bg-black"></div>
                        </NuxtLink>
                        <NuxtLink to="/contact" @click="closeWindow()" class="link_box">
                            <p class="text-18 font-interfaces text-black leading-130 mb-1">{{ $t('page_name_4') }}</p>
                            <div class="link_anime w-full h-2 bg-black"></div>
                        </NuxtLink>
                    </div>
                </div>

            </div>

            <div class="flex items-center gap-50 ">
                <div class="flex items-center gap-16">
                    <a href="tel:+998990000000" class="hidden lg:block text-16 font-interfaces font-medium text-black leading-130 z-30">+998990000000</a>
                    <div class="relative">
                        <div @click="lang_active = !lang_active" class="flex items-center cursor-pointer gap-7 relative z-30">
                            <img class="w-24 h-24" src="../assets/icons/global.png" alt="">
    
                            <p v-if="$i18n.locale == 'uz'" class="text-16 font-interfaces leading-130 text-black">Uz</p>
                            <p v-else-if="$i18n.locale == 'ru'" class="text-16 font-interfaces leading-130 text-black">Ru</p>
                            <p v-else-if="$i18n.locale == 'eng'" class="text-16 font-interfaces leading-130 text-black">En</p>
                        </div>

                        <div class="select_box absolute top-40 right-0 shadow-xl" :class="lang_active ? 'select_active' : 'select_not_active'">
                            <div v-if="(!page_window && !lang_active) || lang_active" class="flex flex-col gap-2 w-90 overflow-y-scroll border border-grey_40 rounded-5 bg-grey">
                                <div @click="changeLang('uz')"  class="flex items-center gap-10 px-10 py-5 bg-white cursor-pointer">
                                    <img class="w-24 h-24 rounded-full object-cover object-center" src="../assets/icons/uz-flag.png" alt="">
                                    <p  class="text-15 font-medium w-full">Uz</p>
                                </div>
                                <div @click="changeLang('ru')"  class="flex items-center gap-10 px-10 py-5 bg-white cursor-pointer">
                                    <img class="w-24 h-24 rounded-full object-cover object-center" src="../assets/icons/ru-flag.png" alt="">
                                    <p  class="text-15 font-medium w-full">Ru</p>
                                </div>
                                <div @click="changeLang('eng')"  class="flex items-center gap-10 px-10 py-5 bg-white cursor-pointer">
                                    <img class="w-24 h-24 rounded-full object-cover object-center" src="../assets/icons/en-flag.png" alt="">
                                    <p  class="text-15 font-medium w-full">En</p>
                                </div>
                            </div>

                            <div v-if="(!page_window && !lang_active) || lang_active" class="select_icon w-12 h-12 absolute -top-6 right-12 rotate-45 bg-white border-t border-l border-grey_40"></div>
                        </div>
                    </div>
    
                    <div @click="burgerClick()" class="block md:hidden p-3 rounded-4 cursor-pointer active:bg-grey_8 z-30">
                        <img class="w-20" src="../assets/icons/menu-black.png" alt="">
                    </div>
                </div>
            </div>
        </div>



        <!-- Burger -->
        <div class="burger_div w-full min-h-screen fixed md:hidden overflow-hidden top-0 right-0 z-40" :class="burger ? 'active' : ''">
            <div @click="burger = false" class="w-full z-40 min-h-screen absolute top-0 left-0"></div>
            <div class="burger_bg w-80% bg-Rich-Black z-50 min-h-screen absolute top-0 right-0 px-16 py-50">

                <img @click="burger = false" class="w-28 h-28 absolute top-20 right-28" src="../assets/icons/close-black.png" alt="">
                
                <img class="max-h-50 max-w-90% mx-auto mb-30 mt-20" src="../assets/images/logo.png" alt="">

                <div class="flex flex-col gap-16">
                    <NuxtLink @click="burger = false" class="font-interfaces text-center text-18 font-semibold text-black" to="/">{{ $t('page_name_1') }}</NuxtLink>
                    <NuxtLink @click="burger = false" class="font-interfaces text-center text-18 font-semibold text-black" to="/destinations">{{ $t('page_name_2') }}</NuxtLink>
                    <NuxtLink @click="burger = false" class="font-interfaces text-center text-18 font-semibold text-black" to="/all-trips">All Trips</NuxtLink>
                    <NuxtLink @click="burger = false" class="font-interfaces text-center text-18 font-semibold text-black" to="/about">{{ $t('page_name_3') }}</NuxtLink>
                    <NuxtLink @click="burger = false" class="font-interfaces text-center text-18 font-semibold text-black" to="/contact">{{ $t('page_name_4') }}</NuxtLink>
                </div>
            </div>
        </div>
    </header>

    <!-- Destination Window -->
    <div class="page_window fixed top-0 left-0 w-full bg-white flex flex-col overflow-hidden" :class="page_window ? 'window_active' : 'window_not_active'">
        <div class="header_height shrink-0"></div>
        <div class="flex w-full flex-auto relative z-50">
            <div class="flex flex-col p-20 py-30 bg-grey_8 shrink-0 min-w-300 xl:min-w-400">
                <div class="flex flex-col gap-15 mb-auto">
                    <div @click="changeTrips(index)" v-for="(item, index) in data.list" :key="index" class="flex items-center justify-between py-3 gap-10 cursor-pointer">
                        <p class="text-18 font-semibold" :class="trip_active == index ? 'text-D73239' : 'text-black'">{{ item.name[$i18n.locale] }}</p>
                        <img v-if="trip_active == index" class="w-24 h-24" src="../assets/icons/arrow-right-s-red.png" alt="">
                        <img v-else class="w-24 h-24" src="../assets/icons/arrow-right-s-black.png" alt="">
                    </div>
                </div>

                <NuxtLink to="/all-trips" @click="closeWindow()" class="text-18 font-semibold underline underline-offset-2">Browse All Trips</NuxtLink>
            </div>

            <div class="w-full h-full flex px-15 py-30">
                <div class="flex-auto px-10">
                    <NuxtLink :to="`/destinations/${data.list[trip_active] ? data.list[trip_active].id : ''}`" @click="closeWindow()" class="continent_link mb-20 flex items-center gap-5">
                        <h2 class="text-18 lg:text-20 font-bold">{{ data.list[trip_active] ? data.list[trip_active].name[$i18n.locale] : '' }} destinations</h2>
                        <img class="img_1 w-24 h-24" src="../assets/icons/arrow-right-s-red.png" alt="">
                        <img class="img_2 w-24 h-24" src="../assets/icons/arrow-right-s-black.png" alt="">
                    </NuxtLink>

                    <div class="countries_box">
                        <nuxt-link :to="`/country/${item.id}`" v-for="item in data.list[trip_active] ? data.list[trip_active].country : null" :key="item" @click="closeWindow()" class="block text-4F4F4F p-2 px-8 my-2 cursor-pointer hover:bg-grey">{{ item.name[$i18n.locale] }}</nuxt-link>
                    </div>
                </div>

                <div class="hidden xl:flex flex-col items-center justify-center xl:min-w-400 2xl:min-w-480 xl:max-w-400 2xl:max-w-600 relative">
                    <img v-if="data.images && data.images[trip_active]" class="absolute top-0 left-0 w-full h-full max-h-full object-cover object-center" :src="data.images[trip_active]" alt="">

                    <div class="relative block p-20 text-white">
                        <p class="text-42 2xl:text-50 text-center font-bold mb-20 2xl:mb-30 leading-120 uppercase">{{ data.list[trip_active] ? data.list[trip_active].name[$i18n.locale] : '' }}</p>
                        <div class="flex items-center justify-center">
                            <NuxtLink to="/tours" class="button py-10 px-20 lg:py-12 lg:px-30 2xl:py-15 xl:px-35 rounded-30 text-black text-15 text-center font-bold">FINDE OUT MORE</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
* {
    transition: 0.3s;
}

#header {
    width: 100%;
    transition: 0.5s;
}

.countries_box {
    column-count: 3;
    column-gap: 20px;
    column-width: 200px;
}


.link_anime {
    transform: scaleX(0);
}

.link_box:hover .link_anime {
    transform: scaleX(1);
}


.continent_link .img_2 {
    display: block;
}
.continent_link .img_1 {
    display: none;
}
.continent_link:hover .img_1 {
    display: block;
}
.continent_link:hover .img_2 {
    display: none;
}

.continent_link:hover > h2 {
    color: #D73239;
}





/* Burger css */
.burger_div {
    transition: 0.5s ease;
    transform: translateX(800px);
}

.burger_div.active {
    transform: translateX(0px);
}

.burger_bg {
    backdrop-filter: blur(10px);
    background: linear-gradient(5deg,
    rgba(17, 17, 18, 0) 10%,
    rgba(0, 0, 0, 0.8) 100%);
    background: #ffffff;
}





/* Window */
.page_window {
    z-index: 19;
    transition: 0.5s;
}

.page_window.window_active {
    height: 100vh;
}

.page_window.window_not_active {
    height: 0 !important;
}




/* Select */
.select_icon {
    clip-path: polygon(100% 0, 100% 15%, 15% 100%, 0 100%, 0 0);
}

/* Anime select box */
.select_box.select_active {
    opacity: 1;
    z-index: 50;
    transform: translateY(0);
}

.select_box.select_not_active {
    opacity: 0;
    z-index: -1;
    transform: translateY(-20px);
}
</style>