<template>
    <page-title name="Туры" :index="1" />
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