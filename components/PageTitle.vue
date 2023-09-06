<template>
    <div class="min-h-400 md:min-h-500 flex items-center justify-center relative">
        <div class="absolute top-0 left-0 w-full h-full">
            <img v-if="index == 1" class="w-full h-full object-cover object-center" src="../assets/images/page_bg_img_1.png" alt="">
            <img v-else-if="index == 2" class="w-full h-full object-cover object-center" src="../assets/images/page_bg_img_2.png" alt="">
            <img v-else-if="index == 3" class="w-full h-full object-cover object-center" src="../assets/images/page_bg_img_3.png" alt="">
            <img v-else-if="index == 4" class="w-full h-full object-cover object-center" src="../assets/images/page_bg_img_4.png" alt="">
        </div>
        <div class="gradient absolute top-0 left-0 w-full h-full"></div>
        <div class="my_container">
            <div class="flex items-center justify-center gap-12 relative">
                <NuxtLink to="/" class="text-white font-interfaces md:text-18">{{ $t('page_name_1') }}</NuxtLink>

                <p v-if="page" class="text-white font-interfaces md:text-18">/</p>
                <NuxtLink v-if="page" :to="page.path" class="text-white font-interfaces md:text-18 cursor-pointer">{{ page.name }}</NuxtLink>

                <p class="text-white font-interfaces md:text-18">/</p>
                <p class="text-orange font-interfaces md:text-18 cursor-pointer">{{ name }}</p>
            </div>
            <p class="text-white font-prosto_one text-28 md:text-38 lg:text-48 xl:text-56 2xl:text-64 text-center mb-16 relative">{{ name }}</p>
        </div>
    </div>
</template>



<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        page: {
            type: Object,
            required: false,
        },
        index: {
            type: Number,
            required: true,
        },
    },

    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },

    mounted() {
        setTimeout(() => {
            this.color = sessionStorage.getItem('color');
            this.bg_color = sessionStorage.getItem('bg_color');
        }, 10);
    },
}
</script>


<style scoped>
.gradient {
    background: linear-gradient(180deg, rgba(29, 35, 79, 0.56) 0%, rgba(29, 35, 79, 0.34) 50%, rgba(29, 35, 79, 0.56) 100%);
}
</style>