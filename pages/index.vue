<script setup lang="ts">
import { defineAsyncComponent } from 'vue';


const SectionOne = defineAsyncComponent(() => import('~/components/index/SectionOne.vue'))
const SectionTwo = defineAsyncComponent(() => import('~/components/index/SectionTwo.vue'))
const SectionThree = defineAsyncComponent(() => import('~/components/index/SectionThree.vue'))

</script>

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
    <links-box />

</template>