<template>
    <div class="bg-grey py-40 lg:py-60">
        <div class="my_container flex gap-15">
            <div class="w-200 shrink-0">
                <p class="text-24 lg:text-30 font-space_grotesk mb-20">Useful links</p>

                <div class="flex flex-col gap-5">
                    <nuxt-link to="/" class="transition-all duration-500 hover:bg-white px-10 py-5 rounded-2">Travelling</nuxt-link>
                    <nuxt-link to="/destinations" class="transition-all duration-500 hover:bg-white px-10 py-5 rounded-2">Destinations</nuxt-link>
                    <nuxt-link to="/all-trios" class="transition-all duration-500 hover:bg-white px-10 py-5 rounded-2">all-trios</nuxt-link>
                    <nuxt-link to="/about" class="transition-all duration-500 hover:bg-white px-10 py-5 rounded-2">about</nuxt-link>
                    <nuxt-link to="/contact" class="transition-all duration-500 hover:bg-white px-10 py-5 rounded-2">contact</nuxt-link>
                </div>
            </div>
            <div class="flex-auto">
                <img class="w-full h-full object-cover object-center" src="../assets/images/links_bg.png" alt="">
            </div>
        </div>
    </div>
</template>