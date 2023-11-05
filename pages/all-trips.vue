<script setup lang="ts">
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router';
import { defineAsyncComponent, onMounted, ref } from 'vue';
import i18n from '~/plugins/i18n';


const route = useRoute()
const router = useRouter()
const select_name = ref('')
const select_active = ref(false)

// const DestinationCard = defineAsyncComponent(() => import('../components/destinations/DestinationCard.vue'))


const countries = ref<{ list: any[] }>({  list: [] })

const data = ref<{ list: any[], count: number, loading: boolean }>({ 
    list: [],
    count: 0,
    loading: true,
})



async function getItems() {
    data.value.loading = true;
    const { offset = 0 } = route.query;
    const { countryId = '' } = route.query;
    console.log(countryId);
    

    const response = await axios.get('https://api.contiki.uz/user/trips', {
        params: {
            limit: 12,
            offset: offset,
            countryId: countryId,
        },
    });
    data.value.loading = false;
    
    // console.log("all Tours");
    console.log(response.data);

    data.value.list = response.data.data;
    data.value.count = response.data.total;
}

async function getCountries() {
    const response = await axios.get('https://api.contiki.uz/user/country');
    countries.value.list = response.data.body.data;
}


async function changeQuery(key: string, value: number) {
    const query = { ...route.query }
    query[key] = String(value)
    await router.replace({ query })
    getItems()
}


async function changeCountry(item: any | null) {
    select_active.value = false;
    select_name.value = item ? item.name.uz : 'All Country';

    if(item == null) {
        await router.replace(route.path);
    } else {
        await router.replace({'query': {'countryId': item.id}});
    }



    getItems()
}



getItems();
getCountries();

onMounted(() => {
    select_name.value = 'All Country';

    document.addEventListener('click', (e: any) => {
        select_active.value = e.srcElement.classList.contains('select') ? select_active.value ? true : false : false;
    })
})
</script>


<template>
    <div class="bg-white py-50 pt-30">
        <div class="container_2">
            <div class="flex flex-wrap items-center justify-between mb-24">
                <p class="text-20 lg:text-24 font-semibold">All Trips</p>

                <div class="relative">
                    <div @click="select_active = !select_active" class="select inline-flex items-center gap-8 cursor-pointer px-25 pr-15 py-8 rounded-30 bg-D73239 text-white">
                        <p class="select text-15 font-medium">Sort By: {{ select_name }}</p>
                        <img class="select w-24" :class="select_active ? '-rotate-90' : 'rotate-90'" src="../assets/icons/arrow-right-s-white.png" alt="">
                    </div>

                    <div class="select_box absolute top-60 right-0 shadow-xl" :class="select_active ? 'select_active' : 'select_not_active'">
                        <div class="select_inner flex flex-col gap-2 max-w-400 min-w-235 max-h-350 overflow-y-scroll border border-grey_40 rounded-5 bg-grey">
                            <p @click="changeCountry(null)" class="text-15 px-10 py-5 font-medium bg-white w-full cursor-pointer">Barchasi</p>
                            <p @click="changeCountry(item)" v-for="item in countries.list" :key="item" class="text-15 px-10 py-5 font-medium bg-white w-full cursor-pointer">{{ item.name.uz }}</p>
                        </div>

                        <div class="select_icon w-16 h-16 absolute -top-8 right-16 rotate-45 bg-white border-t border-l border-grey_40"></div>
                    </div>
                </div>
            </div>

            <div v-if="data.loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-14 xl:gap-20">
                <skeleton-card v-for="item in 12" :key="item" />
            </div>
            
            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-14 xl:gap-20">
                <main-card v-for="item in data.list" :key="item.id" :item="item" />
            </div>

            <!-- Pagination -->
            <Pagination v-if="data.count > 0 && !data.loading" :active="Math.trunc(Number($route.query.offset)/12) + 1 || 1" :perPage="12" :items="data.count" @change="(val) => changeQuery('offset', (val - 1)*12)"/>
        </div>
    </div>
</template>



<style scoped>
* {
    transition: 0.5s;
}

.select_inner::-webkit-scrollbar {
    width: 3px;
    /* background-color: aqua; */
}

.select_inner::-webkit-scrollbar-thumb {
    width: 3px;
    border-radius: 2px;
    /* background-color: red; */
}

.select_icon {
    clip-path: polygon(100% 0, 100% 15%, 15% 100%, 0 100%, 0 0);
}


/* Anime select box */
.select_box.select_active {
    opacity: 1;
    z-index: 20;
    transform: translateY(0);
}

.select_box.select_not_active {
    opacity: 0;
    z-index: -1;
    transform: translateY(-20px);
}

</style>