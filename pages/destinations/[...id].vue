<script setup lang="ts">
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router';
import { defineAsyncComponent, onMounted, ref } from 'vue';


const route = useRoute()
const router = useRouter()

const data = ref<{ list: any, loading: boolean }>({ 
    list: {},
    loading: false
})

const trips = ref<{ list: any, loading: boolean, count: number }>({ 
    list: [],
    count: 0,
    loading: true,
})


async function getItems() {
    data.value.loading = true;
    const response = await axios.get(`https://api.contiki.uz/user/continent/${route.params.id[0]}`);

    data.value.loading = false;
    data.value.list = response.data.body;
}


async function getTrips() {
    data.value.loading = true;
    const { offset = 0 } = route.query;

    const response = await axios.get('https://api.contiki.uz/user/trips', {
        params: {
            limit: 8,
            offset: offset,
            continentId: route.params.id[0],
        },
    });
    
    trips.value.loading = false;
    trips.value.list = response.data.data;
    trips.value.count = response.data.total;
}


async function changeQuery(key: string, value: number) {
    const query = { ...route.query }
    query[key] = String(value)
    await router.replace({ query })
    getTrips()
}




getItems();
getTrips();
onMounted(() => {})
</script>


<template>
    <div>
        <div class="bg-grey py-10">
            <div class="container_2">
                <div class="flex items-center gap-5">
                    <nuxt-link to="/" class="underline underline-offset-2">Home</nuxt-link>
                    <img class="w-20 h-20 mt-2" src="../../assets/icons/arrow-right-s-black.png" alt="">
                    <nuxt-link to="/destinations" class="underline underline-offset-2">Destinations</nuxt-link>
                    <img class="w-20 h-20 mt-2" src="../../assets/icons/arrow-right-s-black.png" alt="">
                    <p class="">{{ data.list && data.list.name ? data.list.name[$i18n.locale] : '' }}</p>
                </div>
            </div>
        </div>

        <page-title :bg_img="data.list.image" :name="`TRIPS TO ${data.list && data.list.name ? data.list.name[$i18n.locale] : ''}`" :index="4" />

        <div class="bg-white py-50 lg:py-80">
            <div class="container_2">
                <h1 class="title_text text-center mb-30">Top {{ data.list && data.list.name ? data.list.name[$i18n.locale] : '' }} trips</h1>


                <div v-if="trips.loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-14 xl:gap-20">
                    <skeleton-card v-for="item in 4" :key="item" />
                </div>

                <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-14 xl:gap-20">
                    <main-card v-for="item in trips.list" :key="item.id" :item="item" />
                </div>
            </div>



            <!-- Pagination -->
            <Pagination v-if="trips.count > 8 && !trips.loading" :active="Math.trunc(Number($route.query.offset)/8) + 1 || 1" :perPage="8" :items="trips.count" @change="(val) => changeQuery('offset', (val - 1)*8)"/>
        </div>
    </div>
</template>