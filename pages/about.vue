<template>
    <page-title :name="$t('page_name_3')" :index="3" />
    <section-one />
    <adventure-box />
</template>


<script>
import SectionOne from '~/components/about/SectionOne.vue'


export default {
    components: {
        SectionOne,
    },
}
</script>