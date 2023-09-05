<template>
    <div class="section max-w-1920 mx-auto py-24 md:py-46 lg:py-72 xl:py-120 2xl:py-160 2xl:pt-180">
        <div class="my_container">
            <div class="box md:max-w-600 px-16 py-24 md:px-20 md:py-28 lg:px-24 lg:py-40 xl:px-32 xl:py-48 2xl:px-48 2xl:py-64">
                <h3 class="text-20 lg:text-24 xl:text-28 2xl:text-32 font-prosto_one uppercase text-white mb-16">Наслаждайтесь ОТЛИЧНЫМ путешествием вместе с нами</h3>
                <p class="text-14 md:text-16 xl:text-18 2xl:text-20 font-interfaces mb-24 lg:mb-28 xl:mb-40 text-white">Наша компания оказывает широкий спектр услуг в сфере туризма. У нас работают лучшие туроператоры Ташкента, которые помогут:заранее забронировать трансферы по выгодным ценам; выбрать лучший отель и забронировать номер в нем; поможем определиться с выбором места отдыха; подобрать наиболее удобный тур из широчайшего ассортимента.</p>

                <NuxtLink to="/tours" class="flex">
                    <div class="w-full md:w-auto p-5 border border-orange">
                        <p class="text-12 md:text-14 lg:text-16 font-prosto_one text-center py-14 px-52 lg:py-16 lg:px-70 bg-orange text-white">Подробнее</p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>


<style scoped>

.section {
    background: url('../../assets/images/bg_img_3.png') no-repeat center;
    background-size: cover;
}
.box {
    backdrop-filter: blur(21px);
    background: rgba(29, 35, 79, 0.16);
}
</style>