<template>
    <header id="header" class="fixed top-0 left-0 right-0 max-w-1920 mx-auto z-50 py-15 md:py-20 xl:py-24 2xl:py-30 border-b border-b-grey bg-black">
        <div class="my_container flex items-center justify-between">
            <NuxtLink to="/" class="text-26 text-white">Logo</NuxtLink>

            <div class="flex items-center gap-50">
                <div class="flex items-center gap-30 lg:gap-40 2xl:gap-50">
                    <NuxtLink to="/" class="text-18 font-interfaces text-white leading-130">Home</NuxtLink>
                    <NuxtLink to="/tours" class="text-18 font-interfaces text-white leading-130">Туры</NuxtLink>
                    <NuxtLink to="/about" class="text-18 font-interfaces text-white leading-130">О нас</NuxtLink>
                    <NuxtLink to="/contact" class="text-18 font-interfaces text-white leading-130">Контакты</NuxtLink>
                </div>

                <div class="flex items-center gap-10 lg:gap-15 xl:gap-24">
                    <p class="text-16 font-interfaces text-white leading-130">Uz</p>
                    <p class="text-16 font-interfaces text-white leading-130">Ru</p>
                    <p class="text-16 font-interfaces text-white leading-130">En</p>
                </div>
            </div>
        </div>

        <!-- Burger -->
        <!-- <div class="burger_div w-full min-h-screen fixed lg:hidden overflow-hidden top-0 right-0 z-40" :class="burger ? 'active' : ''">
            <div @click="burger = false" class="w-full z-40 min-h-screen absolute top-0 left-0"></div>
            <div class="w-80% burger_bg bg-Rich-Black z-50 min-h-screen absolute top-0 left-0 px-16 py-50">

                <div class="flex items-center gap-20 mb-76">
                    <img @click="burger = false" class="w-24 h-24" src="../assets/icons/close-white.png" alt="">
                    <p class="w-full text-20 text-center font-medium pr-44">Меню</p>
                </div>

                <div class="flex flex-col gap-16">
                    <NuxtLink @click="burger = false" class="font-interfaces text-18 font-semibold text-white" to="/about">{{ $t('page_name_2') }}</NuxtLink>
                    <NuxtLink @click="burger = false" class="font-interfaces text-18 font-semibold text-white" to="/holdings">{{ $t('page_name_3') }}</NuxtLink>
                    <NuxtLink @click="burger = false" class="font-interfaces text-18 font-semibold text-white" to="/gallery">{{ $t('page_name_4') }}</NuxtLink>
                    <NuxtLink @click="burger = false" class="font-interfaces text-18 font-semibold text-white" to="/news">{{ $t('page_name_5') }}</NuxtLink>
                    <NuxtLink @click="burger = false" class="font-interfaces text-18 font-semibold text-white" to="/contact">{{ $t('page_name_6') }}</NuxtLink>
                </div>

                
            </div>
        </div> -->
    </header>
</template>


<script>
export default {
    data() {
        return {
            burger: false,
        }
    },

    methods: {
        // changeLang(lang, text) {
        //     this.lang = false;
        //     this.lang_value = text;
        //     this.$i18n.locale = lang;
        //     localStorage.setItem('language', lang);
        // },
    },
    
    mounted() {
        // Tilni tekshirish
        // if(localStorage.getItem('language') == 'uz') {
        //     this.lang_value = `Ozbekcha`
        // } else if(localStorage.getItem('language') == 'en') {
        //     this.lang_value = `English`
        // } else if(localStorage.getItem('language') == 'ru') {
        //     this.lang_value = `Русский`
        // } else {
        //     this.lang_value = `Русский`
        // }



        // Header anime
        let lastScrollTop = 105;
        let navbar = document.querySelector('#header')

        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if(scrollTop > lastScrollTop) {
                navbar.style.top = '-105px';
            } else {
                navbar.style.top = '0';
                if(window.pageYOffset != 0) {
                    navbar.style.backgroundColor = '#020105';
                } else {
                    navbar.style.backgroundColor = 'transparent';
                }
            }

            lastScrollTop = scrollTop
        })
    }
}
</script>

<style scoped>
#header {
    width: 100%;
    transition: 0.5s;
    transition-duration: 150;
}

.logo_img {
    filter: opacity(.5) drop-shadow(0 0 0 #3B2BB8);
    -webkit-filter: opacity(.5) drop-shadow(0 0 0 #3B2BB8);
}

.lang_box {
    cursor: pointer !important;
}

.language_box {
    min-width: 100%;
    transition: 0.5s;
    /* left: 0; */
    /* right: auto; */
}

.language_box.active {
    opacity: 1;
    z-index: 2;
    transform: translateY(30px);
}

.language_box.not_active {
    opacity: 0;
    z-index: -1;
    transform: translateY(0px);
}




/* Burger css */

.burger_div {
    transition: 0.5s ease;
    transform: translateX(-1024px);
}

.burger_div.active {
    transform: translateX(0px);
}

.burger_bg {
    backdrop-filter: blur(10px);
    background: linear-gradient(5deg,
    rgba(17, 17, 18, 0) 10%,
    rgba(0, 0, 0, 0.8) 100%);
    background: #020105;
}
</style>