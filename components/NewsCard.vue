<template>
    <div class="border border-grey_8 flex flex-col w-full h-full">
        <img class="w-full aspect-3/2 object-cover object-center" :src="`https://contiki.uz/files/${item.mainImage}`" alt="">

        <div class="p-16 lg:p-20 xl:p-24 flex flex-col flex-auto">
            <h2 class="text-14 md:text-16 xl:text-18 text-black flex-auto font-prosto_one mb-45 lg:mb-60">{{ item.title[$i18n.locale] }}</h2>
            <div class="flex items-center justify-between">
                <p class="text-12 text-grey_40">{{ item.date }}</p>

                <div class="flex items-center gap-8">
                    <p class="text-14 font-interfaces_500 text-black">Подробнее</p>
                    <img class="w-24 h-24" src="../assets/icons/arrow-right.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>



<script>

export default {
    data() {
        return {

        }
    },

    props: {
        item: {
            type: Object,
            required: true,
        },
    },

    methods: {
        formatDate(date) {
            if(date) {
                return date.slice(0, 10)
            } else {
                return '00.00.0000'
            }
        }
    },
};
</script>