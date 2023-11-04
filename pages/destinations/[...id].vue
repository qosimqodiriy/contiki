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
    loading: false
})


async function getItems() {
    data.value.loading = true;
    const response = await axios.get(`https://api.contiki.uz/user/continent/${route.params.id[0]}`);

    console.log("get Country id");
    console.log(response.data.body);

    data.value.loading = false;
    data.value.list = response.data.body;
}


async function getTrips() {
    data.value.loading = true;
    const { offset = 0 } = route.query
    const response = await axios.get('https://api.contiki.uz/user/tour/all', {
        params: {
            limit: 12,
            offset: offset,
        },
    });

    console.log(response.data.body.data);

    trips.value.loading = false;
    trips.value.list = response.data.body.data;
    trips.value.count = response.data.body.total;
}


async function changeQuery(key: string, value: number) {
    const query = { ...route.query }
    query[key] = String(value)
    await router.replace({ query })
    getItems()
}




getItems();
getTrips();
onMounted(() => {})
</script>


<template>
    <div>
        <div class="bg-grey py-10">
            <div class="my_container">
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
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 lg:gap-14 xl:gap-20">
                    <main-card v-for="item in trips.list" :key="item.id" :item="item" />
                </div>
    
                <nuxt-link to="/all-trips" v-if="data.list && data.list.length > 0 && !data.loading" class="flex justify-center mt-30 lg:mt-50">
                    <div class="border border-D73239  text-D73239 hover:text-white inline-block mx-auto py-8 pt-10 px-20 lg:py-10 lg:pt-12 lg:px-30 xl:py-12 xl:pt-14 xl:px-35 rounded-30 bg-white hover:bg-D73239 transition-all duration-500 text-15 text-center font-bold">FIND OUT MORE</div>
                </nuxt-link>
    
            </div>



            <!-- Pagination -->
            <!-- v-if="trips.count > 0 && !data.loading"  -->
            <Pagination :active="Math.trunc(Number($route.query.offset)/12) + 1 || 1" :perPage="12" :items="trips.count" @change="(val) => changeQuery('offset', (val - 1)*12)"/>
        </div>
    </div>
</template>