<template>
    <div class="bg-white py-40 lg:py-52 xl:py-64 2xl:py-72 mb-40">
        <div class="my_container">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-14 xl:gap-20">
                <card-two v-for="item in data" :key="item.id" :item="item" />
            </div>

            <Pagination v-if="data_count > 12" :active="Math.trunc(Number($route.query.offset)/12) + 1 || 1" :perPage="12" :items="data_count" @change="(val) => changeQuery('offset', (val - 1)*12)"/>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    data() {
        return {
            data: [],
            data_count: 0,
            loading: false,
        }
    },

    methods: {
        async changeQuery(key, value) {
            const query = { ...this.$route.query }
            query[key] = String(value)
            await this.$router.replace({ query })
            this.getItems()
        },



        async getItems() {
            this.loading = true;
            const { offset = 0 } = this.$route.query
            const response = await axios.get('https://api.contiki.uz/user/tour/all', {
                params: {
                    limit: 12,
                    offset: offset,
                },
            });
            this.loading = false;
            // console.log("Tours");
            // console.log(response.data.body);
            this.data = response.data.body.data;
            this.data_count = response.data.body.total;
        },
    },

    mounted() {
        this.getItems()
    }
}
</script>