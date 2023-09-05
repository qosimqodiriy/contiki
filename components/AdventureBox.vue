<template>
    <div class="advanture_box max-w-1920 min-h-350 mx-auto py-24 md:py-32 lg:py-46 xl:py-64 2xl:py-80 flex flex-col">
        <div class="my_container flex-auto flex flex-col">
            <h2 class="text-24 md:text-26 lg:text-32 xl:text-36 2xl:text-40 md:max-w-700 leading-130 mb-8 text-white">Ваш идеальный Приключенческий опыт</h2>
            <p class="text-16 xl:text-18 font-interfaces leading-150 text-white mb-auto md:mb-20">Мероприятия и проживание</p>

            <NuxtLink to="/tours" class="flex justify-start">
                <div class="w-full md:w-auto p-5 border border-white">
                    <p class="text-12 md:text-14 lg:text-16 font-prosto_one text-center py-14 px-52 lg:py-16 lg:px-50 bg-white text-black">Посмотреть все</p>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>


<style scoped>
.advanture_box {
    background: url('../assets/images/bg_img_2.png') no-repeat center;
    background-size: cover;
}
</style>