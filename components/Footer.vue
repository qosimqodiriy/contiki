<template>
    <footer class="bg-blue pt-45 pb-40">
        <div class="my_container flex flex-wrap flex-col md:flex-row justify-between gap-60">
            <div class="md:max-w-467">
                <NuxtLink to="/"><p class="text-26 font-prosto_one text-white mb-45">Logo</p></NuxtLink>
                <p class="text-14 lg:text-16 xl:text-18 text-white font-interfaces mb-18">{{ $t('footer_text_1') }}</p>
                <p class="text-14 lg:text-16 xl:text-18 text-white font-interfaces">{{ $t('footer_text_2') }}</p>
            </div>

            <div class="flex items-start w-auto flex-auto justify-between gap-40">
                <div>
                    <p class="text-14 md:text-16 lg:text-18 2xl:text-20 font-prosto_one text-white mb-16 lg:mb-24">{{ $t('footer_text_3') }}</p>

                    <nuxt-link to="/"><p class="text-14 lg:text-16 xl:text-18 text-gren_text font-interfaces mb-24">{{ $t('page_name_1') }}</p></nuxt-link>
                    <nuxt-link to="/tours"><p class="text-14 lg:text-16 xl:text-18 text-gren_text font-interfaces mb-24">{{ $t('page_name_2') }}</p></nuxt-link>
                    <nuxt-link to="/about"><p class="text-14 lg:text-16 xl:text-18 text-gren_text font-interfaces mb-24">{{ $t('page_name_3') }}</p></nuxt-link>
                    <nuxt-link to="/contact"><p class="text-14 lg:text-16 xl:text-18 text-gren_text font-interfaces">{{ $t('page_name_4') }}</p></nuxt-link>
                </div>

                <div>
                    <p class="text-14 md:text-16 lg:text-18 2xl:text-20 font-prosto_one text-white mb-16 lg:mb-24">{{ $t('footer_text_4') }}</p>

                    <div class="flex items-start gap-8">
                        <img class="w-24 h-24" src="../assets/icons/call.png" alt="">

                        <div class="space-y-12">
                            <a href="tel:+998901682272" class="block text-14 lg:text-16 xl:text-18 leading-100 text-white font-interfaces">+998 90 168-22-72</a>
                            <a href="tel:+998901682272" class="block text-14 lg:text-16 xl:text-18 leading-100 text-white font-interfaces">+998 90 168-22-72</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full lg:w-auto">
                <p class="text-14 md:text-16 lg:text-18 2xl:text-20 font-prosto_one text-white mb-16 lg:mb-24">{{ $t('footer_text_5') }}</p>

                <div class="flex items-center gap-24 lg:gap-40">
                    <a v-for="item in data" :key="item.id" :href="item.link" target="_blank">
                        <img class="h-24 w-auto" :src="`https://contiki.uz/files/${item.image}`" :alt="item.name">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>




<script>
import axios from 'axios'

export default {
    data() {
        return {
            data: [],
        }
    },

    methods: {
        async getItems() {
            this.loading = true;
            const response = await axios.get('https://api.contiki.uz/user/social');
            this.loading = false;
            // console.log("Socials");
            // console.log(response.data.body);
            this.data = response?.data?.body;
        },
    },

    mounted() {
        this.getItems();
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