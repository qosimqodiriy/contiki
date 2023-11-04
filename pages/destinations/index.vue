<script setup lang="ts">
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router';
import { defineAsyncComponent, onMounted, ref } from 'vue';


const route = useRoute()
const router = useRouter()
const DestinationCard = defineAsyncComponent(() => import('../../components/destinations/DestinationCard.vue'))


const data = ref<{ list: any[], count: number, loading: boolean }>({ 
    list: [],
    count: 0,
    loading: false
})



async function getItems() {
    data.value.loading = true;
    const { offset = 0 } = route.query
    const response = await axios.get('https://api.contiki.uz/user/continent', {
        params: {
            limit: 12,
            offset: offset,
        },
    });
    
    console.log("Continents");
    console.log(response.data.body);

    data.value.loading = false;
    data.value.list = response.data.body.data;
    data.value.count = response.data.body.total;
}


getItems();
onMounted(() => {})
</script>


<template>
    <div class="bg-white py-50">
        <div class="container_2">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-14 xl:gap-20">
                <destination-card v-for="item in data.list" :key="item.id" :item="item" />
            </div>

            <nuxt-link to="/all-trips" v-if="data.list && data.list.length > 0 && !data.loading" class="flex justify-center mt-30 lg:mt-50">
                <div class="border border-D73239  text-D73239 hover:text-white inline-block mx-auto py-8 pt-10 px-20 lg:py-10 lg:pt-12 lg:px-30 xl:py-12 xl:pt-14 xl:px-35 rounded-30 bg-white hover:bg-D73239 transition-all duration-500 text-15 text-center font-bold">FIND OUT MORE</div>
            </nuxt-link>

        </div>
    </div>
</template>