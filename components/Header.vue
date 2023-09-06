<template>
    <header id="header" class="fixed top-0 left-0 right-0 max-w-1920 mx-auto z-50 py-15 md:py-20 xl:py-24 2xl:py-30 border-b border-b-grey bg-black">
        <div class="my_container flex items-center justify-between">
            <NuxtLink to="/"><p class="text-26 font-prosto_one text-white">Logo</p></NuxtLink>

            <div class="flex items-center gap-50">
                <div class="hidden md:flex items-center gap-30 lg:gap-40 2xl:gap-50">
                    <NuxtLink to="/" class="text-18 font-interfaces text-white leading-130">{{ $t('page_name_1') }}</NuxtLink>
                    <NuxtLink to="/tours" class="text-18 font-interfaces text-white leading-130">{{ $t('page_name_2') }}</NuxtLink>
                    <NuxtLink to="/about" class="text-18 font-interfaces text-white leading-130">{{ $t('page_name_3') }}</NuxtLink>
                    <NuxtLink to="/contact" class="text-18 font-interfaces text-white leading-130">{{ $t('page_name_4') }}</NuxtLink>
                </div>

                <div class="flex items-center gap-16">
                    <div class="flex items-center gap-10 lg:gap-15 xl:gap-24">
                        <p class="text-16 font-interfaces cursor-pointer leading-130 transition-all duration-200" @click="changeLang('uz')" :class="$i18n.locale == 'uz' ? 'text-white' : 'text-grey_8 opacity-80'">Uz</p>
                        <p class="text-16 font-interfaces cursor-pointer leading-130 transition-all duration-200" @click="changeLang('ru')" :class="$i18n.locale == 'ru' ? 'text-white' : 'text-grey_8 opacity-80'">Ru</p>
                        <p class="text-16 font-interfaces cursor-pointer leading-130 transition-all duration-200" @click="changeLang('en')" :class="$i18n.locale == 'en' ? 'text-white' : 'text-grey_8 opacity-80'">En</p>
                    </div>
    
                    <div @click="burger = !burger" class="block md:hidden p-5 py-6 rounded-4 cursor-pointer active:bg-grey_64">
                        <img class="w-22" src="../assets/icons/menu.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <!-- Burger -->
        <div class="burger_div w-full min-h-screen fixed lg:hidden overflow-hidden top-0 right-0 z-40" :class="burger ? 'active' : ''">
            <div @click="burger = false" class="w-full z-40 min-h-screen absolute top-0 left-0"></div>
            <div class="w-80% burger_bg bg-Rich-Black z-50 min-h-screen absolute top-0 right-0 px-16 py-50">

                <img @click="burger = false" class="w-28 h-28 absolute top-20 right-28" src="../assets/icons/close-white.png" alt="">
                
                <p class="w-full text-20 text-center text-white font-prosto_one font-medium mb-56">Меню</p>

                <div class="flex flex-col gap-16">
                    <NuxtLink @click="burger = false" class="font-interfaces text-center text-18 font-semibold text-white" to="/">{{ $t('page_name_1') }}</NuxtLink>
                    <NuxtLink @click="burger = false" class="font-interfaces text-center text-18 font-semibold text-white" to="/tours">{{ $t('page_name_2') }}</NuxtLink>
                    <NuxtLink @click="burger = false" class="font-interfaces text-center text-18 font-semibold text-white" to="/about">{{ $t('page_name_3') }}</NuxtLink>
                    <NuxtLink @click="burger = false" class="font-interfaces text-center text-18 font-semibold text-white" to="/contact">{{ $t('page_name_4') }}</NuxtLink>
                </div>
            </div>
        </div>
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
        changeLang(lang) {
            this.$i18n.locale = lang;
            localStorage.setItem('language', lang);
        },
    },
    
    mounted() {
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
    transition-duration: 0.7s;
}



/* Burger css */
.burger_div {
    transition: 0.5s ease;
    transform: translateX(768px);
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