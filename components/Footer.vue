<template>
    <footer class="bg-blue pt-45 pb-40">
        <div class="my_container flex flex-wrap flex-col md:flex-row justify-between gap-60">
            <div class="md:max-w-467">
                <NuxtLink to="/"><p class="text-26 font-prosto_one text-white mb-45">Logo</p></NuxtLink>
                <p class="text-14 lg:text-16 xl:text-18 text-white font-interfaces mb-18">«Инвестиции в поездки это инвестиции в себя»</p>
                <p class="text-14 lg:text-16 xl:text-18 text-white font-interfaces">«Тот, кто живет, видит много. Тот, кто путешествует, видит больше»</p>
            </div>

            <div class="flex items-start w-auto flex-auto justify-between gap-40">
                <div>
                    <p class="text-14 md:text-16 lg:text-18 2xl:text-20 font-prosto_one text-white mb-16 lg:mb-24">Полезные ссылки</p>

                    <nuxt-link to="/"><p class="text-14 lg:text-16 xl:text-18 text-gren_text font-interfaces mb-24">Главная</p></nuxt-link>
                    <nuxt-link to="/tours"><p class="text-14 lg:text-16 xl:text-18 text-gren_text font-interfaces mb-24">Туры</p></nuxt-link>
                    <nuxt-link to="/about"><p class="text-14 lg:text-16 xl:text-18 text-gren_text font-interfaces mb-24">О нас</p></nuxt-link>
                    <nuxt-link to="/contact"><p class="text-14 lg:text-16 xl:text-18 text-gren_text font-interfaces">Контакты</p></nuxt-link>
                </div>

                <div>
                    <p class="text-14 md:text-16 lg:text-18 2xl:text-20 font-prosto_one text-white mb-16 lg:mb-24">Связаться с нами</p>

                    <div class="flex items-start gap-8">
                        <img class="w-24 h-24" src="../assets/icons/call.png" alt="">

                        <div class="space-y-12">
                            <a href="tel:+998901682272" class="block text-14 lg:text-16 xl:text-18 leading-100 text-white font-interfaces">+99890 168-22-72</a>
                            <a href="tel:+998901682272" class="block text-14 lg:text-16 xl:text-18 leading-100 text-white font-interfaces">+99890 168-22-72</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full lg:w-auto">
                <p class="text-14 md:text-16 lg:text-18 2xl:text-20 font-prosto_one text-white mb-16 lg:mb-24">Подпишитесь на нас</p>

                <div class="flex items-center gap-24 lg:gap-40">
                    <img v-for="item in 4" :key="item" class="h-24 w-auto" src="../assets/icons/phone.png" alt="">
                </div>
            </div>
        </div>
    </footer>
</template>




<script>
export default {
    data() {
        return {
            data: {},
        }
    },

    methods: {
        
    },

    mounted() {
        
    }
}
</script>



<style scoped>
    .footer_title {
        font-size: 20px;
        font-weight: 600;
        line-height: 150%;
        font-style: normal;
        font-family: 'TT Firs Neue';
        color: var(--dark-green, #1D2B1E);
    }

    .footer_text {
        display: block;
        font-size: 18px;
        font-weight: 400;
        line-height: 150%;
        font-style: normal;
        white-space: nowrap;
        font-family: 'TT Interfaces';
        color: var(--dark-green, #1D2B1E);
    }
</style>