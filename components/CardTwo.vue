<template>
    <NuxtLink :to="`/tours/${item.id}`" class="card flex flex-col w-full aspect-2/3 relative border border-grey">
        <p class="price text-12 md:text-14 xl:text-16 px-16 py-6 text-white font-interfaces absolute top-16 right-16 lg:top-20 lg:right-20 xl:top-24 xl:right-24">{{ item.price }}</p>
        <img v-if="item.images && item.images[0] != null && item.images.length > 1" class="aspect-2/3 object-cover object-center" :src="`https://contiki.uz/files/${item.images[0]}`" alt="">

        <div class="absolute bottom-16 left-16 lg:bottom-20 lg:left-20 xl:bottom-24 xl:left-24">
            <p class="text-12 lg:text-14 font-prosto_one text-white">{{ item.countDay }} дней</p>
            <h2 class="text-18 lg:text-22 font-prosto_one text-white">{{ item.title[$i18n.locale] }}</h2>
        </div>
    </NuxtLink>
</template>



<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
}
</script>


<style scoped>

.card {
    background: linear-gradient(180deg, rgba(29, 35, 79, 0.56) 0%, rgba(29, 35, 79, 0.34) 50%, rgba(29, 35, 79, 0.56) 100%);
}
.price {
    backdrop-filter: blur(21px);
    background: rgba(29, 35, 79, 0.16);
}
</style>