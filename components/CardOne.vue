<template>
    <div class="flex flex-col w-full p-24" :class="bg ? `bg-${bg}`: 'bg-white'">
        <img class="w-64 h-64 m-10 mb-34" src="../assets/icons/clouds.png" alt="">
        <h3 class="text-24 font-prosto_one text-grey_80 mb-16">Честные цены</h3>
        <p class="text-16 lg:text-18 text-grey_64 font-interfaces mb-16 flex-auto">от лучших курортов Республики Узбекистан, Центральной Азии, стран ближнего Востока, России, стран Аравийского полуострова,  Юго-Восточной Азии и Китая.</p>
    </div>
</template>



<script>
export default {
    props: {
        // item: {
        //     type: Object,
        //     required: true,
        // },
        bg: {
            type: String,
            required: false,
        },
    },
}
</script>