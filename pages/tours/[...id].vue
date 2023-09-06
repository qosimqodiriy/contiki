<template>
    <page-title :page="{name: $t('page_name_2'), path: '/tours'}" name="Шарм-эш-Шейх" :index="2" />
    <section-two />
</template>

<script>
import SectionTwo from '~/components/tours/SectionTwo.vue'


export default {
    components: {
        SectionTwo,
    },
}
</script>