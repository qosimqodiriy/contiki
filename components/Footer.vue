<template>
    <footer>
        <div class="bg-F9F9F9 py-20 lg:py-25">
            <div class="container_1 flex flex-wrap flex-col md:flex-row items-center justify-between gap-30">
                <nuxt-link to="/"><img class="h-30" src="../assets/images/logo.png" alt=""></nuxt-link>

                <div class="flex items-center gap-20">
                    <img class="h-40" src="../assets/images/payme.png" alt="">
                    <img class="h-40" src="../assets/images/apelsin.png" alt="">
                    <img class="h-40" src="../assets/images/visa.png" alt="">
                    <img class="h-40" src="../assets/images/master_card.png" alt="">
                    <img class="h-40" src="../assets/images/click.png" alt="">
                </div>
    
                <div class="flex flex-wrap items-center justify-center gap-10 lg:gap-15">
                    <a v-for="item in data" :key="item.id" :href="item.link" target="_blank" class="w-32 lg:w-36 h-32 lg:h-36 rounded-full bg bg-767676 flex items-center justify-center">
                        <img class="h-24 lg:h-28 w-auto" :src="`https://contiki.uz/files/${item.image}`" :alt="item.name">
                    </a>
                </div>
            </div>

        </div>

        <div class="bg-black py-20 lg:py-25">
            <div class="container_1 flex flex-wrap items-center justify-center gap-20">
                <img class="h-80 md:h-100 xl:h-120" src="../assets/images/footer_img_1.png" alt="">
                <img class="h-80 md:h-100 xl:h-120" src="../assets/images/footer_img_2.png" alt="">
                <img class="h-80 md:h-100 xl:h-120" src="../assets/images/footer_img_3.png" alt="">
                <img class="h-80 md:h-100 xl:h-120" src="../assets/images/footer_img_4.png" alt="">
                <img class="h-80 md:h-100 xl:h-120" src="../assets/images/footer_img_5.png" alt="">
                <img class="h-80 md:h-100 xl:h-120" src="../assets/images/footer_img_6.png" alt="">
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