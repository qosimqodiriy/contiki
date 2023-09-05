<template>
    <page-title name="О нас" :index="3" />
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