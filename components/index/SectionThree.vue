<template>
    <div class="bg-grey space-y-50 lg:space-y-80 py-100">
        <div class="container_2">
            <div class="grid grid-cols-1 lg:grid-cols-7 gap-50 lg:gap-80">
                <div class="lg:col-span-4">
                    <p class="text-black text-20 md:text-22 lg:text-24 xl:text-28 font-space_grotesk font-semibold mb-10">"Our journeys go beyond mere destinations – although with us, you'll explore a multitude of captivating places. They're about cherishing every moment of travel. They're about delving deep into each locale, guided by our knowledgeable local experts."</p>
                    <p class="text-black md:text-17 font-raleway">"They're about embracing diverse cultures and lifestyles, curated through our carefully selected experiences. Most importantly, they're about reveling in the joy of travel and forging enduring connections that endure well past the journey's conclusion: connections with new destinations and kindred spirits equally eager for adventure as you are."</p>
                </div>

                <div class="w-full lg:col-span-3 aspect-5/3 relative">
                    <!-- <iframe width="1280" height="720" src="https://www.youtube.com/embed/wHYZI1c1lM8?list=RDwHYZI1c1lM8" title="DJ Muratti - Keep On Rising (Remix)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
                    <img class="w-full h-full object-cover object-center" src="../../assets/images/page_bg_img_1.png" alt="">
                    <img class="w-46 lg:w-56 xl:w-68 absolute top-50% left-50% -translate-x-50% -translate-y-50%" src="../../assets/icons/youtube-red.png" alt="">
                    <div class="absolute bottom-5 left-0 flex items-center gap-5 py-10 lg:py-15 px-8 lg:px-12 rounded-r-2 bg_watch">
                        <p class="text-white font-medium font-roboto leading-17">Watch on</p>
                        <img class="h-18" src="../../assets/icons/youtube-white.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <travel-box />
    </div>
</template>


<style scoped>
.bg_watch {
    background: rgba(23, 23, 23, 0.80);
}
</style>