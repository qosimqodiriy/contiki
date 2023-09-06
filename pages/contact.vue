<template>
    <page-title :name="$t('page_name_4')" :index="4" />
    <section-one />
</template>


<script>
import SectionOne from '~/components/contact/SectionOne.vue'


export default {
    components: {
        SectionOne,
    },
}
</script>