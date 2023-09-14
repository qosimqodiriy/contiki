<template>
    <Head>
        <Title>Contiki</Title>
        
        <meta property="type" content="website">
        <meta property="og:type" content="website">
        
        <meta property="url" content="https://contiki.uz">
        <meta property="og:url" content="https://contiki.uz">
        
        <meta name="keywords" content="Sayohatlar, ekskursiya, dam olish joylari, tour, travel" />
        <meta name="og:keywords" content="Sayohatlar, ekskursiya, dam olish joylari, tour, travel" />
        
        <meta name="description" content="Toshkentdan sayohatlar: raqobatbardosh narxda unutilmas sayohatlar" />
        <meta name="og:description" content="Toshkentdan sayohatlar: raqobatbardosh narxda unutilmas sayohatlar" />
        
        <!-- <meta property="image" content="https://holdings.pythonanywhere.com/media/dropzone/business_multiple/2023/9/9/1694258864273484.png.900x900_q85.webp">
        <meta property="og:image" content="https://holdings.pythonanywhere.com/media/dropzone/business_multiple/2023/9/9/1694258864273484.png.900x900_q85.webp"> -->
    </Head>

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