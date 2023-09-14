<template>
    <div class="flex flex-col w-full h-full p-24" :class="bg ? `bg-${bg}`: 'bg-white'">
        <img class="w-64 h-64 m-10 mb-34 object-cover object-center" :src="`https://contiki.uz/files/${item.image}`" alt="">
        <h3 class="text-24 font-prosto_one text-grey_80 mb-16 flex-auto line-clamp-2">{{ item.title[$i18n.locale] }}</h3>
        <p class="text-16 lg:text-18 text-grey_64 font-interfaces line-clamp-5">{{ item.content[$i18n.locale] }}</p>
    </div>
</template>



<script>
export default {
    props: {
        item: {
            type: Object,
            required: false,
        },
        bg: {
            type: String,
            required: false,
        },
    },
}
</script>