<script setup lang="ts">


const props = defineProps({
    item: { type: Object, required: true }
})


</script>




<template>
    <div class="border border-grey_8 rounded-6 overflow-hidden flex flex-col w-full h-full aspect-1/1 relative">
        <img class=" w-full h-full object-cover object-center" :src="`https://contiki.uz/files/${item.image}`" alt="">

        <p class="text absolute bottom-16 left-16 text-F9F9F9">{{ item.name[$i18n.locale] }}</p>
    </div>
</template>



<style scoped>
.text {
    text-shadow: 0px 0px 2px rgba(0,0,0,0.8);
}
</style>