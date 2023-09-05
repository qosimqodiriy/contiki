<template>
    <section-one />
    <section-two />
    <section-three />
    <adventure-box />
    <section-four />
    <section-five />
</template>





<script>
import SectionOne from '~/components/index/SectionOne.vue'
import SectionTwo from '~/components/index/SectionTwo.vue'
import SectionThree from '~/components/index/SectionThree.vue'
import SectionFour from '~/components/index/SectionFour.vue'
import SectionFive from '~/components/index/SectionFive.vue'


export default {
    components: {
        SectionOne,
        SectionTwo,
        SectionFour,
        SectionThree,
        SectionFive,
    },
}
</script>