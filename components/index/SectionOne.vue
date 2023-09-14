<template>
    <div class="main_section pt-100">
        <div class="my_container flex items-center justify-center">
            <div class="max-w-1100 flex flex-col items-center">
                <h1 class="text-white text_shadow text-60 md:text-72 lg:text-90 xl:text-110 2xl:text-140 leading-100 md:leading-80 text-center mb-20 lg:mb-30 font-prosto_one">{{ $t('text_1') }}</h1>
                <p class="text-white text_shadow text-20 max-w-500 text-center mb-30 lg:mb-40 font-interfaces">{{ $t('text_2') }}</p>

                <div class="w-full flex flex-col md:flex-row items-center justify-center gap-20">
                    <NuxtLink to="/about" class="w-full md:w-auto p-5 border border-dark_blue">
                        <p class="text-12 md:text-14 lg:text-16 text-center py-14 px-40 lg:py-16 lg:px-50 bg-dark_blue text-white font-prosto_one">{{ $t('text_3') }}</p>
                    </NuxtLink>

                    <NuxtLink to="/tours" class="w-full md:w-auto p-5 border border-white">
                        <p class="text-12 md:text-14 lg:text-16 text-center py-14 px-40 lg:py-16 lg:px-50 bg-transparent text-white font-prosto_one">{{ $t('text_4') }}</p>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.main_section {
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, rgba(29, 35, 79, 0.56) 0%, rgba(29, 35, 79, 0.34) 50%, rgba(29, 35, 79, 0.56) 100%);
    background-image: url('../../assets/images/bg_img_1.png');
    background-size: cover;
    background-position: center bottom;
    background-attachment: fixed;
}

.text_shadow {
    text-shadow: 0px 0px 2px rgba(0,0,0,0.7);
}
</style>