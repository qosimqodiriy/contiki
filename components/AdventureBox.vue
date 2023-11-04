<template>
    <div class="relative max-w-1920 min-h-400 mx-auto">
        <img class="absolute top-0 left-0 w-full h-full object-cover object-center" src="../assets/images/adventure_bg_img.png" alt="">
        <div class="advanture_box absolute top-0 left-0 w-full h-full py-60 lg:py-72 xl:py-80 2xl:py-100 flex items-center">
            <div class="container_2 flex flex-col w-full md:h-auto">
                <h2 class="text-24 md:text-26 lg:text-32 xl:text-36 2xl:text-40 font-semibold md:max-w-700 leading-130 mb-5 text-white">"Explore Responsibly"</h2>
                <p class="text-16 lg:text-18 font-raleway leading-150 text-white mb-auto md:mb-30 lg:max-w-950">At our core, we champion the significance of sustainable travel. "EXPLORE RESPONSIBLY" serves as our solemn promise to safeguard the environment, protect wildlife, and support communities for the benefit of future generations.</p>
    
                <NuxtLink to="/tours" class="md:inline-flex justify-start">
                    <div class="button py-10 px-20 lg:py-12 lg:px-30 xl:py-16 xl:px-35 rounded-30 bg-white text-15 text-center font-bold">FIND OUT MORE</div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>


<style scoped>
.advanture_box {
    background: rgba(0, 0, 0, 0.40);
}

.button {
    background: rgba(255, 255, 255, 0.80);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.10);
}
</style>