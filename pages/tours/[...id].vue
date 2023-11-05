<script setup lang="ts">
import axios from 'axios'
import { useRoute } from 'vue-router';
import { defineAsyncComponent, ref } from 'vue';


const route = useRoute()
const SectionOne = defineAsyncComponent(() => import('~/components/tours/SectionOne.vue'))


const data = ref<{ list: any, loading: boolean }>({ 
    list: {},
    loading: false
})


async function getItems() {
    data.value.loading = true;
    const response = await axios.get(`https://api.contiki.uz/user/trips/${route.params.id}`);

    data.value.loading = false;
    data.value.list = response.data[0];
}




getItems();
</script>





<template>
    <section-one :item="data.list" />
</template>