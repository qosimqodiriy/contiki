<script setup lang="ts">
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router';
import { defineAsyncComponent, onMounted, ref } from 'vue';


const route = useRoute()
const router = useRouter()
const SectionOne = defineAsyncComponent(() => import('~/components/tours/SectionOne.vue'))


const data = ref<{ list: any, loading: boolean }>({ 
    list: {},
    loading: false
})


async function getItems() {
    data.value.loading = true;
    const response = await axios.get(`https://api.contiki.uz/user/tour?id=${route.params.id}`);

    console.log("get tour id");
    console.log(response.data.body);

    data.value.loading = false;
    data.value.list = response.data.body;
}




getItems();
</script>





<template>
    <page-title :page="{name: $t('page_name_2'), path: '/tours'}" :name="`alshoashx aocg aoscg `" :index="2" />
    <!-- <section-one :item="data" /> -->
</template>