<template>
    <div class="card flex flex-col bg-white w-full relative border rounded-6 border-grey shadow-md animate-pulse">
        <div class="w-full aspect-5/4 shrink-0 rounded-t-6 bg-grey_8"></div>

        <div class="content flex flex-col w-full h-full p-10 lg:p-16">
            <p class="flex-auto mb-15 w-60% h-26 border-bg-grey_8 rounded-10"></p>
            
            <div class="flex flex-nowrap items-center justify-between mb-15 lg:mb-20">
                <div v-for="item in 3" :key="item" class="w-30% h-22 bg-grey_8 rounded-10"></div>
            </div>

            <div class="w-full h-24 rounded-10 bg-grey_8 mb-15"></div>

            <div class="flex flex-wrap items-center justify-between">
                <div class="">
                    <p class="w-80 h-22 bg-grey rounded-10 mb-5"></p>
                    <p class="w-120 h-22 bg-grey_8 rounded-10 "></p>
                </div>

                <div class="w-130 h-45 rounded-30 bg-grey_8"></div>
            </div>
        </div>
    </div>
</template>