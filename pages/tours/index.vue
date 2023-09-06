<template>
    <page-title :name="$t('page_name_2')" :index="1" />
    <section-one />
    <adventure-box />
</template>


<script>
import SectionOne from '~/components/tours/SectionOne.vue'


export default {
    components: {
        SectionOne,
    },
}
</script>