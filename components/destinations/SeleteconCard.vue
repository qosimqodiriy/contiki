<script lang="ts" setup>
const props = defineProps({
    item: { type: Object, required: true }
})


</script>


<template>
    <div class="card aspect-3/2 flex flex-col items-center justify-center bg-grey w-full border rounded-6 overflow-hidden border-grey shadow-lg relative">

        <div class="relative flex flex-col items-center p-20">
            <p class="mb-15 lg:mb-30 w-80% h-35 border-bg-grey_8 rounded-10"></p>
            <div class="button inline-block mx-auto py-8 pt-10 px-20 lg:py-10 lg:pt-12 lg:px-30 xl:py-12 xl:pt-14 xl:px-35 rounded-30 bg-white text-15 text-center font-bold">FIND OUT MORE</div>
        </div>
    </div>
</template>




<style scoped>
* {
    transition: 0.5s;
}

.card {
    background: linear-gradient(180deg, rgba(29, 35, 79, 0.56) 0%, rgba(29, 35, 79, 0.34) 50%, rgba(29, 35, 79, 0.56) 100%);
}
</style>